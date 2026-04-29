import Image from "next/image";
import Link from "next/link";

export default function SocialChannelCard({ channel }) {
    const { platform, handle, url, icon, description, color } = channel;

    return (
        <div className="flex rounded-xl overflow-hidden border border-border h-28 hover:-translate-y-0.5 transition-transform duration-200">
            <div className="flex items-center justify-center gap-3 px-8 flex-shrink-0 w-52" style={{ backgroundColor: color }}>
                <Image
                    src={icon}
                    alt={platform}
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
                <div>
                    <p
                        className="font-bold text-white text-lg leading-none"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {platform}
                    </p>
                    <p className="text-white/70 text-xs mt-0.5">{handle}</p>
                </div>
            </div>
            <div className="flex items-center justify-between flex-1 px-6 bg-surface gap-4">
                <p className="text-xs text-muted leading-relaxed">{description}</p>
                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-xs tracking-widest uppercase px-4 py-2 rounded border transition-colors hover:bg-foreground hover:text-background"
                    style={{ borderColor: color, color }}
                >
                    Seguir →
                </Link>
            </div>
        </div>
    );
}
