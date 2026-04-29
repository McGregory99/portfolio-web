import { notFound } from "next/navigation";

export const metadata = {
    title: "Mentoría 1:1 | Goyo Cancio",
    description: "Aprende desarrollo software de forma práctica con mentoría personalizada 1:1.",
};

// TODO: reemplazar con URL de Tally cuando el formulario esté listo
const TALLY_FORM_URL = null;

const preguntas = [
    "Nombre y email de contacto",
    "Nivel de experiencia (Sin experiencia / Principiante / Intermedio / Avanzado)",
    "¿Qué quieres conseguir con la mentoría?",
    "¿Tienes un proyecto concreto o prefieres aprendizaje estructurado?",
    "Sesiones pensadas (1 de prueba / Pack de 4 / Pack de 8 / No sé aún)",
    "Disponibilidad horaria (Mañanas / Tardes / Noches / Fines de semana)",
];

export default function MentoriaPage() {
    notFound();
    return (
        <main className="max-w-screen-md mx-auto px-6 py-20">
            <header className="mb-14">
                <p className="text-xs tracking-widest uppercase text-muted mb-3">04 —</p>
                <h1
                    className="text-5xl md:text-7xl font-black text-foreground leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Mentoría<br />
                    <span className="italic text-accent">1:1.</span>
                </h1>
                <div className="w-12 h-px bg-accent mt-8 mb-8" />
                <p className="text-sm text-muted leading-relaxed max-w-lg">
                    Si quieres aprender desarrollo software de forma práctica y con alguien que ya ha pasado por donde estás,
                    puedo acompañarte. <strong className="text-foreground">Sesiones personalizadas</strong>, enfocadas en tu situación concreta
                    y en conseguir resultados reales.
                </p>
            </header>

            {/* Propuesta de valor */}
            <section className="mb-14 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { icon: "🎯", title: "Enfocado en ti", desc: "Nada de temarios genéricos. Trabajamos sobre tus dudas, tu proyecto y tus objetivos." },
                    { icon: "🛠️", title: "100% práctico", desc: "Aprendemos construyendo. Cada sesión termina con algo hecho, no solo entendido." },
                    { icon: "🐍", title: "Python & Web", desc: "Mi especialidad: Python, FastAPI, aplicaciones web e integración de IA." },
                ].map((item) => (
                    <div key={item.title} className="border border-border rounded-xl p-5 bg-surface">
                        <span className="text-2xl mb-3 block">{item.icon}</span>
                        <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                        <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Formulario o placeholder */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <p className="text-xs tracking-widest uppercase text-muted">Solicitar mentoría</p>
                    <div className="flex-1 h-px bg-border" />
                </div>

                {TALLY_FORM_URL ? (
                    <div className="border border-border rounded-xl overflow-hidden">
                        <iframe
                            src={TALLY_FORM_URL}
                            loading="lazy"
                            style={{ width: "100%", height: "700px", border: "none" }}
                            title="Formulario de mentoría"
                        />
                    </div>
                ) : (
                    <div className="border border-border rounded-xl p-10 bg-surface flex flex-col items-center gap-5 text-center">
                        <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center text-xl">📋</div>
                        <div>
                            <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Formulario próximamente</p>
                            <p className="text-xs text-muted leading-relaxed max-w-sm">
                                Estoy preparando el formulario de solicitud. De momento puedes escribirme directamente.
                            </p>
                        </div>
                        <div className="border border-border rounded-xl p-5 bg-surface-2 w-full max-w-sm text-left">
                            <p className="text-[10px] tracking-widest uppercase text-accent mb-3">Preguntas del formulario</p>
                            <ul className="flex flex-col gap-2">
                                {preguntas.map((q, i) => (
                                    <li key={i} className="flex gap-2 text-xs text-muted">
                                        <span className="text-accent flex-shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                                        {q}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
