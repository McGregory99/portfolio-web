"use client";

import { useState } from "react";
import Link from "next/link";
import SocialChannelCard from "@/app/components/SocialChannelCard";
import { channels } from "@/app/lib/channels";

const preguntas = [
    {
        id: 1,
        texto: "¿Tienes experiencia programando?",
        opciones: [
            { label: "No, nunca he programado", puntos: 0 },
            { label: "Por mi cuenta (cursos, tutoriales)", puntos: 1 },
            { label: "Trabajo como desarrollador", puntos: 2 },
        ],
    },
    {
        id: 2,
        texto: "¿Sabes la diferencia entre frontend y backend?",
        opciones: [
            { label: "No tengo idea", puntos: 0 },
            { label: "Sé lo básico", puntos: 1 },
            { label: "Puedo explicarlo bien y conozco frameworks", puntos: 2 },
        ],
    },
    {
        id: 3,
        texto: "¿Has trabajado con bases de datos?",
        opciones: [
            { label: "Nunca", puntos: 0 },
            { label: "Sé lo que es pero nunca he trabajado con ellas", puntos: 1 },
            { label: "Conozco SQL o he manejado BBDDs", puntos: 2 },
        ],
    },
    {
        id: 4,
        texto: "¿Has usado Claude Code u otras herramientas de IA para programar?",
        opciones: [
            { label: "Nunca las he tocado", puntos: 0 },
            { label: "He tocado herramientas de IA pero no para programar", puntos: 1 },
            { label: "Ya he programado con Claude Code", puntos: 2 },
        ],
    },
];

export default function QuizPage() {
    const [paso, setPaso] = useState(0); // 0 = intro, 1-4 = preguntas, 5 = resultado
    const [respuestas, setRespuestas] = useState({});
    const [seleccion, setSeleccion] = useState(null);

    const preguntaActual = preguntas[paso - 1];
    const total = preguntas.length;

    const puntuacion = Object.values(respuestas).reduce((a, b) => a + b, 0);
    const capacitado = puntuacion >= 6;

    function handleOpcion(puntos) {
        setSeleccion(puntos);
    }

    function handleSiguiente() {
        if (seleccion === null) return;
        setRespuestas((prev) => ({ ...prev, [paso]: seleccion }));
        setSeleccion(null);
        setPaso((p) => p + 1);
    }

    function handleReinicio() {
        setPaso(0);
        setRespuestas({});
        setSeleccion(null);
    }

    // Intro
    if (paso === 0) {
        return (
            <main className="max-w-screen-sm mx-auto px-6 py-20">
                <div className="mb-10">
                    <p className="text-xs tracking-widest uppercase text-muted mb-3">Test rápido</p>
                    <h1
                        className="text-5xl md:text-6xl font-black text-foreground leading-none mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        ¿Estás listo para crear<br />
                        <span className="italic text-accent">apps web?</span>
                    </h1>
                    <div className="w-12 h-px bg-accent mb-8" />
                    <p className="text-sm text-muted leading-relaxed max-w-md">
                        4 preguntas. Sin registros. Sin trampa.
                        En menos de 1 minuto sabes si tienes la base para construir tu primera aplicación web real.
                    </p>
                </div>
                <button
                    onClick={() => setPaso(1)}
                    className="px-8 py-3 bg-accent text-white text-xs tracking-widest uppercase font-bold rounded-xl hover:bg-accent/90 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Empezar →
                </button>
            </main>
        );
    }

    // Resultado
    if (paso === total + 1) {
        return (
            <main className="max-w-screen-sm mx-auto px-6 py-20">
                <div className="mb-10">
                    <p className="text-xs tracking-widest uppercase text-muted mb-3">Resultado</p>
                    <h1
                        className="text-5xl md:text-6xl font-black text-foreground leading-none mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {capacitado ? (
                            <>Estás<br /><span className="italic text-accent">capacitado.</span></>
                        ) : (
                            <>Todavía<br /><span className="italic text-accent">no.</span></>
                        )}
                    </h1>
                    <div className="w-12 h-px bg-accent mb-8" />
                </div>

                <div className="border border-border rounded-xl p-8 bg-surface mb-6">
                    <div className="flex items-end gap-3 mb-6">
                        <span
                            className="text-6xl font-black text-accent"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            {puntuacion}
                        </span>
                        <span className="text-muted text-sm mb-2">/ 8 puntos</span>
                    </div>

                    {puntuacion === 0 ? (
                        <div>
                            <p className="text-sm text-foreground font-bold mb-2">No estás ni cerca. Y está bien.</p>
                            <p className="text-sm text-muted leading-relaxed">
                                No tienes base todavía, y eso es completamente normal. Antes de meterte en apps web,
                                necesitas construir los fundamentos. Empieza por aprender Python básico — el resto viene solo.
                            </p>
                        </div>
                    ) : capacitado ? (
                        <div>
                            <p className="text-sm text-foreground font-bold mb-2">Tienes la base. Ahora es cuestión de hacerlo.</p>
                            <p className="text-sm text-muted leading-relaxed">
                                Conoces los conceptos clave y tienes experiencia previa. Con el stack correcto y una guía práctica,
                                puedes tener tu primera app web funcionando en días, no meses.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className="text-sm text-foreground font-bold mb-2">Aún te falta base, pero tiene solución.</p>
                            <p className="text-sm text-muted leading-relaxed">
                                No es un problema, es un punto de partida. Con los recursos correctos puedes construir esa base
                                rápido y llegar al punto en que crear apps web deje de parecer algo imposible.
                            </p>
                        </div>
                    )}
                </div>

                {/* Resumen de respuestas */}
                <div className="border border-border rounded-xl p-6 bg-surface mb-8">
                    <p className="text-[10px] tracking-widest uppercase text-accent mb-4">Tus respuestas</p>
                    <div className="flex flex-col gap-4">
                        {preguntas.map((pregunta, i) => {
                            const puntosRespuesta = respuestas[i + 1];
                            const opcionElegida = pregunta.opciones.find(o => o.puntos === puntosRespuesta);
                            return (
                                <div key={i} className="flex flex-col gap-1">
                                    <p className="text-[10px] tracking-widest uppercase text-muted">{pregunta.texto}</p>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${puntosRespuesta === 2 ? "bg-accent" : puntosRespuesta === 1 ? "bg-muted" : "bg-border"}`} />
                                        <p className="text-xs text-foreground">{opcionElegida?.label}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xs tracking-widest uppercase text-muted">Sígueme para aprender más</p>
                    {channels.map((channel) => (
                        <SocialChannelCard key={channel.platform} channel={channel} />
                    ))}
                    <button
                        onClick={handleReinicio}
                        className="w-full text-center px-8 py-3 border border-border text-muted text-xs tracking-widest uppercase rounded-xl hover:border-accent/50 hover:text-foreground transition-colors duration-200 mt-2"
                    >
                        Repetir test
                    </button>
                </div>
            </main>
        );
    }

    // Pregunta
    return (
        <main className="max-w-screen-sm mx-auto px-6 py-20">
            {/* Progreso */}
            <div className="flex items-center gap-3 mb-12">
                {preguntas.map((_, i) => (
                    <div
                        key={i}
                        className={`h-0.5 flex-1 transition-colors duration-300 ${i < paso ? "bg-accent" : "bg-border"}`}
                    />
                ))}
                <span className="text-xs text-muted tabular-nums">{paso}/{total}</span>
            </div>

            <div className="mb-10">
                <p className="text-xs tracking-widest uppercase text-muted mb-4">Pregunta {paso}</p>
                <h2
                    className="text-3xl md:text-4xl font-black text-foreground leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    {preguntaActual.texto}
                </h2>
            </div>

            <div className="flex flex-col gap-3 mb-10">
                {preguntaActual.opciones.map((opcion, i) => {
                    const activa = seleccion === opcion.puntos;
                    return (
                        <button
                            key={i}
                            onClick={() => handleOpcion(opcion.puntos)}
                            className={`w-full text-left px-6 py-4 rounded-xl border transition-all duration-200 text-sm ${
                                activa
                                    ? "border-accent bg-accent/5 text-foreground"
                                    : "border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground"
                            }`}
                        >
                            <span className={`text-xs mr-3 tabular-nums ${activa ? "text-accent" : "text-muted/50"}`}>
                                {String.fromCharCode(65 + i)}.
                            </span>
                            {opcion.label}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={handleSiguiente}
                disabled={seleccion === null}
                className={`px-8 py-3 text-xs tracking-widest uppercase font-bold rounded-xl transition-all duration-200 ${
                    seleccion !== null
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-border text-muted cursor-not-allowed"
                }`}
            >
                {paso === total ? "Ver resultado →" : "Siguiente →"}
            </button>
        </main>
    );
}
