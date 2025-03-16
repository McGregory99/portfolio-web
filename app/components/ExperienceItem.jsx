import Image from "next/image";

/**
 * ExperienceItem component
 * Displays a single work experience block with image, title, description and technologies
 */
export default function ExperienceItem({ experience }) {
    const {
        title,
        company,
        period,
        description,
        projects,
        technologies,
        image,
    } = experience;

    return (
        <div className="flex flex-col md:flex-row gap-6 mb-12 p-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            {/* Company/Job image - rounded and positioned at the top left */}
            <div className="flex-shrink-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-200/20 shadow-inner">
                    <Image
                        src={image}
                        alt={`${company} logo`}
                        fill
                        className="object-cover scale-105 transition-transform"
                    />
                </div>
            </div>

            {/* Text block on the right */}
            <div className="flex-grow">
                {/* Job title and company name */}
                <div className="mb-5 md:mt-5">
                    <h3 className="text-lg md:text-xl font-bold">{title}</h3>
                    <div className="flex justify-between flex-wrap">
                        <p className="text-lg md:text-xl text-base-content">
                            {company}
                        </p>
                        <p className="text-sm text-base-content">{period}</p>
                    </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-base-content text-sm md:text-base text-justify">
                    {description}
                </p>

                {/* Projects list */}
                {projects && projects.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-2 text-base-content">
                            Proyectos:
                        </h4>
                        <ul className="list-disc pl-5 text-base-content">
                            {projects.map((project, index) => (
                                <li
                                    key={index}
                                    className="mb-1 hover:text-base-content transition-colors"
                                >
                                    {project}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies list */}
                <div>
                    <h4 className="text-sm font-semibold mb-2 text-base-content">
                        Tecnologías:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="badge badge-secondary">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
