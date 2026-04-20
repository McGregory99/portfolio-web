import Image from "next/image";
import Link from "next/link";

export default function SocialChannelCard({ channel }) {
    const { platform, handle, url, icon, description, color, textColor } = channel;

    return (
        <div
            className="rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:-translate-y-1 transition-transform"
            style={{ backgroundColor: color, color: textColor }}
        >
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex-shrink-0">
                    <Image
                        src={icon}
                        alt={platform}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                </div>
                <div>
                    <p className="font-bold text-lg leading-none">{platform}</p>
                    <p className="text-sm opacity-80">{handle}</p>
                </div>
            </div>
            <p className="text-sm opacity-90 flex-1">{description}</p>
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center text-sm font-semibold py-2 px-4 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
                Sígueme
            </Link>
        </div>
    );
}
