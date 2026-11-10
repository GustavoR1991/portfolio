import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { githubApi } from "../../services/githubApi";
import type { GitHubUser } from "../../types/github";
import { SectionTitle } from "../SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

// Formato orgânico de "bolha" feito só com border-radius
const blobShape = "rounded-[42%_58%_55%_45%/48%_42%_58%_52%]";

export function About() {
  const { t } = useLanguage();
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    // "ignore" evita atualizar o estado se o componente já saiu da tela
    let ignore = false;

    githubApi
      .getUser()
      .then((data) => {
        if (!ignore) setUser(data);
      })
      .catch((error) => console.error("Erro ao buscar o perfil:", error));

    return () => {
      ignore = true;
    };
  }, []);

  const stats = [
    {
      value: user?.public_repos ?? "–",
      label: t.about.repos,
      color: "bg-peach",
    },
    {
      value: user?.followers ?? "–",
      label: t.about.followers,
      color: "bg-sky",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionTitle
          label={t.about.label}
          title={t.about.title}
          color="peach"
        />

        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className={`mx-auto aspect-square w-64 bg-lilac p-4 md:w-full ${blobShape}`}
          >
            {user ? (
              <img
                src={user.avatar_url}
                alt={user.name ?? user.login}
                className={`h-full w-full object-cover ${blobShape}`}
              />
            ) : (
              <div
                className={`h-full w-full animate-pulse bg-surface/60 ${blobShape}`}
              />
            )}
          </motion.div>

          <div>
            <div className="space-y-5 text-lg leading-relaxed md:text-xl">
              {t.about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-3xl p-5 text-on-pastel ${stat.color}`}
                >
                  <p className="text-4xl font-extrabold">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
              <div className="col-span-2 flex items-center gap-3 rounded-3xl border border-line bg-surface p-5 sm:col-span-1">
                <MapPin size={22} className="shrink-0" aria-hidden="true" />
                <span className="font-medium">
                  {user?.location ?? t.about.locationFallback}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
