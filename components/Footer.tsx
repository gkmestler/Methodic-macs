import Image from "next/image";
import { siteConfig, methodic } from "@/content/site-data";

// Footer: logo, confidential line, year.
export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-16 pt-8 text-paper sm:px-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 border-t border-paper/10 pt-12 text-center">
        <Image
          src={siteConfig.logos.iconWhite}
          alt={methodic.name}
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        {siteConfig.confidential && (
          <p className="kicker text-slate">Confidential. Not for distribution.</p>
        )}
        <p className="text-xs text-paper/40">
          &copy; {siteConfig.year} {methodic.name}
        </p>
      </div>
    </footer>
  );
}
