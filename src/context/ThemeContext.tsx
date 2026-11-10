import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Passar a função (sem chamar) faz o React rodar só na primeira vez
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Sempre que o tema muda: atualiza o <html> e salva no navegador
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // modo anônimo pode bloquear o localStorage, tudo bem
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook para usar nos componentes: const { theme, toggleTheme } = useTheme()
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme precisa estar dentro de <ThemeProvider>");
  return context;
}
