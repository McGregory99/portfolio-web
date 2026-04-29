export default function ClientProjectItem({ project }) {
    const { name, client, description, technologies, videoUrl } = project;

    return (
        <div className="group border border-border rounded-xl overflow-hidden bg-surface hover:border-accent/30 transition-all duration-300">
            <div className="aspect-video w-full bg-surface-2 border-b border-border flex items-center justify-center relative overflow-hidden">
                {videoUrl ? (
                    <video src={videoUrl} controls className="w-full h-full object-cover" />
                ) : (
                    <div className="flex flex-col items-center gap-3 text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                        </svg>
                        <span className="text-[10px] tracking-widest uppercase opacity-40">Vídeo próximamente</span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col gap-3">
                <div>
                    <p className="text-[10px] tracking-widest uppercase text-accent/70 mb-1">{client}</p>
                    <h3
                        className="text-lg font-bold text-foreground"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {name}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mt-2">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                    {technologies.map((tech) => (
                        <span key={tech} className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded border border-border text-accent/70 bg-surface-2">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
