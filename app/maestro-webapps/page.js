"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function MaestroWebapps() {
    const revealRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("rv-visible"); observer.unobserve(e.target); } }),
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );
        document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const benefits = [
        { n: "01", title: "Backend con FastAPI", desc: "Construyes una API REST real con endpoints, validación y documentación automática." },
        { n: "02", title: "Interfaz con Streamlit", desc: "Montas una interfaz funcional e interactiva sin necesitar HTML ni CSS." },
        { n: "03", title: "Base de datos con Supabase", desc: "Creas y gestionas tu DB aunque nunca hayas tocado SQL. Storage y queries incluidos." },
        { n: "04", title: "Autenticación completa", desc: "Implementas registro, login y sesiones de usuario desde cero." },
        { n: "05", title: "Docker + Despliegue real", desc: "Containerizas tu app y la publicas para que cualquiera pueda usarla." },
        { n: "06", title: "IA con Replicate", desc: "Integras modelos de inteligencia artificial para colorizar fotos y generar vídeos." },
        { n: "07", title: "Portfolio brutal", desc: "Terminas con un proyecto completo y desplegado: fotos B&W → color → vídeo con IA." },
        { n: "08", title: "Independencia real", desc: "El conocimiento y el stack para crear y desplegar cualquier app web con Python." },
    ];

    const stack = [
        { name: "FastAPI", role: "Backend y APIs", desc: "El framework Python más rápido para construir APIs. Documentación automática y rendimiento asíncrono." },
        { name: "Streamlit", role: "Interfaz de usuario", desc: "Interfaces web interactivas con Python puro. Sin JavaScript, sin HTML." },
        { name: "Supabase", role: "Base de datos", desc: "PostgreSQL gestionado con autenticación, storage y APIs generadas automáticamente." },
        { name: "Docker", role: "Containerización", desc: "Empaqueta tu app para que funcione igual en cualquier entorno. El estándar de despliegue." },
        { name: "Replicate", role: "Modelos de IA", desc: "Miles de modelos de IA disponibles via API. Con una línea de Python." },
        { name: "Deploy", role: "Producción real", desc: "Tu app publicada y accesible en internet. El flujo completo de local a producción." },
    ];

    const testimonials = [
        { quote: "Llevaba meses intentando hacer mi primera app real. En dos semanas tenía FastAPI, Supabase y el deploy funcionando. Por fin algo que te lleva de A a Z.", name: "Adrián M.", role: "Analista de datos · Madrid" },
        { quote: "El proyecto de colorizar fotos es una pasada. Cada tecnología tiene un propósito claro, no son solo herramientas que 'tienes que aprender'.", name: "Laura G.", role: "Data Scientist · Barcelona" },
        { quote: "Sabía Python pero no tenía idea de cómo hacer una app completa. Ahora tengo algo que puedo poner en mi portfolio.", name: "Carlos P.", role: "Estudiante Ingeniería · Valencia" },
    ];

    const includes = [
        { icon: "🎬", title: "Vídeos grabados paso a paso", desc: "Siguiendo el proyecto de principio a fin. Sin saltos, sin 'esto ya lo sabes'." },
        { icon: "📦", title: "Repositorio con código por módulos", desc: "Acceso al código de cada módulo. Compara tu progreso y avanza sin atascarte." },
        { icon: "🖼️", title: "Proyecto completo: revivir imágenes", desc: "B&W → colorización con IA → vídeo animado. Una app de portfolio que impresiona." },
        { icon: "🔒", title: "Acceso de por vida", desc: "El curso es tuyo para siempre. Vuelve cuando necesites repasar cualquier parte." },
        { icon: "🚀", title: "Stack reutilizable", desc: "La arquitectura que construyes aquí la reutilizas en cualquier proyecto futuro." },
    ];

    return (
        <>
            <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />

            <style>{`
                .rv { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
                .rv-visible { opacity: 1; transform: translateY(0); }
                .rv-d1 { transition-delay: 0.1s; }
                .rv-d2 { transition-delay: 0.2s; }
                .rv-d3 { transition-delay: 0.3s; }
            `}</style>

            <main className="max-w-screen-md mx-auto px-6 pb-24">

                {/* ── HERO ── */}
                <section className="pt-16 pb-20 flex flex-col gap-10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-accent" />
                        <span className="text-[10px] tracking-widest uppercase text-accent font-semibold">Curso práctico · Python Web Dev</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            De scripts a tu<br />primera{" "}
                            <span className="italic text-accent">app web real.</span>
                        </h1>
                        <p className="text-sm text-muted leading-relaxed max-w-lg">
                            Si ya sabes lo básico de Python, aquí das el salto real.{" "}
                            <strong className="text-foreground">Base de datos, autenticación, IA y despliegue.</strong>{" "}
                            Cero teoría relleno. Construyendo desde el primer día.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://goyo.gumroad.com/l/tu-primera-webapp-con-python?wanted=true"
                            className="gumroad-button inline-flex items-center gap-2 px-7 py-3.5 rounded bg-accent text-background text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                            data-gumroad-overlay-checkout="true"
                        >
                            Quiero acceder →
                        </a>
                        <a href="#incluye" className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors border border-border px-5 py-3 rounded">
                            Ver qué incluye
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-10 flex-wrap pt-6 border-t border-border">
                        {[["14", "Días al deploy"], ["6", "Tecnologías"], ["100%", "Hands-on"], ["7d", "Garantía"]].map(([n, l]) => (
                            <div key={l}>
                                <span className="block text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>{n}</span>
                                <span className="text-[10px] tracking-widest uppercase text-muted">{l}</span>
                            </div>
                        ))}
                    </div>

                    {/* Code preview card */}
                    <div className="border border-border rounded-xl overflow-hidden bg-surface">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            <span className="text-[10px] text-muted ml-2" style={{ fontFamily: "var(--font-ibm-mono)" }}>revive_photos.py — running</span>
                        </div>
                        <pre className="p-5 text-xs leading-relaxed overflow-x-auto" style={{ fontFamily: "var(--font-ibm-mono)", color: "#8c7e70" }}><code>
<span style={{color:"#9b8ad4"}}># Tu app Python en producción</span>{"\n"}
<span style={{color:"#7c6fcd"}}>from</span> fastapi <span style={{color:"#7c6fcd"}}>import</span> FastAPI{"\n"}
<span style={{color:"#7c6fcd"}}>import</span> replicate{"\n\n"}
app = <span style={{color:"#5e8fcc"}}>FastAPI</span>(){"\n\n"}
<span style={{color:"#7c6fcd"}}>@app</span>.<span style={{color:"#5e8fcc"}}>post</span>(<span style={{color:"#6a9f5e"}}>"/colorize"</span>){"\n"}
<span style={{color:"#7c6fcd"}}>async def</span> <span style={{color:"#5e8fcc"}}>colorize</span>(image_url: str):{"\n"}
{"    "}output = <span style={{color:"#b8882e", fontWeight:"700"}}>replicate</span>.<span style={{color:"#5e8fcc"}}>run</span>({"\n"}
{"        "}<span style={{color:"#6a9f5e"}}>"arielreplicate/colorize"</span>,{"\n"}
{"        "}input=&#123;<span style={{color:"#6a9f5e"}}>"image"</span>: image_url&#125;{"\n"}
{"    "}){"\n"}
{"    "}<span style={{color:"#7c6fcd"}}>return</span> &#123;<span style={{color:"#6a9f5e"}}>"result"</span>: output&#125;
                        </code></pre>
                        <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-border">
                            {["FastAPI", "Streamlit", "Supabase"].map(t => (
                                <span key={t} className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded border border-accent/40 text-accent bg-accent/5">{t}</span>
                            ))}
                            {["Docker", "Replicate"].map(t => (
                                <span key={t} className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded border border-border text-muted">{t}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── BENEFITS ── */}
                <section className="py-16 border-t border-border">
                    <div className="rv mb-12">
                        <span className="text-[10px] tracking-widest uppercase text-accent">Lo que vas a conseguir</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            Sales con una app terminada<br />
                            <span className="italic">y un stack moderno.</span>
                        </h2>
                        <p className="text-sm text-muted mt-3 max-w-md">No más tutoriales que no van a ningún lado. Cada módulo construye sobre el anterior.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
                        {benefits.map((b, i) => (
                            <div key={b.n} className={`rv rv-d${(i % 3) + 1} bg-surface hover:bg-surface-2 transition-colors p-6 flex gap-4`}>
                                <span className="text-[10px] tracking-widest text-accent font-bold mt-0.5 flex-shrink-0" style={{ fontFamily: "var(--font-ibm-mono)" }}>{b.n}</span>
                                <div>
                                    <h3 className="text-sm font-bold mb-1">{b.title}</h3>
                                    <p className="text-xs text-muted leading-relaxed">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── PROJECT ── */}
                <section className="py-16 border-t border-border">
                    <div className="rv mb-10">
                        <span className="text-[10px] tracking-widest uppercase text-accent">Proyecto estrella</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            No un ejercicio de clase.<br />
                            <span className="italic">Una app real de portfolio.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-0 rv border border-border rounded-xl overflow-hidden">
                        {[
                            { icon: "🖼️", step: "01", title: "Subida de imagen B&W", desc: "El usuario sube una foto antigua. Tu app la recibe, valida y almacena en Supabase Storage." },
                            { icon: "🤖", step: "02", title: "Colorización con IA", desc: "Replicate ejecuta un modelo que coloriza la imagen automáticamente. FastAPI orquesta la llamada." },
                            { icon: "🎬", step: "03", title: "Animación en vídeo", desc: "Un segundo modelo convierte la imagen en un vídeo animado. El usuario descarga desde Streamlit." },
                        ].map((s, i) => (
                            <div key={s.step} className="flex gap-5 p-6 border-b border-border last:border-b-0 bg-surface hover:bg-surface-2 transition-colors">
                                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0 bg-surface-2 border border-border">{s.icon}</div>
                                <div>
                                    <p className="text-[10px] tracking-widest uppercase text-accent mb-1" style={{ fontFamily: "var(--font-ibm-mono)" }}>Paso {s.step}</p>
                                    <h4 className="text-sm font-bold mb-1">{s.title}</h4>
                                    <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── STACK ── */}
                <section className="py-16 border-t border-border">
                    <div className="rv mb-10">
                        <span className="text-[10px] tracking-widest uppercase text-accent">Stack tecnológico</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            Las herramientas de<br />
                            <span className="italic">tus próximos proyectos.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
                        {stack.map((s, i) => (
                            <div key={s.name} className={`rv rv-d${(i % 2) + 1} bg-surface hover:bg-surface-2 transition-colors p-6`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    <span className="text-[10px] tracking-widest uppercase text-accent font-bold" style={{ fontFamily: "var(--font-ibm-mono)" }}>{s.name}</span>
                                </div>
                                <h3 className="text-sm font-bold mb-1">{s.role}</h3>
                                <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FOR WHO ── */}
                <section className="py-16 border-t border-border">
                    <div className="rv mb-10 text-center">
                        <span className="text-[10px] tracking-widest uppercase text-accent">¿Para quién es?</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            Para quien quiere <span className="italic">construir,</span><br />no solo aprender.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rv">
                        <div className="border border-border rounded-xl p-6 bg-surface">
                            <h3 className="text-sm font-bold text-accent mb-5 tracking-wide">✓ Es para ti si…</h3>
                            <ul className="flex flex-col gap-3">
                                {["Ya sabes lo básico de Python pero nunca has construido una app web real.", "Eres analista de datos y quieres convertir tus ideas en algo usable.", "Has hecho cursos sueltos pero te falta un proyecto que una todas las piezas.", "Quieres un enfoque práctico y salir del bucle infinito de tutoriales."].map(t => (
                                    <li key={t} className="flex gap-3 text-xs text-muted leading-relaxed">
                                        <span className="text-accent flex-shrink-0">→</span>{t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border border-border rounded-xl p-6 bg-surface">
                            <h3 className="text-sm font-bold text-muted mb-5 tracking-wide">✗ No es para ti si…</h3>
                            <ul className="flex flex-col gap-3">
                                {["Estás empezando desde cero y aún no manejas lo básico de Python.", "Buscas un curso teórico con explicaciones de 2 horas por concepto.", "No quieres programar: esto es 100% hands-on desde el primer módulo."].map(t => (
                                    <li key={t} className="flex gap-3 text-xs text-muted leading-relaxed">
                                        <span className="flex-shrink-0">×</span>{t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── INCLUDES ── */}
                <section id="incluye" className="py-16 border-t border-border">
                    <div className="rv mb-10">
                        <span className="text-[10px] tracking-widest uppercase text-accent">¿Qué incluye?</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            Todo lo que necesitas<br />
                            <span className="italic">para llegar al deploy.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-0 border border-border rounded-xl overflow-hidden">
                        {includes.map((item) => (
                            <div key={item.title} className="rv flex gap-4 p-5 border-b border-border last:border-b-0 bg-surface hover:bg-surface-2 transition-colors items-start">
                                <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="text-sm font-bold mb-0.5">{item.title}</h4>
                                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── TESTIMONIALS ── */}
                <section className="py-16 border-t border-border">
                    <div className="rv mb-10 text-center">
                        <span className="text-[10px] tracking-widest uppercase text-accent">Alumnos beta</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            Lo que opinan los que ya<br />
                            <span className="italic">están construyendo.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonials.map((t, i) => (
                            <div key={t.name} className={`rv rv-d${i + 1} border border-border rounded-xl p-6 bg-surface flex flex-col gap-5`}>
                                <span className="text-accent text-sm tracking-widest">★★★★★</span>
                                <p className="text-xs text-muted leading-relaxed italic flex-1" style={{ fontFamily: "var(--font-playfair)" }}>"{t.quote}"</p>
                                <div className="pt-4 border-t border-border">
                                    <p className="text-xs font-bold">{t.name}</p>
                                    <p className="text-[10px] tracking-wide text-muted">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── GUARANTEE ── */}
                <section className="py-16 border-t border-border">
                    <div className="rv flex flex-col md:flex-row gap-8 items-center border border-border rounded-xl p-8 bg-surface">
                        <div className="w-28 h-28 rounded-full border-2 border-accent/30 bg-accent/5 flex flex-col items-center justify-center flex-shrink-0">
                            <span className="text-4xl font-black text-accent leading-none" style={{ fontFamily: "var(--font-playfair)" }}>7</span>
                            <span className="text-[9px] tracking-widest uppercase text-muted text-center leading-tight mt-1">días de<br />garantía</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Garantía sin riesgo. Sin preguntas.</h3>
                            <p className="text-xs text-muted leading-relaxed max-w-md">
                                Si en los primeros <strong className="text-foreground">7 días</strong> ves que el curso no encaja contigo, me escribes y{" "}
                                <strong className="text-foreground">te devuelvo el dinero completo</strong>. Sin preguntas, sin formularios, sin dramas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── PRICING ── */}
                <section className="py-16 border-t border-border">
                    <div className="max-w-md mx-auto text-center flex flex-col items-center gap-6">
                        <div className="rv">
                            <span className="text-[10px] tracking-widest uppercase text-accent">Precio de lanzamiento</span>
                            <h2 className="text-3xl md:text-4xl font-black mt-3" style={{ fontFamily: "var(--font-playfair)" }}>
                                Entra antes de que<br />
                                <span className="italic text-accent">suba el precio.</span>
                            </h2>
                            <p className="text-xs text-muted mt-3 leading-relaxed">En cuanto cierre esta fase beta, el precio sube a 147€.</p>
                        </div>

                        <div className="rv w-full border border-accent/20 rounded-xl p-8 bg-surface relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent text-background text-[9px] font-bold tracking-widest uppercase px-4 py-1 rounded-b">
                                Precio lanzamiento
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-muted line-through mb-1">147€</p>
                                <p className="text-6xl font-black text-foreground leading-none mb-1" style={{ fontFamily: "var(--font-playfair)" }}>97€</p>
                                <p className="text-[10px] tracking-widest uppercase text-muted mb-6">Pago único · Acceso de por vida · IVA incluido</p>
                            </div>
                            <ul className="flex flex-col gap-2 mb-6 text-left">
                                {["Todos los vídeos del curso (auto-ritmo)", "Repositorio con código por módulos", "Proyecto completo: B&W → Color → Vídeo", "Stack reutilizable: FastAPI + Streamlit + Supabase + Docker", "Acceso de por vida y actualizaciones", "Garantía de 7 días sin preguntas"].map(item => (
                                    <li key={item} className="flex items-start gap-2 text-xs text-muted">
                                        <span className="text-accent flex-shrink-0">✓</span>{item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://goyo.gumroad.com/l/tu-primera-webapp-con-python?wanted=true"
                                className="gumroad-button w-full flex items-center justify-center gap-2 py-4 px-6 rounded bg-accent text-background text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                                data-gumroad-overlay-checkout="true"
                            >
                                👉 Accede ahora por 97€ →
                            </a>
                        </div>

                        <div className="rv w-full text-center text-xs text-muted border border-border rounded px-4 py-3 bg-surface">
                            ⚡ Precio beta · Sube a 147€ al cerrar esta fase
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
