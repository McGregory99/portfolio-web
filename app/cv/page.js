import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../lib/experiences";

export const metadata = {
    title: "CV | Goyo Cancio",
    description: "Experiencia laboral de Goyo Cancio, Software Engineer.",
};

export default function CVPage() {
    return (
        <main className="max-w-screen-md mx-auto px-6 py-20">
            <header className="mb-14">
                <p className="text-xs tracking-widest uppercase text-muted mb-3">01 —</p>
                <h1
                    className="text-5xl md:text-7xl font-black text-foreground leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Experiencia<br />
                    <span className="italic text-accent">Laboral.</span>
                </h1>
                <div className="w-12 h-px bg-accent mt-8" />
            </header>
            <div className="flex flex-col gap-5">
                {experiences.map((exp, i) => (
                    <ExperienceItem key={i} experience={exp} />
                ))}
            </div>
        </main>
    );
}
