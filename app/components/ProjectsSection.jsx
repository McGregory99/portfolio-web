import ProjectItem from "./ProjectItem";

/**
 * ProjectsSection component
 * Displays a grid of projects that redirect to their respective subdomains
 */
export default function ProjectsSection() {
    // Sample project data
    const projects = [
        {
            title: "E-commerce App",
            image: "/file.svg", // Placeholder image
            subdomain: "ecommerce",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
            title: "Task Manager",
            image: "/window.svg", // Placeholder image
            subdomain: "taskmanager",
            technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        },
        {
            title: "Travel Blog",
            image: "/globe.svg", // Placeholder image
            subdomain: "travelblog",
            technologies: ["Next.js", "GraphQL", "Vercel"],
        },
        {
            title: "Weather App",
            image: "/file.svg", // Placeholder image
            subdomain: "weatherapp",
            technologies: ["React Native", "OpenWeather API", "Redux"],
        },
        {
            title: "Portfolio Template",
            image: "/window.svg", // Placeholder image
            subdomain: "portfolio",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        },
        {
            title: "Chat Application",
            image: "/globe.svg", // Placeholder image
            subdomain: "chatapp",
            technologies: ["Angular", "Socket.io", "Express", "MongoDB"],
        },
    ];

    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Proyectos
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Aquí puedes encontrar algunos de mis proyectos más
                        destacados. Cada proyecto muestra diferentes habilidades
                        y tecnologías. Haz clic en cualquiera de ellos para ver
                        más detalles.
                    </p>
                </div>

                {/* Projects grid with animation on scroll */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fadeIn"
                            style={{
                                animationDelay: `${index * 150}ms`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <ProjectItem project={project} />
                        </div>
                    ))}
                </div>

                {/* View all projects button */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        <span>Ver todos los proyectos</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
