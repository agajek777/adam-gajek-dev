// Every fact here must match the CV (PRODUCT.md, "Evidence on Hand").
// Both locales carry the same facts; only the language differs.

export type Locale = "en" | "pl";

export interface Role {
  period: string;
  /** ISO start/end for <time> elements; end omitted for the current role. */
  start: string;
  end?: string;
  title: string;
  company: string;
  client?: string;
  points: string[];
  stack: string[];
}

export interface Project {
  name: string;
  summary: string;
  status: string;
  url: string;
  urlLabel: string;
  image: { src: string; alt: string; width: number; height: number };
  features: { heading: string; items: string[] };
  engineering: { heading: string; items: string[] };
  stack: string[];
}

export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; experience: string; projects: string; skills: string; contact: string };
  ui: {
    skip: string;
    navLabel: string;
    langLabel: string;
    langName: string;
    themeToLight: string;
    themeToDark: string;
    present: string;
  };
  hero: { name: string; role: string; pitch: string; location: string };
  about: { heading: string; paragraphs: string[] };
  experience: { heading: string; forClient: string; roles: Role[] };
  projects: { heading: string; intro: string; items: Project[] };
  skills: { heading: string; groups: { name: string; items: string[] }[] };
  credentials: {
    heading: string;
    certsHeading: string;
    certs: { name: string; issuer: string }[];
    educationHeading: string;
    education: { degree: string; school: string; period: string; note?: string }[];
    languagesHeading: string;
    languages: { name: string; level: string }[];
  };
  contact: {
    heading: string;
    body: string;
    email: string;
    copy: string;
    copied: string;
    copyFailed: string;
  };
  footer: string;
}

const STACK = {
  alten: ["C#", ".NET 10", "Entity Framework", "MongoDB", "SQL Server", "PostgreSQL", "RabbitMQ", "IdentityServer", "Docker", "Azure DevOps", "Angular"],
  youriteams: [".NET", "C#", "Azure AKS", "ACR", "Azure SQL", "App Service", "Redis", "Docker"],
  chr: ["C#", ".NET", "Kafka", "SQL Server", "Azure", "ServiceStack", "React"],
  accenture: ["C++", "Red Hat Linux", "GitLab", "Jira", "Java"],
};

const SKILLS_EN = [
  { name: "Backend", items: ["C#", ".NET", "Entity Framework", "Dapper", "Domain-Driven Design"] },
  { name: "Data and caching", items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "HybridCache"] },
  { name: "Messaging", items: ["RabbitMQ", "Kafka"] },
  { name: "Cloud and delivery", items: ["Azure", "Docker", "Kubernetes", "CI/CD", "Azure DevOps"] },
  { name: "Architecture", items: ["Microservices", "Distributed systems", "Modular monolith"] },
  { name: "AI", items: ["LLM integration", "Structured output", "Cloudflare Workers AI", "Claude Code", "GitHub Copilot", "Codex"] },
  { name: "Tools", items: ["Git", "GitHub", "GitLab", "Jira"] },
];

const SKILLS_PL = [
  { name: "Backend", items: ["C#", ".NET", "Entity Framework", "Dapper", "Domain-Driven Design"] },
  { name: "Dane i cache", items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "HybridCache"] },
  { name: "Kolejki wiadomości", items: ["RabbitMQ", "Kafka"] },
  { name: "Chmura i wdrożenia", items: ["Azure", "Docker", "Kubernetes", "CI/CD", "Azure DevOps"] },
  { name: "Architektura", items: ["Mikroserwisy", "Systemy rozproszone", "Modularny monolit"] },
  { name: "AI", items: ["Integracja LLM", "Structured output", "Cloudflare Workers AI", "Claude Code", "GitHub Copilot", "Codex"] },
  { name: "Narzędzia", items: ["Git", "GitHub", "GitLab", "Jira"] },
];

const CERTS = [
  { name: "Azure Developer Associate", issuer: "Microsoft" },
  { name: "Azure Fundamentals", issuer: "Microsoft" },
  { name: "Claude Code in Action", issuer: "Anthropic" },
  { name: "Building with the Claude API", issuer: "Anthropic" },
];

export const EMAIL = "adam.gajek@outlook.com";
export const LINKEDIN = "https://www.linkedin.com/in/adam-gajek7/";
export const GITHUB = "https://github.com/agajek777";

export const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: "Adam Gajek, .NET Developer for Distributed Systems and AI",
      description:
        "C#/.NET developer with 6+ years of commercial experience in microservices, messaging and Azure, now shipping AI features to production. Based in Warsaw.",
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    ui: {
      skip: "Skip to content",
      navLabel: "Sections",
      langLabel: "Czytaj po polsku",
      langName: "PL",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      present: "Present",
    },
    hero: {
      name: "Adam Gajek",
      role: ".NET Developer, Distributed Systems and AI",
      pitch:
        "I build .NET backends for distributed systems. I use AI every day and keep growing in it, from tools that speed up my work to integrating AI into applications.",
      location: "Warsaw, Poland",
    },
    about: {
      heading: "About",
      paragraphs: [
        "For more than six years I have built commercial software in very different settings: a microservice platform for industrial automation, a cloud system serving over 14.5 million views a month, distributed services for a North American logistics company, and the C++ billing system where I started.",
        "Most of my work sits behind the API. Service boundaries, message flows over RabbitMQ and Kafka, relational and document storage, caching, containers and the pipelines that ship them. I aim for systems that are easy to change and uneventful to run.",
        "AI is the area I’m growing in fastest. In Studio, my own SaaS for dance schools, I built an AI assistant from scratch: a .NET endpoint over an LLM, grounded in the product’s documentation, with structured output, guardrails and integration tests. I use Claude Code, GitHub Copilot and Codex every day and hold Anthropic’s certifications in Claude Code and the Claude API. The tools make me faster; design decisions and code review stay with me.",
      ],
    },
    experience: {
      heading: "Experience",
      forClient: "for",
      roles: [
        {
          period: "Sep 2022 – Present",
          start: "2022-09",
          title: ".NET Developer",
          company: "Alten",
          client: "Emerson",
          points: [
            "Develop and maintain a microservice-oriented system for the industrial automation domain on modern .NET, currently .NET 10.",
            "Work across relational and NoSQL persistence, messaging between services, containerisation, source control and automated delivery pipelines.",
          ],
          stack: STACK.alten,
        },
        {
          period: "Jan 2025 – Nov 2025",
          start: "2025-01",
          end: "2025-11",
          title: ".NET Developer",
          company: "YourITeams",
          points: [
            "Developed a high-traffic cloud system serving more than 14.5 million views per month.",
            "Worked in an Azure environment with Kubernetes (AKS), a container registry, App Service hosting, Azure SQL and Redis caching.",
          ],
          stack: STACK.youriteams,
        },
        {
          period: "Apr 2021 – Sep 2022",
          start: "2021-04",
          end: "2022-09",
          title: "Software Engineer .NET",
          company: "C.H. Robinson",
          points: [
            "Built new solutions for cloud-based, microservice-oriented distributed systems, with Kafka for event streaming.",
            "Worked day to day with a North American engineering team in an international environment.",
          ],
          stack: STACK.chr,
        },
        {
          period: "Dec 2019 – Oct 2020",
          start: "2019-12",
          end: "2020-10",
          title: "Junior C++ Developer",
          company: "Accenture",
          points: [
            "Developed and maintained a billing system, from requirements analysis through implementation and testing.",
            "Optimised existing code and proposed technical improvements.",
          ],
          stack: STACK.accenture,
        },
      ],
    },
    projects: {
      heading: "Projects",
      intro: "What I build on my own: product, architecture, code and operations end to end.",
      items: [
        {
          name: "Studio",
          summary:
            "Free scheduling and booking software for dance schools and independent instructors, with a built-in AI assistant. Schools publish a timetable, sell passes online and take bookings from one link.",
          status: "Live, built and run by me since 2026",
          url: "https://studio-app.click/en/",
          urlLabel: "Open studio-app.click",
          image: {
            src: "/projects/studio-en.webp",
            alt: "Studio landing page: “Your dance school. All in one place.”, a question field for the AI assistant with suggested questions, and a sample weekly class schedule.",
            width: 1800,
            height: 1025,
          },
          features: {
            heading: "What it does",
            items: [
              "Timetable with rooms, instructors, weekly cycles and collision checks.",
              "Online class booking and room rental from a single school link.",
              "Waitlist that books the first eligible person when a seat frees up.",
              "Partner classes with lead and follow limits, and booking with your own partner.",
              "Passes paid by card or BLIK through Stripe, with money going straight to the school.",
              "Team roles, attendance, refunds, audit log and CSV export. Available in Polish, English, German and French.",
              "AI assistant on the website and in the app: answers questions about Studio and walks school staff through setup, with links straight to the right screen.",
            ],
          },
          engineering: {
            heading: "Under the hood",
            items: [
              "ASP.NET Core 10 API with ProblemDetails, rate limiting and OpenAPI; the TypeScript client types are generated from the contract.",
              "Multi-tenant PostgreSQL: row-level security keeps each school’s data separate, with EF Core, Npgsql and versioned SQL migrations.",
              "Transactional outbox feeding a durable email queue with retries and send limits.",
              "AI assistant: ASP.NET Core endpoint over Cloudflare Workers AI (Gemma). Answers are grounded in the product docs and returned as schema-validated JSON; links come only from a role-filtered allowlist, never from the model.",
              "Assistant guardrails: no access to school data, no stored conversations, rate limits per IP and per user, a daily budget with a graceful fallback, and 11 integration tests.",
              "Supabase Auth with Google sign-in, Stripe Connect for payments, Resend for email.",
              "React 19, TypeScript, Vite and TanStack Query on the front end.",
              "Dockerised API on Render, front end on Cloudflare Pages, GitHub Actions CI with integration tests and a daily health check.",
            ],
          },
          stack: [".NET 10", "ASP.NET Core", "EF Core", "PostgreSQL", "Workers AI", "Supabase", "React", "TypeScript", "Stripe Connect", "Docker", "Cloudflare Pages", "GitHub Actions"],
        },
      ],
    },
    skills: { heading: "Skills", groups: SKILLS_EN },
    credentials: {
      heading: "Certifications and education",
      certsHeading: "Certifications",
      certs: CERTS,
      educationHeading: "Education",
      education: [
        { degree: "Master of Engineering (MEng)", school: "Warsaw School of Computer Science", period: "2022 – 2024" },
        {
          degree: "Bachelor of Engineering (BEng)",
          school: "Warsaw School of Computer Science",
          period: "2018 – 2022",
          note: "Top 7 student of the first-cycle programme in 2019/2020, scholarship recipient.",
        },
      ],
      languagesHeading: "Languages",
      languages: [
        { name: "Polish", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "German", level: "Basic" },
      ],
    },
    contact: {
      heading: "Let’s talk",
      body: "I’m interested in senior backend roles in .NET and the cloud. Email is the fastest way to reach me.",
      email: "Email me",
      copy: "Copy address",
      copied: "Copied",
      copyFailed: "Copy failed. Select the address instead.",
    },
    footer: "Built with Astro and hosted on Cloudflare Pages.",
  },

  pl: {
    meta: {
      title: "Adam Gajek – .NET Developer, systemy rozproszone i AI",
      description:
        "Programista C#/.NET z ponad sześcioletnim doświadczeniem komercyjnym w mikroserwisach, kolejkach wiadomości i Azure, który wdraża funkcje AI na produkcję. Warszawa.",
    },
    nav: { about: "O mnie", experience: "Doświadczenie", projects: "Projekty", skills: "Umiejętności", contact: "Kontakt" },
    ui: {
      skip: "Przejdź do treści",
      navLabel: "Sekcje",
      langLabel: "Read in English",
      langName: "EN",
      themeToLight: "Włącz jasny motyw",
      themeToDark: "Włącz ciemny motyw",
      present: "obecnie",
    },
    hero: {
      name: "Adam Gajek",
      role: ".NET Developer – systemy rozproszone i AI",
      pitch:
        "Tworzę backend w .NET dla systemów rozproszonych. Na co dzień pracuję z AI i rozwijam się w tym obszarze: od narzędzi, które przyspieszają moją pracę, po integrację AI w aplikacjach.",
      location: "Warszawa",
    },
    about: {
      heading: "O mnie",
      paragraphs: [
        "Od ponad sześciu lat zawodowo tworzę oprogramowanie w bardzo różnych projektach. Rozwijam platformę mikroserwisową dla automatyki przemysłowej, pracowałem też nad systemem chmurowym z ponad 14,5 mln wyświetleń miesięcznie i nad rozproszonymi usługami dla północnoamerykańskiej firmy logistycznej. Zaczynałem od systemu bilingowego w C++.",
        "Zajmuję się głównie tym, co dzieje się za API: granicami serwisów, przepływem wiadomości przez RabbitMQ i Kafkę, bazami relacyjnymi i dokumentowymi, cache’em, kontenerami oraz pipeline’ami, które to wszystko wdrażają. Stawiam na systemy, które łatwo rozwijać i które działają na produkcji bez niespodzianek.",
        "AI to obszar, w którym rozwijam się najszybciej. W Studio, moim własnym SaaS-ie dla szkół tańca, zbudowałem od zera asystenta AI: endpoint w .NET nad modelem językowym, oparty na dokumentacji produktu, ze ściśle określonym formatem odpowiedzi, zabezpieczeniami i testami integracyjnymi. Na co dzień pracuję z Claude Code, GitHub Copilotem i Codexem, mam też certyfikaty Anthropic z Claude Code i Claude API. Te narzędzia przyspieszają moją pracę, ale decyzje projektowe i code review należą do mnie.",
      ],
    },
    experience: {
      heading: "Doświadczenie",
      forClient: "dla",
      roles: [
        {
          period: "wrz 2022 – obecnie",
          start: "2022-09",
          title: ".NET Developer",
          company: "Alten",
          client: "Emerson",
          points: [
            "Rozwijam i utrzymuję system oparty na mikroserwisach dla branży automatyki przemysłowej, napisany w nowoczesnym .NET (obecnie .NET 10).",
            "Na co dzień pracuję z bazami relacyjnymi i NoSQL, komunikacją między serwisami, kontenerami, systemem kontroli wersji i automatycznymi pipeline’ami CI/CD.",
          ],
          stack: STACK.alten,
        },
        {
          period: "sty 2025 – lis 2025",
          start: "2025-01",
          end: "2025-11",
          title: ".NET Developer",
          company: "YourITeams",
          points: [
            "Rozwijałem system chmurowy o dużym ruchu, który obsługuje ponad 14,5 mln wyświetleń miesięcznie.",
            "Pracowałem w środowisku Azure: Kubernetes (AKS), Azure Container Registry, App Service, Azure SQL i Redis jako cache.",
          ],
          stack: STACK.youriteams,
        },
        {
          period: "kwi 2021 – wrz 2022",
          start: "2021-04",
          end: "2022-09",
          title: "Software Engineer .NET",
          company: "C.H. Robinson",
          points: [
            "Tworzyłem nowe rozwiązania w chmurowych systemach rozproszonych opartych na mikroserwisach, z Kafką do strumieniowania zdarzeń.",
            "Na co dzień pracowałem w międzynarodowym zespole, razem z inżynierami z Ameryki Północnej.",
          ],
          stack: STACK.chr,
        },
        {
          period: "gru 2019 – paź 2020",
          start: "2019-12",
          end: "2020-10",
          title: "Junior C++ Developer",
          company: "Accenture",
          points: [
            "Rozwijałem i utrzymywałem system bilingowy: od analizy wymagań, przez implementację, po testy.",
            "Optymalizowałem istniejący kod i proponowałem usprawnienia techniczne.",
          ],
          stack: STACK.accenture,
        },
      ],
    },
    projects: {
      heading: "Projekty",
      intro: "Projekty, które prowadzę sam: od pomysłu i architektury, przez kod, po utrzymanie.",
      items: [
        {
          name: "Studio",
          summary:
            "Bezpłatna aplikacja do grafiku i zapisów dla szkół tańca i samodzielnych instruktorów, z wbudowanym asystentem AI. Szkoła publikuje grafik, sprzedaje karnety online i przyjmuje zapisy przez jeden link.",
          status: "Działa na produkcji, rozwijam go od 2026 roku",
          url: "https://studio-app.click/",
          urlLabel: "Otwórz studio-app.click",
          image: {
            src: "/projects/studio-pl.webp",
            alt: "Strona główna Studio: „Zarządzaj szkołą tańca. W jednym miejscu.”, pole pytania do asystenta AI z podpowiedziami i przykładowy grafik zajęć.",
            width: 1800,
            height: 1025,
          },
          features: {
            heading: "Co robi",
            items: [
              "Grafik z salami, instruktorami, zajęciami cyklicznymi i wykrywaniem kolizji.",
              "Zapisy na zajęcia i rezerwacja sal online przez jeden link szkoły.",
              "Lista rezerwowa: gdy zwolni się miejsce, Studio samo zapisuje pierwszą uprawnioną osobę.",
              "Zajęcia w parach z limitami ról prowadzących i prowadzonych oraz możliwością zapisu z własnym partnerem.",
              "Karnety płatne kartą lub BLIK-iem przez Stripe; pieniądze trafiają bezpośrednio do szkoły.",
              "Role w zespole, lista obecności, zwroty, dziennik zdarzeń i eksport do CSV. Interfejs w czterech językach: polskim, angielskim, niemieckim i francuskim.",
              "Asystent AI na stronie i w aplikacji: odpowiada na pytania o Studio i prowadzi zespół szkoły przez konfigurację, z linkami prosto do właściwego ekranu.",
            ],
          },
          engineering: {
            heading: "Pod maską",
            items: [
              "API w ASP.NET Core 10 z ProblemDetails, rate limitingiem i OpenAPI; typy TypeScript dla frontendu są generowane z kontraktu.",
              "PostgreSQL w modelu multi-tenant: row-level security oddziela dane poszczególnych szkół. EF Core, Npgsql i wersjonowane migracje SQL.",
              "Wzorzec transactional outbox zasila trwałą kolejkę e-maili z ponowieniami i limitami wysyłki.",
              "Asystent AI: endpoint w ASP.NET Core nad Cloudflare Workers AI (Gemma). Odpowiedzi opierają się na dokumentacji produktu i wracają jako JSON zgodny ze schematem; linki pochodzą wyłącznie z listy dozwolonych miejsc filtrowanej rolą, nigdy z modelu.",
              "Zabezpieczenia asystenta: brak dostępu do danych szkoły, brak zapisu rozmów, limity zapytań na IP i na użytkownika, dzienny budżet z odpowiedzią awaryjną oraz 11 testów integracyjnych.",
              "Logowanie przez Google w Supabase Auth, płatności przez Stripe Connect, wysyłka e-maili przez Resend.",
              "Frontend: React 19, TypeScript, Vite i TanStack Query.",
              "API w kontenerze Docker na Render, frontend na Cloudflare Pages, CI w GitHub Actions z testami integracyjnymi i codziennym sprawdzaniem działania usług.",
            ],
          },
          stack: [".NET 10", "ASP.NET Core", "EF Core", "PostgreSQL", "Workers AI", "Supabase", "React", "TypeScript", "Stripe Connect", "Docker", "Cloudflare Pages", "GitHub Actions"],
        },
      ],
    },
    skills: { heading: "Umiejętności", groups: SKILLS_PL },
    credentials: {
      heading: "Certyfikaty i wykształcenie",
      certsHeading: "Certyfikaty",
      certs: CERTS,
      educationHeading: "Wykształcenie",
      education: [
        { degree: "Magister inżynier (studia II stopnia)", school: "Warszawska Wyższa Szkoła Informatyki", period: "2022 – 2024" },
        {
          degree: "Inżynier (studia I stopnia)",
          school: "Warszawska Wyższa Szkoła Informatyki",
          period: "2018 – 2022",
          note: "Stypendysta; w roku akademickim 2019/2020 w gronie siedmiu najlepszych studentów studiów I stopnia.",
        },
      ],
      languagesHeading: "Języki",
      languages: [
        { name: "Polski", level: "ojczysty" },
        { name: "Angielski", level: "zaawansowany" },
        { name: "Niemiecki", level: "podstawowy" },
      ],
    },
    contact: {
      heading: "Porozmawiajmy",
      body: "Chętnie porozmawiam o rolach senior backend w .NET i chmurze. Najszybciej skontaktujesz się ze mną mailowo.",
      email: "Napisz do mnie",
      copy: "Kopiuj adres",
      copied: "Skopiowano",
      copyFailed: "Nie udało się skopiować adresu. Zaznacz go i skopiuj ręcznie.",
    },
    footer: "Strona zbudowana w Astro i hostowana na Cloudflare Pages.",
  },
};
