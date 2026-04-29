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
    { href: "/cv", label: "01", title: "CV", description: "Experiencia laboral como Software Engineer." },
    { href: "/creador", label: "02", title: "Creador", description: "YouTube, TikTok & Instagram." },
    { href: "/proyectos", label: "03", title: "Proyectos", description: "Personales y para clientes." },
];

export default function Home() {
    return (
        <main className="max-w-screen-md mx-auto px-6 py-12 flex flex-col gap-10">

            {/* Hero */}
            <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                <div className="flex flex-col gap-6">
                    <h1
                        className="text-6xl md:text-8xl font-black leading-none tracking-tight text-foreground"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Goyo<br />
                        <span className="italic text-accent">Cancio.</span>
                    </h1>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs tracking-widest uppercase text-muted">
                            Software Engineer
                        </p>
                        <p className="text-xs tracking-widest uppercase text-muted">
                            & Creador de Contenido
                        </p>
                    </div>
                    <div className="flex items-center gap-5 pt-2">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="opacity-40 hover:opacity-100 transition-opacity duration-200"
                            >
                                <Image
                                    src={link.icon}
                                    alt={link.name}
                                    width={18}
                                    height={18}
                                    className="w-4 h-4 md:w-5 md:h-5"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="relative w-44 h-44 md:w-60 md:h-60 flex-shrink-0 self-start md:self-auto">
                    <div className="absolute inset-0 rounded-2xl border border-accent/30 translate-x-2 translate-y-2" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                        <Image
                            src="/profile.png"
                            alt="Goyo Cancio"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-border" />

            {/* Intro text */}
            <section className="flex flex-col gap-6 max-w-lg">
                <p className="text-sm text-muted leading-relaxed">
                    Hola, soy Goyo. Me especializo en construir <strong className="text-foreground">aplicaciones web con Python</strong>, integrando <strong className="text-foreground">inteligencia artificial</strong> donde tiene sentido.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                    Trabajo como Software Engineer en <strong className="text-foreground">GRASP SPAIN</strong>, una empresa del <strong className="text-foreground">sector espacial</strong> donde construyo herramientas para análisis de datos satelitales. También llevo proyectos de <strong className="text-foreground">desarrollo a medida</strong> de forma independiente.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                    Creo contenido sobre desarrollo en <strong className="text-foreground">YouTube, TikTok e Instagram</strong> — tutoriales, proyectos reales y todo lo que nadie te cuenta cuando aprendes a programar.
                </p>
            </section>

            {/* Section cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sections.map((s) => (
                    <Link
                        key={s.href}
                        href={s.href}
                        className="group relative border border-border rounded-xl p-6 bg-surface hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <span
                            className="absolute -top-4 -right-2 text-8xl font-black text-foreground/[0.03] select-none leading-none"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            {s.label}
                        </span>
                        <p className="text-xs tracking-widest uppercase text-muted mb-3">{s.label}</p>
                        <h2
                            className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-2"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            {s.title}
                        </h2>
                        <p className="text-xs text-muted leading-relaxed">{s.description}</p>
                        <span className="absolute bottom-4 right-5 text-muted/30 group-hover:text-accent/50 text-lg transition-colors duration-200">→</span>
                    </Link>
                ))}
            </section>

            {/* Curso destacado */}
            <section>
                <div className="flex items-center gap-4 mb-5">
                    <p className="text-xs tracking-widest uppercase text-muted">Curso</p>
                    <div className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border rounded-xl p-6 bg-surface opacity-60 cursor-default">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs tracking-widest uppercase text-accent">Python Web Dev</span>
                        <h2
                            className="text-xl font-bold text-foreground"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            De scripts a tu primera app web real
                        </h2>
                        <p className="text-xs text-muted leading-relaxed max-w-md">
                            FastAPI · Streamlit · Supabase · Docker · IA. Proyecto completo en 14 días.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="text-right">
                            <p className="text-2xl font-black text-muted" style={{ fontFamily: "var(--font-playfair)" }}>147€</p>
                        </div>
                        <span className="text-xs tracking-widest uppercase px-4 py-2 rounded border border-border text-muted cursor-default">
                            Acceso cerrado
                        </span>
                    </div>
                </div>
            </section>

        </main>
    );
}
