import ProjectItem from "./ProjectItem";

/**
 * ProjectsSection component
 * Displays a row of project icons that redirect to their respective subdomains
 */
export default function ProjectsSection() {
    // Sample project data
    const projects = [
        {
            image: "/projects_logo/esmimascota.png",
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
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Proyectos
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <p className="mb-8 text-base-content max-w-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam, quos. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer nec odio. Praesent libero. Sed
                    cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                    elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                    Fusce nec tellus sed augue semper porta. Mauris massa.
                    Vestibulum lacinia arcu eget nulla. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitur sodales ligula in libero. Sed dignissim
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
