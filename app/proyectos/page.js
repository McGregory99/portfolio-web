import ProjectItem from "../components/ProjectItem";
import ClientProjectItem from "../components/ClientProjectItem";
import { projects } from "../lib/projects";
import { clientProjects } from "../lib/clientProjects";

export const metadata = {
    title: "Proyectos | Goyo Cancio",
    description: "Proyectos personales y trabajos para clientes desarrollados por Goyo Cancio.",
};

export default function ProyectosPage() {
    return (
        <div className="max-w-screen-md mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold">Proyectos</h1>
                <p className="mt-3 text-sm md:text-base text-foreground/60">
                    Proyectos personales y trabajos realizados para clientes.
                </p>
            </div>

            {/* Proyectos personales */}
            <section className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Proyectos Personales</h2>
                <p className="text-sm text-foreground/60 mb-8">
                    Proyectos desarrollados para aprender, experimentar y construir productos propios.
                </p>
                <div className="flex flex-wrap gap-6 justify-center">
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* Proyectos para clientes */}
            <section>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Proyectos para Clientes</h2>
                <p className="text-sm text-foreground/60 mb-8">
                    Soluciones desarrolladas a medida para empresas y emprendedores.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clientProjects.map((project, index) => (
                        <ClientProjectItem key={index} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
