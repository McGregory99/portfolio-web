import ProjectItem from "./ProjectItem";

/**
 * ProjectsSection component
 * Displays a row of project icons that redirect to their respective subdomains
 */
export default function ProjectsSection() {
    // Sample project data
    const projects = [
        {
            image: "/esmimascota.png",
            subdomain: "esmimascota",
        },
        {
            image: "/window.svg",
            subdomain: "taskmanager",
        },
        {
            image: "/globe.svg",
            subdomain: "travelblog",
        },
        {
            image: "/file.svg",
            subdomain: "weatherapp",
        },
        {
            image: "/window.svg",
            subdomain: "portfolio",
        },
        {
            image: "/globe.svg",
            subdomain: "chatapp",
        },
    ];

    return (
        <section id="projects" className="py-12">
            <div className="container mx-auto px-8 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    Proyectos
                </h2>

                <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-3xl">
                    En mi tiempo libre, desarrollo aplicaciones innovadoras
                    centradas en la salud y la inteligencia artificial,
                    incluyendo soluciones para el Apple Watch y agentes de IA
                    para distintas plataformas. Puedes descubrir más sobre mis
                    proyectos en mi web. Mi mail está siempre abierto para
                    nuevas oportunidades y colaboraciones.
                </p>

                {/* Projects row */}
                <div className="flex flex-wrap gap-6 md:gap-8 justify-start">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fadeIn"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <ProjectItem project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
