import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../icons/BrandIcons";
import { profile } from "../../constants/profile";
import { useLanguage } from "../../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-lilac px-6 py-16 text-on-pastel md:px-16 md:py-24"
        >
          {/* Círculos decorativos */}
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-peach"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 right-1/4 h-48 w-48 rounded-full bg-butter"
            aria-hidden="true"
          />

          {/* "relative" coloca o conteúdo na frente dos círculos */}
          <div className="relative max-w-3xl">
            <span className="chip bg-white/60 font-mono text-xs uppercase tracking-widest">
              {t.contact.label}
            </span>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg md:text-xl">{t.contact.text}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-on-pastel px-7 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Mail size={20} aria-hidden="true" />
                {t.contact.email}
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-on-pastel px-7 font-semibold transition-colors hover:bg-on-pastel hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-on-pastel px-7 font-semibold transition-colors hover:bg-on-pastel hover:text-white"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
