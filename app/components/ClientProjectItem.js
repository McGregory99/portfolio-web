export default function ClientProjectItem({ project }) {
    const { name, client, description, technologies, videoUrl } = project;

    return (
        <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-200 rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-transform flex flex-col gap-4">
            <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {client}
                </p>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-foreground/70 mt-2 text-justify">{description}</p>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                {videoUrl ? (
                    <video
                        src={videoUrl}
                        controls
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Vídeo próximamente</span>
                    </div>
                )}
            </div>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-foreground text-accent font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
