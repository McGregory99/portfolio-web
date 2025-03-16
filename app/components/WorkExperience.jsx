import ExperienceItem from "./ExperienceItem";

/**
 * WorkExperience component
 * Displays a section with all work experiences
 */
export default function WorkExperience() {
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

    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Experiencia Laboral
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    {/* <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Mi trayectoria profesional incluye experiencia en
                        ...
                    </p> */}
                </div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}
