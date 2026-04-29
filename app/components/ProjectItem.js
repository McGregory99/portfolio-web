"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ project }) {
    const { image, domain } = project;
    const displayName = domain.replace(/^https?:\/\//, "").split("/")[0];

    return (
        <Link
            href={domain}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
        >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-border bg-surface group-hover:border-accent/50 transition-all duration-300 group-hover:-translate-y-1">
                <Image src={image} alt={displayName} fill className="object-contain p-2.5" />
            </div>
            <span className="text-[10px] tracking-widest uppercase text-muted group-hover:text-accent transition-colors duration-200">
                {displayName}
            </span>
        </Link>
    );
}
