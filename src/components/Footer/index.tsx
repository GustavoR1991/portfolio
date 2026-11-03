import { ArrowUp } from "lucide-react";
import { profile } from "../../constants/profile";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear(); // o ano atualiza sozinho

  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
        <p>
          © {year} {profile.name}. {t.footer.madeWith}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-medium hover:text-ink"
        >
          {t.footer.backToTop}
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
