import Link from "next/link";

export const metadata = {
    title: "Página no encontrada | Goyo Cancio",
    // Un 404 no aporta nada en el índice de Google.
    robots: { index: false, follow: true },
};

// Los tres sitios donde de verdad hay algo. Mantener alineado con el Header.
const destinos = [
    { href: "/proyectos", nombre: "Proyectos", nota: "Lo que he construido" },
    { href: "/cv", nombre: "CV", nota: "Mi trayectoria" },
    { href: "/creador", nombre: "Creador", nota: "Lo que publico" },
];

/**
 * Pagina 404.
 *
 * Next.js la usa tanto para rutas inexistentes como para las llamadas
 * explicitas a notFound() — que aqui las hay: /mentoria y /colabora la invocan
 * mientras estan sin terminar. Por eso el texto no da por hecho que el visitante
 * se haya equivocado: puede haber llegado a algo que aun no esta publicado.
 */
export default function NotFound() {
    return (
        <main className="max-w-screen-md mx-auto px-6 py-20">
            <header className="mb-14">
                <p className="text-xs tracking-widest uppercase text-muted mb-3">
                    404 —
                </p>
                <h1
                    className="text-5xl md:text-7xl font-black text-foreground leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Aquí no hay<br />
                    <span className="italic text-accent">nada.</span>
                </h1>
                <div className="w-12 h-px bg-accent mt-8" />
            </header>

            <p className="text-muted leading-relaxed max-w-md mb-14">
                O la dirección tiene una errata, o esto todavía no está publicado.
                Ambas cosas pasan. Por aquí sí hay algo:
            </p>

            <nav className="border-t border-border">
                {destinos.map(({ href, nombre, nota }) => (
                    <Link
                        key={href}
                        href={href}
                        className="group flex items-baseline justify-between gap-6 border-b border-border py-5 transition-colors hover:bg-surface-2"
                    >
                        <span
                            className="text-2xl md:text-3xl font-black text-foreground transition-colors group-hover:text-accent"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            {nombre}
                        </span>
                        <span className="text-xs tracking-widest uppercase text-muted text-right">
                            {nota}
                        </span>
                    </Link>
                ))}
            </nav>

            <p className="mt-14 text-sm text-muted">
                O vuelve al{" "}
                <Link
                    href="/"
                    className="text-foreground underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
                >
                    principio
                </Link>
                .
            </p>
        </main>
    );
}
