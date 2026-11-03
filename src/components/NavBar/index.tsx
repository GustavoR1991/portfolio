import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { language, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Descobre se a página foi rolada para mudar o visual da barra
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fica dentro do componente porque os textos mudam com o idioma
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  const showBackground = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "pt-3" : "pt-6"}`}
    >
      <div className="container-page">
        <nav
          className={`flex items-center justify-between gap-3 rounded-full border py-2 pl-5 pr-2 transition-all duration-300 ${
            showBackground
              ? "border-line bg-surface/85 shadow-lg shadow-black/5 backdrop-blur-md"
              : "border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center text-xl font-extrabold tracking-tight"
          >
            Gustavo
            <span
              className="mx-1 inline-block h-2.5 w-2.5 rounded-full bg-peach"
              aria-hidden="true"
            />
            Rosa
          </a>

          {/* Links (só no desktop) */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-lilac hover:text-on-pastel"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Botão de idioma */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.toggles.language}
              className="flex h-11 items-center rounded-full border border-line bg-surface p-1 font-mono text-xs font-medium"
            >
              <span
                className={`rounded-full px-2.5 py-2 transition-colors ${language === "pt" ? "bg-butter text-on-pastel" : "text-muted"}`}
              >
                PT
              </span>
              <span
                className={`rounded-full px-2.5 py-2 transition-colors ${language === "en" ? "bg-butter text-on-pastel" : "text-muted"}`}
              >
                EN
              </span>
            </button>

            {/* Botão de tema: o ícone sai girando e o novo entra */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "light" ? t.toggles.toDark : t.toggles.toLight
              }
              className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-lilac text-on-pastel"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  className="grid"
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Botão de menu (só no celular) */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Menu do celular */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 flex flex-col gap-1 rounded-3xl border border-line bg-surface p-3 shadow-lg md:hidden"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-medium hover:bg-lilac hover:text-on-pastel"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
