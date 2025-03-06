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
            period: "2023 - Presente",
            description:
                "Involucrado en varios proyectos de preparacion y procesamiento de datos satelitales. Desarrollo del primer simulador de imagenes por satelite.",
            technologies: ["Python", "Remote Sensing", "Streamlit", "Docker"],
            image: "/grasp.png",
        },
        {
            title: "Desarrollador Full Stack",
            company: "Digital Solutions",
            period: "2019 - 2022",
            description:
                "Desarrollé y mantuve aplicaciones web y móviles utilizando tecnologías modernas. Implementé funcionalidades tanto en el frontend como en el backend, colaborando con equipos multidisciplinarios en metodologías ágiles. Optimicé el rendimiento de las aplicaciones y resolví problemas complejos.",
            technologies: [
                "JavaScript",
                "Node.js",
                "React",
                "MongoDB",
                "Express",
                "Docker",
            ],
            image: "/globe.svg", // Usando una imagen de ejemplo
        },
        {
            title: "Ingeniero de Investigacion",
            company: "Universidad de Valladolid (UVa)",
            period: "2017 - 2019",
            description:
                "Participé en el desarrollo de sitios web responsivos, implementando interfaces de usuario según los diseños proporcionados. Colaboré en la resolución de bugs y en la mejora de la experiencia de usuario. Aprendí y apliqué las mejores prácticas en desarrollo web.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "WordPress",
                "jQuery",
            ],
            image: "/uva.png",
        },
    ];

    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Experiencia Laboral
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Mi trayectoria profesional incluye experiencia en
                        desarrollo frontend, backend y tecnologías full-stack,
                        trabajando en proyectos variados y colaborando con
                        equipos multidisciplinarios.
                    </p>
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
