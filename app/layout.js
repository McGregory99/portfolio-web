import { Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "700", "900"],
    style: ["normal", "italic"],
});

const ibmMono = IBM_Plex_Mono({
    subsets: ["latin"],
    variable: "--font-ibm-mono",
    display: "swap",
    weight: ["300", "400", "500", "600"],
});

export const metadata = {
    title: "Goyo Cancio | Software Engineer & Creador de Contenido",
    description:
        "Portfolio de Goyo Cancio, ingeniero de software y creador de contenido sobre desarrollo.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${playfair.variable} ${ibmMono.variable}`}>
                <Nav />
                {children}
                <footer className="text-center text-xs text-muted py-10 border-t border-border mt-16 font-mono tracking-widest uppercase">
                    © {new Date().getFullYear()} Goyo Cancio
                </footer>
            </body>
        </html>
    );
}
