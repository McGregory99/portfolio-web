"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Inicio" },
    { href: "/cv", label: "CV" },
    { href: "/creador", label: "Creador" },
    { href: "/proyectos", label: "Proyectos" },
];

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-[#fafafc]/90 backdrop-blur border-b border-gray-200">
            <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-bold text-foreground hover:text-accent transition-colors">
                    Goyo Cancio
                </Link>
                <div className="flex items-center gap-6">
                    {links.slice(1).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${
                                pathname === link.href
                                    ? "text-accent border-b-2 border-accent pb-0.5"
                                    : "text-foreground/70"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
