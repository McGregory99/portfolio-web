"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * ProjectItem component
 * Displays a single project as a square icon that links to its subdomain
 */
export default function ProjectItem({ project }) {
    const { image, subdomain } = project;
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Link
            href={`https://${subdomain}.goyocancio.es`}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform transition-transform hover:scale-110 duration-200"
        >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-base-100 shadow-md">
                {/* Loading skeleton */}
                {isLoading && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
                )}

                <Image
                    src={image}
                    alt={subdomain}
                    fill
                    className={`object-contain p-2 ${
                        isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setIsLoading(false)}
                />
            </div>
        </Link>
    );
}
