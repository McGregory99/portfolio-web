import ProjectItem from "../components/ProjectItem";
import ClientProjectItem from "../components/ClientProjectItem";
import { projects } from "../lib/projects";
import { clientProjects } from "../lib/clientProjects";

export const metadata = {
    title: "Proyectos | Goyo Cancio",
    description: "Proyectos personales y trabajos para clientes de Goyo Cancio.",
};

export default function ProyectosPage() {
    return (
        <main className="max-w-screen-md mx-auto px-6 py-20">
            <header className="mb-14">
                <p className="text-xs tracking-widest uppercase text-muted mb-3">03 —</p>
                <h1
                    className="text-5xl md:text-7xl font-black text-foreground leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Proyectos<br />
                    <span className="italic text-accent">& Clientes.</span>
                </h1>
                <div className="w-12 h-px bg-accent mt-8" />
            </header>

            {/* Proyectos personales */}
            <section className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <p className="text-xs tracking-widest uppercase text-muted">Personales</p>
                    <div className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-wrap gap-8 justify-start">
                    {projects.map((p, i) => (
                        <ProjectItem key={i} project={p} />
                    ))}
                </div>
            </section>

            {/* Proyectos para clientes */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <p className="text-xs tracking-widest uppercase text-muted">Clientes</p>
                    <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {clientProjects.map((p, i) => (
                        <ClientProjectItem key={i} project={p} />
                    ))}
                </div>
            </section>
        </main>
    );
}
