import Link from "next/link";
import { urlDeAceptacion, urlDelRepositorio } from "@/lib/github";

export const metadata = {
  title: "Ya casi",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

/**
 * Pantalla final.
 *
 * Si el estado es `pending`, GitHub le ha mandado un correo — pero no hace
 * falta abrirlo: el boton lleva directo a la pantalla de aceptacion, sin salir
 * del navegador.
 *
 * Si es `active`, ya estaba en la organizacion y entra sin mas pasos.
 */
export default async function Listo({ searchParams }) {
  const { u: usuario, e: estado } = await searchParams;
  const yaDentro = estado === "active";

  const boton =
    "mt-8 flex w-full items-center justify-center rounded bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85";

  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">
          Astillero
        </p>

        <h1 className="mt-3 text-2xl font-bold tracking-tight">
          {yaDentro ? "Ya tienes acceso" : "Hecho"}
          {usuario && <>, {usuario}</>}
        </h1>

        {yaDentro ? (
          <>
            <p className="mt-3 text-sm leading-relaxed opacity-70">
              Estás dentro del equipo. Puedes clonar el repositorio ya mismo.
            </p>
            <Link href={urlDelRepositorio()} className={boton}>
              Ir al repositorio
            </Link>
          </>
        ) : (
          <>
            <p className="mt-3 text-sm leading-relaxed opacity-70">
              Solo queda que confirmes en GitHub. Es un clic.
            </p>
            <Link href={urlDeAceptacion()} className={boton}>
              Aceptar invitación →
            </Link>
            <p className="mt-6 text-xs leading-relaxed opacity-50">
              También te ha llegado por correo, pero no hace falta que lo abras.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
