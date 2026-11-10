import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Languages } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import { pastelAt, pastelBg } from "../../utils/pastel";
import { useLanguage } from "../../context/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionTitle
          label={t.education.label}
          title={t.education.title}
          color="sky"
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* ---------- Faculdades ---------- */}
          <div className="flex flex-col gap-6">
            {t.education.degrees.map((degree, index) => (
              <motion.div
                key={degree.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
                viewport={{ once: true }}
                className="flex gap-5 rounded-3xl border border-line bg-surface p-6"
              >
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-on-pastel ${pastelBg[pastelAt(index + 1)]}`}
                >
                  <GraduationCap size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{degree.course}</h3>
                  <p className="mt-1 text-muted">{degree.school}</p>
                  <p className="mt-3 font-mono text-sm text-muted">
                    {degree.period} · {degree.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ---------- Cursos e idiomas ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
            className="rounded-3xl bg-butter p-6 text-on-pastel md:p-8"
          >
            <h3 className="flex items-center gap-2 text-xl font-extrabold">
              <BookOpen size={22} aria-hidden="true" />
              {t.education.coursesTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.education.courses.map((course) => (
                <li key={course} className="leading-relaxed">
                  {course}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 flex items-center gap-2 text-xl font-extrabold">
              <Languages size={22} aria-hidden="true" />
              {t.education.languagesTitle}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.education.languages.map((language) => (
                <li key={language} className="chip bg-white/60">
                  {language}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
