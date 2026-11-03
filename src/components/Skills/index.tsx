import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import { pastelBg } from "../../utils/pastel";
import type { Pastel } from "../../utils/pastel";
import { useLanguage } from "../../context/LanguageContext";

type GroupKey = "front" | "back" | "data" | "tools";

// Tudo que encontrei nos seus projetos e no currículo
const groups: { key: GroupKey; color: Pastel; items: string[] }[] = [
  {
    key: "front",
    color: "sky",
    items: [
      "Vue.js",
      "Nuxt",
      "Pinia",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Chakra UI",
      "styled-components",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Astro",
      "Framer Motion",
      "Three.js",
    ],
  },
  {
    key: "back",
    color: "peach",
    items: [
      "Node.js",
      "NestJS",
      "Fastify",
      "TypeORM",
      "Prisma",
      "REST APIs",
      "JWT",
      "Swagger",
      "Python",
      "FastAPI",
    ],
  },
  {
    key: "data",
    color: "lilac",
    items: ["MySQL", "PostgreSQL", "Redis", "BullMQ", "Supabase"],
  },
  {
    key: "tools",
    color: "rose",
    items: [
      "Monorepo",
      "Turborepo",
      "Docker",
      "Git & GitHub",
      "Vite",
      "Vitest",
      "Jest",
      "Playwright",
      "Stripe",
      "AWS S3",
    ],
  },
];

export function Skills() {
  const { t } = useLanguage();

  // A stack que você usa hoje, na ordem em que os dados passam
  const stack: {
    label: string;
    title: string;
    detail: string;
    color: Pastel;
    joiner: "arrow" | "plus";
  }[] = [
    {
      label: t.skills.stackWeb,
      title: "Vue.js",
      detail: "Pinia · Vue Router",
      color: "sky",
      joiner: "arrow",
    },
    {
      label: t.skills.stackApi,
      title: "NestJS",
      detail: "TypeORM",
      color: "peach",
      joiner: "arrow",
    },
    {
      label: t.skills.stackDb,
      title: "MySQL",
      detail: "TypeORM",
      color: "lilac",
      joiner: "arrow",
    },
    {
      label: t.skills.stackQueue,
      title: "Redis + BullMQ",
      detail: t.skills.stackQueueDetail,
      color: "rose",
      joiner: "plus",
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionTitle
          label={t.skills.label}
          title={t.skills.title}
          color="butter"
        />

        {/* ---------- Minha stack atual ---------- */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 rounded-[2rem] border-2 border-dashed border-line bg-surface p-6 md:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl font-extrabold md:text-3xl">
              {t.skills.stackTitle}
            </h3>
            <span className="chip bg-butter font-mono text-xs text-on-pastel">
              monorepo · Turborepo
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-muted">{t.skills.stackText}</p>

          <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
            {stack.map((step, index) => (
              // Fragment agrupa o separador + o cartão sem criar uma div a mais
              <Fragment key={step.title}>
                {index > 0 &&
                  (step.joiner === "plus" ? (
                    <Plus
                      size={22}
                      className="mx-auto shrink-0 text-muted"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowRight
                      size={22}
                      className="mx-auto shrink-0 rotate-90 text-muted lg:rotate-0"
                      aria-hidden="true"
                    />
                  ))}
                <div
                  className={`flex-1 rounded-3xl p-5 text-on-pastel ${pastelBg[step.color]}`}
                >
                  <p className="font-mono text-xs uppercase tracking-widest opacity-75">
                    {step.label}
                  </p>
                  <p className="mt-1 text-xl font-extrabold">{step.title}</p>
                  <p className="mt-1 text-sm">{step.detail}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </motion.div> */}

        {/* ---------- Todas as tecnologias ---------- */}
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: (index % 2) * 0.1 },
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-line bg-surface"
            >
              <div
                className={`px-6 py-5 text-on-pastel ${pastelBg[group.color]}`}
              >
                <h3 className="text-2xl font-extrabold">
                  {t.skills[group.key]}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2 p-6">
                {group.items.map((item) => (
                  <li key={item} className="chip border border-line">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
