"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * ProjectItem component
 * Displays a single project as a square image that links to its subdomain
 */
export default function ProjectItem({ project }) {
    const { title, image, subdomain, technologies } = project;
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            {/* Project image */}
            <Link
                href={`https://${subdomain}.goyocancio.es`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square relative"
            >
                <div className="relative w-full h-full bg-gray-800">
                    {/* Loading skeleton */}
                    {isLoading && (
                        <div className="absolute inset-0 animate-pulse bg-gray-700"></div>
                    )}

                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                            isLoading ? "opacity-0" : "opacity-100"
                        }`}
                        onLoad={() => setIsLoading(false)}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Project info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-white text-lg font-bold mb-2">
                            {title}
                        </h3>

                        {/* Technologies tags */}
                        <div className="flex flex-wrap gap-1">
                            {technologies.slice(0, 3).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 3 && (
                                <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                                    +{technologies.length - 3}
                                </span>
                            )}
                        </div>

                        <div className="mt-3 flex items-center text-white/80 text-sm font-medium">
                            <span>Ver proyecto</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
