import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, GitFork, Star } from "lucide-react";
import { githubApi } from "../../services/githubApi";
import type { GitHubRepo } from "../../types/github";
import { SectionTitle } from "../SectionTitle";
import { GitHubIcon } from "../icons/BrandIcons";
import { pastelAt, pastelBg } from "../../utils/pastel";
import { profile } from "../../constants/profile";
import { useLanguage } from "../../context/LanguageContext";

type Status = "loading" | "success" | "error";

// Quantos cartões aparecem antes de clicar em "Mostrar todos"
const INITIAL_COUNT = 6;

export function Projects() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let ignore = false;

    githubApi
      .getRepositories()
      .then((data) => {
        if (ignore) return;
        setRepos(data);
        setStatus("success");
      })
      .catch((error) => {
        console.error("Erro ao buscar repositórios:", error);
        if (!ignore) setStatus("error");
      });

    return () => {
      ignore = true;
    };
  }, []);

  // Mostra 6 ou todos, dependendo do botão
  const visibleRepos = showAll ? repos : repos.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionTitle
          label={t.projects.label}
          title={t.projects.title}
          color="sky"
        />

        {/* Carregando: 3 cartões "fantasma" piscando */}
        {status === "loading" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-80 animate-pulse rounded-3xl bg-surface"
              />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="rounded-3xl border border-line bg-surface p-6 text-muted">
            {t.projects.error}
          </p>
        )}

        {status === "success" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleRepos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: (index % 3) * 0.1 },
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
              >
                <div
                  className={`flex h-40 items-end justify-between p-5 ${pastelBg[pastelAt(index)]}`}
                >
                  <span className="text-7xl font-extrabold leading-none text-on-pastel/80">
                    {repo.name.charAt(0).toUpperCase()}
                  </span>
                  {repo.language && (
                    <span className="chip bg-white/70 font-mono text-xs text-on-pastel">
                      {repo.language}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{repo.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 leading-relaxed text-muted">
                    {/* 1º a tradução, 2º a descrição do GitHub, 3º o texto padrão */}
                    {t.projects.descriptions[repo.name] ??
                      repo.description ??
                      t.projects.noDescription}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-sm text-muted">
                    <span className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Star size={16} aria-hidden="true" />{" "}
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={16} aria-hidden="true" />{" "}
                        {repo.forks_count}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-ink">
                      {t.projects.view}
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {/* Só mostra o botão se tiver mais repositórios escondidos */}
          {status === "success" && repos.length > INITIAL_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              {showAll
                ? t.projects.showLess
                : `${t.projects.showAll} (${repos.length})`}
              <ChevronDown
                size={18}
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          )}

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 font-semibold transition-colors hover:bg-lilac hover:text-on-pastel"
          >
            <GitHubIcon className="h-5 w-5" />
            {t.projects.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
