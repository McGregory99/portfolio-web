import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "node:crypto";

export const metadata = {
  title: "Acceso al Astillero Ship Kit",
  description: "Conecta tu cuenta de GitHub y accede al repositorio.",
  // Pagina de acceso interno: no interesa que la indexen.
  robots: { index: false, follow: false },
};

// Sin cache: cada visita genera su propio `state`.
export const dynamic = "force-dynamic";

const ERRORES = {
  acceso_denegado: "Has cancelado la autorización en GitHub. Puedes intentarlo otra vez.",
  estado_invalido:
    "La petición no se pudo verificar. Vuelve a empezar desde el enlace original.",
  sin_codigo: "GitHub no devolvió el código de autorización. Inténtalo de nuevo.",
  fallo: "Algo ha fallado por nuestra parte. Inténtalo en un momento.",
};

/**
 * Genera el `state` anti-CSRF y manda a GitHub.
 *
 * El `state` es un valor aleatorio que viaja a GitHub y vuelve. Al volver se
 * compara con el que guardamos en una cookie: si no coinciden, la peticion no
 * la inicio esta persona desde esta pagina, y se rechaza. Sin esto, alguien
 * podria hacer que canjearas SU codigo de autorizacion.
 */
async function empezar() {
  "use server";

  const state = crypto.randomBytes(16).toString("hex");
  const galletas = await cookies();
  galletas.set("oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600, // diez minutos: de sobra para autorizar
    path: "/",
  });

  // La URL de retorno se calcula desde el host de esta peticion, no se deja al
  // valor por defecto de la OAuth App. Si se omite, GitHub usa la primera URL
  // registrada — y probando en local te devolveria a produccion.
  const cabeceras = await headers();
  const host = cabeceras.get("x-forwarded-host") ?? cabeceras.get("host");
  const protocolo =
    cabeceras.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", process.env.GITHUB_CLIENT_ID ?? "");
  url.searchParams.set("redirect_uri", `${protocolo}://${host}/acceso/callback`);
  // `read:user` es el permiso mas pequeno que existe: solo leer el perfil
  // publico. No damos acceso a repositorios ni a nada escribible.
  url.searchParams.set("scope", "read:user");
  url.searchParams.set("state", state);

  redirect(url.toString());
}

export default async function Acceso({ searchParams }) {
  const { error } = await searchParams;

  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">
          Astillero
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight">
          Acceso al starter kit
        </h1>
        <p className="mt-3 text-sm leading-relaxed opacity-70">
          Conecta tu cuenta de GitHub y te damos acceso al repositorio. Solo
          leemos tu nombre de usuario.
        </p>

        {error && (
          <p className="mt-6 rounded border border-red-500/40 bg-red-500/10 p-3 text-sm">
            {ERRORES[error] ?? ERRORES.fallo}
          </p>
        )}

        <form action={empezar} className="mt-8">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2.5 rounded bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 fill-current">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            Entrar con GitHub
          </button>
        </form>

        <p className="mt-6 text-xs leading-relaxed opacity-50">
          Después tendrás que aceptar la invitación en GitHub. Te lo ponemos a un
          clic.
        </p>
      </div>
    </main>
  );
}
