import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Goyo Cancio | Software Engineer & Creador de Contenido",
    description:
        "Portfolio de Goyo Cancio, ingeniero de software y creador de contenido sobre desarrollo.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#fafafc] via-[#e2e2e2] to-[#cbd5e1] min-h-screen`}
            >
                <Nav />
                {children}
                <footer className="text-center text-xs md:text-sm text-gray-500 py-8">
                    © {new Date().getFullYear()} Goyo Cancio. Todos los derechos reservados.
                </footer>
            </body>
        </html>
    );
}
