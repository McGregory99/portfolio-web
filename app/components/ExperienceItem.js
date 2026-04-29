import Image from "next/image";

export default function ExperienceItem({ experience }) {
    const { title, company, period, projects, technologies, image } = experience;

    return (
        <div className="group border border-border rounded-xl p-6 md:p-8 bg-surface hover:border-accent/30 transition-all duration-300">
            <div className="flex gap-5 items-start">
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg overflow-hidden border border-border bg-surface-2">
                    <Image src={image} alt={`${company} logo`} fill className="object-contain p-1.5" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                        <div>
                            <h3
                                className="text-lg md:text-xl font-bold text-foreground"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {title}
                            </h3>
                            <p className="text-accent text-sm tracking-wide">{company}</p>
                        </div>
                        <p className="text-xs text-muted tracking-widest uppercase flex-shrink-0">{period}</p>
                    </div>

                    {projects && projects.length > 0 && (
                        <ul className="mb-5 space-y-1.5">
                            {projects.map((project, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                                    <span className="text-accent/60 mt-0.5 flex-shrink-0">→</span>
                                    {project}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded border border-border text-accent/70 bg-surface-2"
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
