import { notFound } from "next/navigation";

export const metadata = {
    title: "Trabajemos juntos | Goyo Cancio",
    description: "¿Tienes una idea o necesitas un desarrollador? Hablemos.",
};

// TODO: reemplazar con URL de Tally cuando el formulario esté listo
const TALLY_FORM_URL = null;

const preguntas = [
    "Nombre y email de contacto",
    "¿Qué tipo de colaboración buscas? (Socio técnico / Contratar desarrollo / Asesoramiento)",
    "Cuéntame tu proyecto o idea",
    "Fase actual (Solo una idea / Definido sin construir / Ya tiene usuarios / Algo construido)",
    "Tecnologías en mente (opcional)",
    "¿Hay algún plazo o fecha límite?",
    "Presupuesto estimado (si es contratación)",
];

export default function ColaboraPage() {
    notFound();
    return (
        <main className="max-w-screen-md mx-auto px-6 py-20">
            <header className="mb-14">
                <p className="text-xs tracking-widest uppercase text-muted mb-3">05 —</p>
                <h1
                    className="text-5xl md:text-7xl font-black text-foreground leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Trabajemos<br />
                    <span className="italic text-accent">juntos.</span>
                </h1>
                <div className="w-12 h-px bg-accent mt-8 mb-8" />
                <p className="text-sm text-muted leading-relaxed max-w-lg">
                    Tanto si tienes una idea y buscas un socio técnico que la construya contigo,
                    como si necesitas <strong className="text-foreground">contratar desarrollo a medida</strong>,
                    me interesa escucharte.
                </p>
            </header>

            {/* Dos caminos */}
            <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border rounded-xl p-6 bg-surface">
                    <span className="text-2xl mb-3 block">🤝</span>
                    <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Socio técnico</h3>
                    <p className="text-xs text-muted leading-relaxed">
                        Tienes una idea pero no el perfil técnico para construirla. Puedo ser tu co-fundador técnico
                        o acompañarte en las primeras fases del producto.
                    </p>
                </div>
                <div className="border border-border rounded-xl p-6 bg-surface">
                    <span className="text-2xl mb-3 block">💻</span>
                    <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Desarrollo a medida</h3>
                    <p className="text-xs text-muted leading-relaxed">
                        Necesitas construir algo concreto: una app web, una API, una herramienta interna o una integración con IA.
                        Me especializo en <strong className="text-foreground">Python y aplicaciones web</strong>.
                    </p>
                </div>
            </section>

            {/* Formulario o placeholder */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <p className="text-xs tracking-widest uppercase text-muted">Cuéntame tu proyecto</p>
                    <div className="flex-1 h-px bg-border" />
                </div>

                {TALLY_FORM_URL ? (
                    <div className="border border-border rounded-xl overflow-hidden">
                        <iframe
                            src={TALLY_FORM_URL}
                            loading="lazy"
                            style={{ width: "100%", height: "700px", border: "none" }}
                            title="Formulario de colaboración"
                        />
                    </div>
                ) : (
                    <div className="border border-border rounded-xl p-10 bg-surface flex flex-col items-center gap-5 text-center">
                        <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center text-xl">📋</div>
                        <div>
                            <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Formulario próximamente</p>
                            <p className="text-xs text-muted leading-relaxed max-w-sm">
                                Estoy preparando el formulario. De momento puedes escribirme directamente.
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
