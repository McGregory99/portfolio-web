import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
    // Data for work experiences
    const experiences = [
        {
            title: "Software Engineer & Data Analyst",
            company: "GRASP SPAIN",
            period: "Sep. 2023 - Presente",
            description:
                "Desarrollo de una aplicación web para la generación de medidas sintéticas de satélites en el marco de un proyecto NEOTEC financiado por el CDTI. Responsable de varias tareas de preparación y procesamiento de datos satelitales críticos para la observación terrestre, implementando soluciones técnicas innovadoras que optimizan la calidad y utilidad de la información geoespacial obtenida.",
            projects: [
                "Simulador de medidas de instrumentos satelitales",
                "Preparacion y procesamiento de datos geoespaciales (S5P, OLCI, Sentinel-2...)",
            ],
            technologies: ["Python", "Remote Sensing", "Streamlit", "Docker"],
            image: "/company_logo/grasp.png",
        },
        {
            title: "Analista en Prácticas",
            company: "KPMG",
            period: "Mar. 2023 - Ago. 2023",
            description:
                "Colaboración con el departamento de Estrategia (Technology Enablement) participando en proyectos de desarrollo y transformación digital para clientes corporativos. Esta experiencia me permitió adquirir una visión global del ciclo de vida de proyectos tecnológicos en entornos corporativos, decidiendo posteriormente orientar mi carrera hacia equipos más pequeños, donde pudiera tener mayor impacto directo en el desarrollo.",
            technologies: [
                "Quality Assurance",
                "Documentación Técnica",
                "Presentaciones Ejecutivas",
                "Consultoría Tecnológica",
            ],
            image: "/company_logo/kpmg.png",
        },
        {
            title: "Ingeniero de Investigación en Visión Artificial",
            company: "Universidad de Valladolid (UVa)",
            period: "Nov. 2021 - Mar. 2023",
            description:
                "Desarrollé sistemas de visión artificial aplicados a mantenimiento predictivo industrial y soluciones IoT. Implementé un sistema de detección de variaciones de longitud en cintas transportadoras utilizando algoritmos de IA para predecir posibles averías. También lideré el desarrollo de un prototipo contador de visitantes para eventos en espacios abiertos basado en visión artificial y componentes IoT, logrando una solución innovadora y eficiente.",
            projects: [
                "Sistema de prevencion de roturas en cintas transportadoras",
                "Prototipo contador de visitantes para eventos en espacios abiertos",
            ],
            technologies: [
                "Python",
                "Computer Vision",
                "IoT",
                "Inteligencia Artificial",
                "Ciencia de Datos",
                "Machine Learning",
            ],
            image: "/company_logo/uva.png",
        },
    ];

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
        <div className="flex flex-col max-w-screen-md mx-auto">
            <Header />

            {/* Work Experience Section*/}
            <section id="experience">
                <div className="container mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Experiencia Laboral
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Proyectos
                        </h2>
                    </div>

                    <p className="text-base-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quisquam, quos. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Integer nec odio. Praesent
                        libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                        quis sem at nibh elementum imperdiet. Duis sagittis
                        ipsum. Praesent mauris. Fusce nec tellus sed augue
                        semper porta. Mauris massa. Vestibulum lacinia arcu eget
                        nulla. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Curabitur
                        sodales ligula in libero. Sed dignissim
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

            <footer className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Goyo Cancio. Todos los derechos
                reservados.
            </footer>
        </div>
    );
}
