import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../lib/experiences";

export const metadata = {
    title: "CV | Goyo Cancio",
    description: "Experiencia laboral y trayectoria profesional de Goyo Cancio, Software Engineer.",
};

export default function CVPage() {
    return (
        <div className="max-w-screen-md mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold">Experiencia Laboral</h1>
                <p className="mt-3 text-sm md:text-base text-foreground/60">
                    Mi trayectoria profesional como ingeniero de software.
                </p>
            </div>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </div>
    );
}
