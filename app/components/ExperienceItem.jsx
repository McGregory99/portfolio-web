import Image from "next/image";

/**
 * ExperienceItem component
 * Displays a single work experience block with image, title, description and technologies
 */
export default function ExperienceItem({ experience }) {
    const { title, company, period, description, technologies, image } =
        experience;

    return (
        <div className="flex flex-col md:flex-row gap-6 mb-12 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            {/* Company/Job image - rounded and positioned at the top left */}
            <div className="flex-shrink-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-200/20 shadow-inner">
                    <Image
                        src={image}
                        alt={`${company} logo`}
                        fill
                        className="object-cover transition-transform hover:scale-110 duration-300"
                    />
                </div>
            </div>

            {/* Text block on the right */}
            <div className="flex-grow">
                {/* Job title and company name */}
                <div className="mb-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div className="flex justify-between flex-wrap">
                        <p className="text-lg text-gray-300">{company}</p>
                        <p className="text-sm text-gray-400">{period}</p>
                    </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-gray-300">{description}</p>

                {/* Technologies list */}
                <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">
                        Tecnologías:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs hover:bg-gray-700 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
