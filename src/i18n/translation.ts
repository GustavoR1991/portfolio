export type Language = "pt" | "en";

const pt = {
  nav: {
    about: "Sobre",
    projects: "Projetos",
    skills: "Skills",
    experience: "Experiência",
    education: "Formação",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  toggles: {
    toLight: "Mudar para tema claro",
    toDark: "Mudar para tema escuro",
    language: "Mudar idioma para inglês",
  },
  hero: {
    greeting: "Oi, eu sou o",
    name: "Gustavo",
    subtitle:
      "Desenvolvedor Full-Stack que constrói produtos completos: da interface em Vue ou React até a API em NestJS e o banco de dados.",
    ctaProjects: "Ver projetos",
    ctaContact: "Vamos conversar",
    dragHint: "Arraste os adesivos",
    stickerOpen: "Aberto a vagas",
  },
  about: {
    label: "Sobre mim",
    title: "Prazer, Gustavo",
    bio: [
      "Sou o Gustavo, desenvolvedor de São Paulo. Comecei na área administrativa e me formei em Gestão de RH, até que em 2023 mudei de rota para a tecnologia: fiz Análise e Desenvolvimento de Sistemas, os cursos da Rocketseat, e não parei mais de construir. Esse começo me ensinou a olhar para as pessoas e os processos por trás de cada tela, e é isso que eu levo para o código.",
      "Na Starke Vision, otimizei novas telas por meio do reaproveitamento de componentes e integrei a API de uma balança ao sistema, permitindo o registro automático do peso, sem necessidade de digitação manual. Na GranaTech, uma fintech, desenvolvi interfaces utilizadas pelos clientes em parceria com as equipes de Design e Back-end, contribuindo para a criação de uma experiência mais funcional e intuitiva.",
    ],
    repos: "repositórios",
    followers: "seguidores",
    locationFallback: "São Paulo, Brasil",
  },
  projects: {
    label: "Projetos",
    title: "Coisas que eu construí",
    noDescription: "Sem descrição por enquanto.",
    view: "Ver código",
    viewAll: "Ver no GitHub",
    showAll: "Mostrar todos",
    showLess: "Mostrar menos",
    error:
      "Não consegui carregar os repositórios agora. Tente recarregar a página.",
    // Descrições traduzidas. A chave é o nome do repositório no GitHub.
    descriptions: {
      "in-orbit":
        "Aplicação completa de metas (front + API própria): o usuário registra e acompanha objetivos de ponta a ponta.",
      "coffee-delivery":
        "Pedido de café online: o usuário escolhe, ajusta o carrinho e finaliza com endereço e pagamento.",
      "API-AGENTS":
        "API em Node.js com Fastify, Zod, validação de ambiente, Docker e PostgreSQL.",
      "WEB-AGENTS": "Interface em React e Vite com Tailwind CSS e shadcn/ui.",
      "ig-news": "Blog de notícias com Next.js e assinatura paga.",
      "ecommerce-api": "API de um e-commerce, em TypeScript.",
      "ecommerce-front": "Front-end do e-commerce, em TypeScript.",
      "03-dt-money": "Controle de finanças pessoais em React e TypeScript.",
      "ignite-timer": "Timer de foco com React, styled-components e Zod.",
      "react-feed": "Meu primeiro projeto em React: um feed de rede social.",
      portfolio:
        "Este portfólio: React, TypeScript, Tailwind e a API do GitHub.",
      ClimaTempo: "Previsão do tempo com HTML, CSS e JavaScript.",
    } as Record<string, string>,
  },
  skills: {
    label: "Skills",
    title: "Minha caixa de ferramentas",
    stackTitle: "Como eu monto projetos hoje",
    stackText:
      "Um monorepo com front e API juntos, banco relacional e fila para o trabalho pesado.",
    stackWeb: "Front-end",
    stackApi: "API",
    stackDb: "Banco",
    stackQueue: "Fila",
    stackQueueDetail: "tarefas em segundo plano",
    front: "Front-end",
    back: "Back-end",
    data: "Banco de dados e filas",
    tools: "DevOps e ferramentas",
  },
  experience: {
    label: "Experiência",
    title: "Por onde passei",
    items: [
      {
        period: "nov 2025 — mai 2026 · 7 meses",
        role: "Desenvolvedor Full-Stack",
        company: "Starke Vision",
        mode: "Tempo integral · Remoto",
        highlights: [
          "Reduzi o tempo de implementação de novas telas ao extrair e reutilizar componentes de UI, em vez de reconstruir as mesmas peças a cada demanda.",
          "Eliminei a digitação manual dos dados de pesagem ao integrar a API da balança ao sistema, puxando o peso direto para a aplicação.",
          "Entreguei funcionalidades em produção no full-stack (interface + API + PostgreSQL), com manutenção evolutiva para o time continuar o produto sem retrabalho.",
        ],
      },
      {
        period: "out 2024 — mar 2025 · 6 meses",
        role: "Desenvolvedor Front-End",
        company: "GranaTech",
        mode: "Tempo integral · Remoto",
        highlights: [
          "Entreguei interfaces de produto financeiro usadas pelos clientes da fintech, alinhando front com design e APIs para o usuário concluir fluxos sem quebra de integração.",
          "Acelerei as próximas entregas do time ao manter e evoluir componentes reutilizáveis, reduzindo retrabalho de UI.",
        ],
      },
      {
        period: "jul 2021 — fev 2022 · 8 meses",
        role: "Auxiliar administrativo",
        company: "PRIJR",
        mode: "Meio período · Presencial",
        highlights: [
          "Organizei pagamentos e contratos de compra e venda e atualizei vitrines digitais, reduzindo atraso no atendimento a clientes.",
        ],
      },
    ],
  },
  education: {
    label: "Formação",
    title: "Estudos e certificados",
    degrees: [
      {
        course: "Análise e Desenvolvimento de Sistemas",
        school: "Universidade Cruzeiro do Sul (UNICSUL)",
        period: "ago 2023 — jul 2025",
        status: "Tecnólogo · Concluído",
      },
      {
        course: "Gestão de Recursos Humanos",
        school: "Universidade Municipal de São Caetano do Sul (USCS)",
        period: "fev 2022 — dez 2023",
        status: "Tecnólogo · Concluído",
      },
    ],
    coursesTitle: "Cursos",
    courses: [
      "Rocketseat: Discover, React, Node.js e React Native",
      "English Level 2 — Maison de l'Amitié, Montreal (2025)",
    ],
    languagesTitle: "Idiomas",
    languages: [
      "Português · nativo",
      "Inglês · intermediário",
      "Espanhol · básico",
    ],
  },
  contact: {
    label: "Contato",
    title: "Bora criar algo juntos?",
    text: "Estou aberto a vagas (presencial, híbrido ou remoto), freelas e boas conversas sobre código. Me chama!",
    email: "Mandar e-mail",
  },
  footer: {
    madeWith: "Feito com React, TypeScript e muito café.",
    backToTop: "Voltar ao topo",
  },
};

// O tipo é "copiado" do objeto em português
export type Translation = typeof pt;

const en: Translation = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  toggles: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    language: "Switch language to Portuguese",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Gustavo",
    subtitle:
      "A Full-Stack developer who builds complete products: from the Vue or React interface to the NestJS API and the database.",
    ctaProjects: "See projects",
    ctaContact: "Let's talk",
    dragHint: "Drag the stickers",
    stickerOpen: "Open to work",
  },
  about: {
    label: "About me",
    title: "Nice to meet you",
    bio: [
      "I'm Gustavo, a developer from São Paulo, Brazil. I started out in office administration and earned a degree in Human Resources Management. In 2023, I switched to tech: I studied Systems Analysis and Development, took the Rocketseat courses, and haven't stopped building since. That background taught me to look at the people and processes behind every screen, and that's what I bring to my code.",
      "At Starke Vision, I optimized new screens by reusing components and integrated a scale's API into the system, so the weight is recorded automatically with no manual entry. At GranaTech, a fintech, I built the interfaces customers used, working with the design and back-end teams to create a more functional and intuitive experience.",
    ],
    repos: "repositories",
    followers: "followers",
    locationFallback: "São Paulo, Brazil",
  },
  projects: {
    label: "Projects",
    title: "Things I've built",
    noDescription: "No description yet.",
    view: "View code",
    viewAll: "See on GitHub",
    showAll: "Show all",
    showLess: "Show less",
    error:
      "I couldn't load the repositories right now. Try reloading the page.",
    descriptions: {
      "in-orbit":
        "A complete goals app (front-end + its own API): users set and track goals end to end.",
      "coffee-delivery":
        "Online coffee ordering: pick your coffee, adjust the cart and check out with address and payment.",
      "API-AGENTS":
        "Node.js API with Fastify, Zod, environment validation, Docker and PostgreSQL.",
      "WEB-AGENTS": "React and Vite interface with Tailwind CSS and shadcn/ui.",
      "ig-news": "News blog built with Next.js and paid subscriptions.",
      "ecommerce-api": "API for an e-commerce store, in TypeScript.",
      "ecommerce-front": "Front-end for the e-commerce store, in TypeScript.",
      "03-dt-money": "Personal finance tracker in React and TypeScript.",
      "ignite-timer": "Focus timer with React, styled-components and Zod.",
      "react-feed": "My first React project: a social media feed.",
      portfolio:
        "This portfolio: React, TypeScript, Tailwind and the GitHub API.",
      ClimaTempo: "Weather forecast with HTML, CSS and JavaScript.",
    },
  },
  skills: {
    label: "Skills",
    title: "My toolbox",
    stackTitle: "How I build projects today",
    stackText:
      "A monorepo with front-end and API together, a relational database and a queue for the heavy lifting.",
    stackWeb: "Front-end",
    stackApi: "API",
    stackDb: "Database",
    stackQueue: "Queue",
    stackQueueDetail: "background jobs",
    front: "Front-end",
    back: "Back-end",
    data: "Databases & queues",
    tools: "DevOps & tools",
  },
  experience: {
    label: "Experience",
    title: "Where I've been",
    items: [
      {
        period: "Nov 2025 — May 2026 · 7 months",
        role: "Full-Stack Developer",
        company: "Starke Vision",
        mode: "Full-time · Remote",
        highlights: [
          "Cut the time to build new screens by extracting and reusing UI components instead of rebuilding the same pieces for every request.",
          "Removed manual entry of weighing data by integrating the scale's API, pulling the weight straight into the application.",
          "Shipped full-stack features to production (interface + API + PostgreSQL) and kept evolving them so the team could carry the product forward without rework.",
        ],
      },
      {
        period: "Oct 2024 — Mar 2025 · 6 months",
        role: "Front-End Developer",
        company: "GranaTech",
        mode: "Full-time · Remote",
        highlights: [
          "Delivered financial product interfaces used by the fintech's customers, aligning front-end with design and APIs so users could finish flows without integration issues.",
          "Sped up the team's next deliveries by maintaining and evolving reusable components, reducing UI rework.",
        ],
      },
      {
        period: "Jul 2021 — Feb 2022 · 8 months",
        role: "Administrative Assistant",
        company: "PRIJR",
        mode: "Part-time · On-site",
        highlights: [
          "Organized payments and purchase contracts and updated digital storefronts, reducing delays in customer service.",
        ],
      },
    ],
  },
  education: {
    label: "Education",
    title: "Studies & certificates",
    degrees: [
      {
        course: "Systems Analysis and Development",
        school: "Cruzeiro do Sul University (UNICSUL)",
        period: "Aug 2023 — Jul 2025",
        status: "Associate degree · Completed",
      },
      {
        course: "Human Resources Management",
        school: "Municipal University of São Caetano do Sul (USCS)",
        period: "Feb 2022 — Dec 2023",
        status: "Associate degree · Completed",
      },
    ],
    coursesTitle: "Courses",
    courses: [
      "Rocketseat: Discover, React, Node.js and React Native",
      "English Level 2 — Maison de l'Amitié, Montreal (2025)",
    ],
    languagesTitle: "Languages",
    languages: [
      "Portuguese · native",
      "English · intermediate",
      "Spanish · basic",
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's build something together?",
    text: "I'm open to jobs (on-site, hybrid or remote), freelance work and good conversations about code. Say hi!",
    email: "Send an e-mail",
  },
  footer: {
    madeWith: "Made with React, TypeScript and lots of coffee.",
    backToTop: "Back to top",
  },
};

export const translations: Record<Language, Translation> = { pt, en };
