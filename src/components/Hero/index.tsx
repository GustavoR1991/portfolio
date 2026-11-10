import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Hand } from "lucide-react";
import { pastelBg } from "../../utils/pastel";
import type { Pastel } from "../../utils/pastel";
import { useLanguage } from "../../context/LanguageContext";

interface Sticker {
  id: string;
  text: string;
  color: Pastel;
  rotate: number; // inclinação em graus
  position: string; // classes de posição do Tailwind
  shape: string; // classes de formato
}

export function Hero() {
  const { t } = useLanguage();
  // Referência para a "mesa": os adesivos não podem sair dela
  const boardRef = useRef<HTMLDivElement>(null);
  // Adesivos da mesa: suas stacks + dois recados
  const stickers: Sticker[] = [
    {
      id: "vue",
      text: "Vue.js",
      color: "sky",
      rotate: -8,
      position: "left-[5%] top-[5%]",
      shape: "rounded-2xl",
    },
    {
      id: "ts",
      text: "TypeScript",
      color: "lilac",
      rotate: 4,
      position: "left-[36%] top-[4%]",
      shape: "rounded-full",
    },
    {
      id: "nest",
      text: "NestJS",
      color: "rose",
      rotate: 10,
      position: "right-[5%] top-[10%]",
      shape: "rounded-full",
    },
    {
      id: "react",
      text: "React",
      color: "peach",
      rotate: 6,
      position: "left-[7%] top-[23%]",
      shape: "rounded-full",
    },
    {
      id: "next",
      text: "Next.js",
      color: "butter",
      rotate: -5,
      position: "left-[38%] top-[24%]",
      shape: "rounded-2xl",
    },
    {
      id: "nuxt",
      text: "Nuxt",
      color: "sky",
      rotate: 8,
      position: "right-[8%] top-[35%]",
      shape: "rounded-2xl",
    },
    {
      id: "node",
      text: "Node.js",
      color: "lilac",
      rotate: -6,
      position: "left-[4%] top-[42%]",
      shape: "rounded-2xl",
    },
    {
      id: "mysql",
      text: "MySQL",
      color: "peach",
      rotate: 5,
      position: "left-[36%] top-[44%]",
      shape: "rounded-full",
    },
    {
      id: "redis",
      text: "Redis + BullMQ",
      color: "rose",
      rotate: -4,
      position: "right-[4%] top-[57%]",
      shape: "rounded-2xl",
    },

    {
      id: "open",
      text: t.hero.stickerOpen,
      color: "sky",
      rotate: 6,
      position: "left-[8%] bottom-[18%]",
      shape: "rounded-2xl",
    },
  ];

  return (
    <section
      id="top"
      className="paper relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* ---------- Texto ---------- */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm text-muted"
          >
            {"// portfolio — 2026"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {t.hero.greeting}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.hero.name}</span>
              {/* O traço de marca-texto atrás do nome */}
              <span
                className="absolute -inset-x-[0.1em] bottom-[0.08em] h-[0.35em] rounded-full bg-peach"
                aria-hidden="true"
              />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {/* bg-ink + text-bg: o botão se inverte sozinho no tema escuro */}
            <a
              href="#projects"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-ink px-7 font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaProjects}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center rounded-full border-2 border-ink px-7 font-semibold transition-colors hover:bg-ink hover:text-bg"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>

        {/* ---------- Mesa de adesivos ---------- */}
        <motion.div
          ref={boardRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          aria-hidden="true"
          className="relative h-[380px] rounded-[2.5rem] border-2 border-dashed border-line bg-surface/60 md:h-[460px]"
        >
          {stickers.map((sticker, index) => (
            <motion.div
              key={sticker.id}
              drag
              dragConstraints={boardRef}
              dragElastic={0.2}
              dragMomentum={false}
              initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: sticker.rotate,
                // o delay vai aqui dentro para não atrasar o hover
                transition: {
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                },
              }}
              whileHover={{ scale: 1.06 }}
              whileDrag={{ scale: 1.12, rotate: 0, zIndex: 20 }}
              className={`absolute cursor-grab touch-none select-none px-5 py-3 text-lg font-bold text-on-pastel shadow-[0_6px_0_rgba(31,27,46,0.18)] active:cursor-grabbing md:text-2xl ${sticker.position} ${sticker.shape} ${pastelBg[sticker.color]}`}
            >
              {sticker.text}
            </motion.div>
          ))}

          <p className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap font-mono text-xs text-muted">
            <Hand size={14} /> {t.hero.dragHint}
          </p>
        </motion.div>
      </div>

      {/* Setinha para descer */}
      <div className="container-page mt-16 flex justify-center">
        <a
          href="#about"
          aria-label={t.nav.about}
          className="grid h-12 w-12 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink"
        >
          <motion.span
            className="grid"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            <ArrowDown size={20} />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
