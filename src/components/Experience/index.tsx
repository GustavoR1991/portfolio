import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { pastelAt, pastelBg } from "../../utils/pastel";
import { useLanguage } from "../../context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionTitle
          label={t.experience.label}
          title={t.experience.title}
          color="rose"
        />

        <ol className="ml-3 border-l-2 border-dashed border-line">
          {t.experience.items.map((item, index) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pb-14 pl-10 last:pb-0"
            >
              {/* Bolinha na linha do tempo */}
              <span
                className={`absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-bg ${pastelBg[pastelAt(index)]}`}
                aria-hidden="true"
              />
              <p className="font-mono text-sm text-muted">{item.period}</p>
              <h3 className="mt-2 text-2xl font-bold">
                {item.role}{" "}
                <span className="font-medium text-muted">· {item.company}</span>
              </h3>
              <p className="mt-1 text-sm text-muted">{item.mode}</p>

              {/* Uma lista com as conquistas, em vez de um parágrafo só */}
              <ul className="mt-4 max-w-3xl space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 leading-relaxed text-muted"
                  >
                    <span
                      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${pastelBg[pastelAt(index)]}`}
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
