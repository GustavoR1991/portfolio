import { pastelBg } from "../../utils/pastel";
import type { Pastel } from "../../utils/pastel";

interface SectionTitleProps {
  label: string;
  title: string;
  color?: Pastel; // o "?" quer dizer opcional
}

export function SectionTitle({
  label,
  title,
  color = "lilac",
}: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16">
      <span
        className={`chip font-mono text-xs uppercase tracking-widest text-on-pastel ${pastelBg[color]}`}
      >
        {label}
      </span>
      <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
