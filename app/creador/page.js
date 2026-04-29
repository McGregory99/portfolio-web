import SocialChannelCard from "../components/SocialChannelCard";
import { channels } from "../lib/channels";

export const metadata = {
    title: "Creador | Goyo Cancio",
    description: "Contenido sobre desarrollo en YouTube, TikTok e Instagram.",
};

export default function CreadorPage() {
    return (
        <main className="max-w-screen-md mx-auto px-6 py-20">
            <header className="mb-14">
                <p className="text-xs tracking-widest uppercase text-muted mb-3">02 —</p>
                <h1
                    className="text-5xl md:text-7xl font-black text-foreground leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Creador de<br />
                    <span className="italic text-accent">Contenido.</span>
                </h1>
                <div className="w-12 h-px bg-accent mt-8 mb-8" />
                <p className="text-xs text-muted leading-relaxed max-w-md">
                    Comparto mi experiencia como desarrollador a través de contenido corto y largo —
                    desde tutoriales técnicos en profundidad hasta tips del día a día.
                </p>
            </header>
            <div className="flex flex-col gap-3">
                {channels.map((ch) => (
                    <SocialChannelCard key={ch.platform} channel={ch} />
                ))}
            </div>
        </main>
    );
}
