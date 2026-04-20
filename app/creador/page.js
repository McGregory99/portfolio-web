import SocialChannelCard from "../components/SocialChannelCard";
import { channels } from "../lib/channels";

export const metadata = {
    title: "Creador | Goyo Cancio",
    description: "Contenido sobre desarrollo de software en YouTube, TikTok e Instagram.",
};

export default function CreadorPage() {
    return (
        <div className="max-w-screen-md mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold">Creador de Contenido</h1>
                <p className="mt-3 text-sm md:text-base text-foreground/60 max-w-lg mx-auto">
                    Comparto mi experiencia como desarrollador a través de contenido corto y largo.
                    Desde tutoriales en profundidad hasta tips rápidos del día a día.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {channels.map((channel) => (
                    <SocialChannelCard key={channel.platform} channel={channel} />
                ))}
            </div>
        </div>
    );
}
