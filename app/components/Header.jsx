import Image from "next/image";
import Link from "next/link";

/**
 * Header component for the portfolio website
 * Displays the developer's name, profile picture, and social media links
 */
export default function Header() {
    // Developer information
    const developerName = "Goyo Cancio";
    const jobTitle = "Software Engineer";

    // Social media links
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/linkedin.svg",
            url: "https://linkedin.com/in/goyocancio",
            alt: "LinkedIn Profile",
        },
        {
            name: "GitHub",
            icon: "/github.svg",
            url: "https://github.com/McGregory99",
            alt: "GitHub Profile",
        },
        {
            name: "X",
            icon: "/x.svg",
            url: "https://x.com/goyo_is_a_dev",
            alt: "X Profile",
        },
    ];

    return (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 py-4 px-6 md:px-12">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left section: Profile picture and name */}
                <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden">
                        <Image
                            src="/profile.png"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                            {developerName}
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70">
                            {jobTitle}
                        </p>
                    </div>
                </div>

                {/* Right section: Social media links */}
                <div className="flex items-center space-x-6">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-110"
                            aria-label={link.alt}
                        >
                            <Image
                                src={link.icon}
                                alt={link.alt}
                                width={24}
                                height={24}
                                className="w-9 h-9 md:w-12 md:h-12"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
