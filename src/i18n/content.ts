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

export interface Principle {
  title: string;
  body: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; experience: string; approach: string; skills: string; contact: string };
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
  approach: { heading: string; note: string; items: Principle[] };
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
  { name: "AI development", items: ["Claude Code", "GitHub Copilot", "Codex"] },
  { name: "Tools", items: ["Git", "GitHub", "GitLab", "Jira"] },
];

const SKILLS_PL = [
  { name: "Backend", items: ["C#", ".NET", "Entity Framework", "Dapper", "Domain-Driven Design"] },
  { name: "Dane i cache", items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "HybridCache"] },
  { name: "Messaging", items: ["RabbitMQ", "Kafka"] },
  { name: "Chmura i wdrożenia", items: ["Azure", "Docker", "Kubernetes", "CI/CD", "Azure DevOps"] },
  { name: "Architektura", items: ["Mikroserwisy", "Systemy rozproszone", "Modularny monolit"] },
  { name: "Praca z AI", items: ["Claude Code", "GitHub Copilot", "Codex"] },
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
      title: "Adam Gajek, .NET Developer for Cloud and Distributed Systems",
      description:
        "C#/.NET developer with 6+ years of commercial experience in microservices, messaging, Azure and high-traffic cloud systems. Based in Warsaw.",
    },
    nav: { about: "About", experience: "Experience", approach: "How I build", skills: "Skills", contact: "Contact" },
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
      role: ".NET Developer, Cloud and Distributed Systems",
      pitch:
        "I build .NET backends for distributed systems: microservices, messaging, data and the cloud infrastructure they run on.",
      location: "Warsaw, Poland",
    },
    about: {
      heading: "About",
      paragraphs: [
        "For more than six years I have built commercial software in very different settings: a microservice platform for industrial automation, a cloud system serving over 14.5 million views a month, distributed services for a North American logistics company, and the C++ billing system where I started.",
        "Most of my work sits behind the API. Service boundaries, message flows over RabbitMQ and Kafka, relational and document storage, caching, containers and the pipelines that ship them. I aim for systems that are easy to change and uneventful to run.",
        "I use Claude Code, GitHub Copilot and Codex every day and hold Anthropic’s certifications in Claude Code and the Claude API. The tools make me faster; design decisions and code review stay with me.",
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
    approach: {
      heading: "How I build",
      note: "Principles I apply to distributed systems, generalised from my work. Client specifics stay under NDA.",
      items: [
        {
          title: "Messages arrive twice, late or out of order",
          body: "So consumers are idempotent, retries are bounded, and failed messages land in a dead-letter queue that someone actually watches. RabbitMQ when routing matters; Kafka when the log and replay matter.",
        },
        {
          title: "Storage follows the access pattern",
          body: "SQL Server or PostgreSQL for transactional data, MongoDB for documents that change shape, Redis or HybridCache in front of hot reads with a clear invalidation rule. Entity Framework for the domain model, Dapper where a query needs full control.",
        },
        {
          title: "Boundaries follow the domain",
          body: "Services are cut along business capabilities, not along the org chart. Between microservices and a modular monolith I pick the one the team can operate well; splitting a module out later is cheaper than merging services back.",
        },
        {
          title: "Every release goes the same way",
          body: "Each service builds into a container, passes the same pipeline and deploys the same way, whether to AKS or App Service. A manual step in a release is the next thing to automate.",
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
      title: "Adam Gajek, .NET Developer: chmura i systemy rozproszone",
      description:
        "Programista C#/.NET z ponad 6-letnim doświadczeniem komercyjnym: mikroserwisy, messaging, Azure i systemy chmurowe o dużym ruchu. Warszawa.",
    },
    nav: { about: "O mnie", experience: "Doświadczenie", approach: "Jak pracuję", skills: "Umiejętności", contact: "Kontakt" },
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
      role: ".NET Developer, chmura i systemy rozproszone",
      pitch:
        "Buduję backendy w .NET dla systemów rozproszonych: mikroserwisy, messaging, dane i infrastrukturę chmurową, na której działają.",
      location: "Warszawa",
    },
    about: {
      heading: "O mnie",
      paragraphs: [
        "Od ponad sześciu lat tworzę oprogramowanie komercyjne w bardzo różnych środowiskach: platformę mikroserwisową dla automatyki przemysłowej, system chmurowy obsługujący ponad 14,5 mln wyświetleń miesięcznie, rozproszone usługi dla północnoamerykańskiej firmy logistycznej i system bilingowy w C++, od którego zaczynałem.",
        "Większość mojej pracy dzieje się za API. Granice serwisów, przepływ wiadomości przez RabbitMQ i Kafkę, bazy relacyjne i dokumentowe, cache, kontenery i pipeline’y, które to wszystko wdrażają. Zależy mi na systemach, które łatwo zmieniać i które spokojnie działają na produkcji.",
        "Na co dzień korzystam z Claude Code, GitHub Copilot i Codex, mam certyfikaty Anthropic z Claude Code i Claude API. Narzędzia przyspieszają pracę; decyzje projektowe i code review zostają po mojej stronie.",
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
            "Rozwijam i utrzymuję system oparty na mikroserwisach dla domeny automatyki przemysłowej, na nowoczesnym .NET (obecnie .NET 10).",
            "Pracuję z bazami relacyjnymi i NoSQL, komunikacją między serwisami, konteneryzacją, kontrolą wersji i automatycznymi pipeline’ami wdrożeniowymi.",
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
            "Rozwijałem system chmurowy o dużym ruchu, obsługujący ponad 14,5 mln wyświetleń miesięcznie.",
            "Pracowałem w środowisku Azure: Kubernetes (AKS), rejestr kontenerów, hosting w App Service, Azure SQL i cache w Redisie.",
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
            "Tworzyłem nowe rozwiązania dla chmurowych, rozproszonych systemów opartych na mikroserwisach, z Kafką do strumieniowania zdarzeń.",
            "Na co dzień współpracowałem z zespołem inżynierów z Ameryki Północnej w międzynarodowym środowisku.",
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
            "Rozwijałem i utrzymywałem system bilingowy, od analizy wymagań przez implementację po testy.",
            "Optymalizowałem istniejący kod i proponowałem usprawnienia techniczne.",
          ],
          stack: STACK.accenture,
        },
      ],
    },
    approach: {
      heading: "Jak pracuję",
      note: "Zasady, które stosuję w systemach rozproszonych, uogólnione z mojej pracy. Szczegóły klientów objęte są NDA.",
      items: [
        {
          title: "Wiadomości przychodzą dwa razy, za późno albo w złej kolejności",
          body: "Dlatego konsumenci są idempotentni, ponowienia mają limit, a nieudane wiadomości trafiają do dead-letter queue, którą ktoś naprawdę obserwuje. RabbitMQ, gdy liczy się routing; Kafka, gdy liczy się log i możliwość odtworzenia zdarzeń.",
        },
        {
          title: "Bazę dobieram do wzorca dostępu",
          body: "SQL Server lub PostgreSQL dla danych transakcyjnych, MongoDB dla dokumentów o zmiennej strukturze, Redis albo HybridCache przed często czytanymi danymi, z jasną regułą unieważniania. Entity Framework dla modelu domeny, Dapper tam, gdzie zapytanie wymaga pełnej kontroli.",
        },
        {
          title: "Granice wyznacza domena",
          body: "Serwisy dzielę według możliwości biznesowych, nie według struktury organizacji. Między mikroserwisami a modularnym monolitem wybieram to, co zespół jest w stanie dobrze utrzymać; wydzielenie modułu później jest tańsze niż ponowne łączenie serwisów.",
        },
        {
          title: "Każde wydanie przechodzi tą samą drogą",
          body: "Każdy serwis buduje się do kontenera, przechodzi ten sam pipeline i wdraża się tak samo, na AKS czy App Service. Ręczny krok w wydaniu to następna rzecz do zautomatyzowania.",
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
          note: "W pierwszej siódemce studentów studiów I stopnia w roku 2019/2020, stypendysta.",
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
      body: "Interesują mnie role senior backend w .NET i chmurze. Najszybciej złapiesz mnie mailowo.",
      email: "Napisz do mnie",
      copy: "Kopiuj adres",
      copied: "Skopiowano",
      copyFailed: "Nie udało się skopiować. Zaznacz adres ręcznie.",
    },
    footer: "Zbudowane w Astro, hostowane na Cloudflare Pages.",
  },
};
