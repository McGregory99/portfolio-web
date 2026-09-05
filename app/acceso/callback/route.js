/**
 * Vuelta de GitHub tras autorizar. Aqui pasan las tres cosas:
 *
 *   1. canjear el codigo por un token de la persona
 *   2. preguntarle a GitHub quien es
 *   3. invitarla al equipo con NUESTRO token de administracion
 *
 * Todo en el servidor. El canje requiere el client secret, que en el navegador
 * permitiria a cualquiera suplantar a esta aplicacion.
 */
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { canjearCodigo, invitarAlEquipo, quienEs } from "@/lib/github";

function alError(request, motivo) {
  return NextResponse.redirect(new URL(`/acceso?error=${motivo}`, request.url));
}

export async function GET(request) {
  const params = request.nextUrl.searchParams;

  // La persona pulso "Cancelar" en la pantalla de GitHub.
  if (params.get("error")) return alError(request, "acceso_denegado");

  const code = params.get("code");
  const state = params.get("state");
  if (!code) return alError(request, "sin_codigo");

  // Comprobacion anti-CSRF: el `state` que vuelve tiene que ser el mismo que
  // guardamos al empezar. Si no, esta peticion no la inicio esta persona aqui.
  const galletas = await cookies();
  const esperado = galletas.get("oauth_state")?.value;
  if (!state || !esperado || state !== esperado) {
    return alError(request, "estado_invalido");
  }
  // De un solo uso: se borra en cuanto se valida.
  galletas.delete("oauth_state");

  try {
    const tokenPersona = await canjearCodigo(code);
    const usuario = await quienEs(tokenPersona);
    const estado = await invitarAlEquipo(usuario);

    // El token de la persona no se guarda en ningun sitio: ha cumplido su
    // unica funcion, que era demostrar quien es.

    console.log(
      JSON.stringify({
        evento: "acceso_concedido",
        usuario,
        estado,
        ts: new Date().toISOString(),
      }),
    );

    const destino = new URL("/acceso/listo", request.url);
    destino.searchParams.set("u", usuario);
    destino.searchParams.set("e", estado);
    return NextResponse.redirect(destino);
  } catch (e) {
    // Se registra el detalle para ti y se le enseña un mensaje generico: los
    // errores de GitHub pueden traer informacion que no toca mostrar.
    console.error(
      JSON.stringify({
        evento: "acceso_fallido",
        error: e instanceof Error ? e.message : String(e),
        ts: new Date().toISOString(),
      }),
    );
    return alError(request, "fallo");
  }
}
