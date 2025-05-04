import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    title: "Portfolio de Goyo Cancio | Desarrollador de Software",
    description:
        "Portfolio profesional de Goyo Cancio, desarrollador de software con experiencia en desarrollo web y aplicaciones móviles.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]`}
            >
                {children}
            </body>
        </html>
    );
}
