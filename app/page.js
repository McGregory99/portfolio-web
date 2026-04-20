import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    { name: "LinkedIn", icon: "/social/linkedin.svg", url: "https://linkedin.com/in/goyocancio" },
    { name: "GitHub", icon: "/social/github.svg", url: "https://github.com/McGregory99" },
    { name: "X", icon: "/social/x.svg", url: "https://x.com/goyo_is_a_dev" },
    { name: "YouTube", icon: "/social/youtube.svg", url: "https://www.youtube.com/@goyo_is_a_dev" },
    { name: "TikTok", icon: "/social/tiktok.svg", url: "https://www.tiktok.com/@goyo.dev" },
];

const sections = [
    {
        href: "/cv",
        title: "CV",
        description: "Mi experiencia laboral como Software Engineer.",
        emoji: "💼",
    },
    {
        href: "/creador",
        title: "Creador",
        description: "Contenido sobre desarrollo en YouTube, TikTok e Instagram.",
        emoji: "🎬",
    },
    {
        href: "/proyectos",
        title: "Proyectos",
        description: "Proyectos personales y trabajos realizados para clientes.",
        emoji: "🚀",
    },
];

export default function Home() {
    return (
        <div className="max-w-screen-md mx-auto px-4 py-16 flex flex-col items-center gap-12">
            {/* Hero */}
            <div className="flex flex-col items-center gap-6 text-center">
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white shadow-xl">
                    <Image
                        src="/profile.png"
                        alt="Foto de perfil de Goyo Cancio"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold">Goyo Cancio</h1>
                    <p className="mt-2 text-base md:text-xl text-foreground/60">
                        Software Engineer & Creador de Contenido
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="transition-transform hover:scale-110"
                        >
                            <Image
                                src={link.icon}
                                alt={link.name}
                                width={24}
                                height={24}
                                className="w-6 h-6 md:w-7 md:h-7"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Quick access cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {sections.map((section) => (
                    <Link
                        key={section.href}
                        href={section.href}
                        className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-200 rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-transform flex flex-col gap-2"
                    >
                        <span className="text-2xl">{section.emoji}</span>
                        <h2 className="font-bold text-lg">{section.title}</h2>
                        <p className="text-sm text-foreground/60">{section.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
