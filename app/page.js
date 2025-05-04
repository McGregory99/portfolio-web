import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Work Experience Section */}
                <WorkExperience />

                {/* Projects Section */}
                <ProjectsSection />
            </main>

            <footer className="py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Goyo Cancio. Todos los derechos
                reservados.
            </footer>
        </div>
    );
}
