"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/cv", label: "CV" },
    { href: "/creador", label: "Creador" },
    { href: "/proyectos", label: "Proyectos" },
];

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-screen-md mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-foreground hover:text-accent transition-colors duration-200"
                    style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "1.1rem" }}
                >
                    Goyo Cancio
                </Link>
                <div className="flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-xs tracking-widest uppercase transition-colors duration-200 relative pb-1 ${
                                pathname === link.href
                                    ? "text-accent"
                                    : "text-muted hover:text-foreground"
                            }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <span className="absolute bottom-0 left-0 w-full h-px bg-accent" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
