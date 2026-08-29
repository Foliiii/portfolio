// Edit this file to personalize the site. Every section on the page
// pulls its content from here — no need to touch component code.

export const profile = {
  name: "Samuel Melancon",
  title: "Software Engineer",
  tagline:
    "Computer science senior and software engineering intern with end-to-end ownership of internal .NET applications, from requirements gathering and interface design through IIS deployment.",
  location: "Baton Rouge, LA",
  email: "sambmelancon@gmail.com",
  resumeUrl: "", // e.g. "/resume.pdf" — drop a PDF in /public and set this to show a Download Resume button
  social: {
    github: "https://github.com/sammelancon",
    linkedin: "https://linkedin.com/in/sammelancon",
  },
  about: [
    "I'm a computer science senior at LSU Alexandria and a software engineering intern at Vinformatix, where I've built a unified data-tool suite that automates document processing and geographic data workflows.",
    "I like owning projects end to end — gathering requirements directly with stakeholders, designing the interface, and shipping it through to IIS deployment. I'm graduating in December 2026 and looking for full-time software engineering roles.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Vinformatix Toolbox",
    description:
      "Config-driven ASP.NET Core portal that unifies independent internal applications under one IIS site while preserving separate build and deployment lifecycles, using nested IIS applications, isolated application pools, and a shared Portal-owned stylesheet for consistent branding.",
    tech: ["ASP.NET Core", "Razor Pages", "IIS", "C#"],
    featured: true,
  },
  {
    title: "SnoopDoc",
    description:
      "Extracts text from individual PDFs or entire folders and packages batch results as ZIP files, reducing a recurring manual invoice workflow to roughly one minute.",
    tech: ["C#", ".NET", "Razor Pages", "PdfPig"],
    featured: true,
  },
  {
    title: "Pinpoint",
    description:
      "Address-enrichment and CSV export application that combines user-selected geographic and administrative fields, built from requirements gathered directly with the data team.",
    tech: ["C#", "Razor Pages", "APIs", "CSV"],
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering / Data Science Intern",
    organization: "Vinformatix — Baton Rouge, LA",
    period: "Oct 2024 – Present",
    bullets: [
      "Designed and delivered the first version of the Vinformatix Toolbox, a config-driven ASP.NET Core portal that unifies independent internal applications under one IIS site while preserving separate build and deployment lifecycles.",
      "Built SnoopDoc with C#, Razor Pages, and PdfPig to extract text from individual PDFs or entire folders, package batch results as ZIP files, and reduce a recurring manual invoice workflow to roughly one minute.",
      "Developed Pinpoint, an address-enrichment and CSV export application that combines user-selected geographic and administrative fields, based on requirements gathered directly with the data team.",
      "Architected nested IIS applications with isolated application pools, root-relative routing, and a shared Portal-owned stylesheet to provide consistent branding without coupling the projects' codebases.",
      "Created responsive interfaces and service-based application logic using ASP.NET Core, HTML, CSS, and JavaScript; tested workflows with real operational files and iterated from stakeholder feedback.",
      "Contributed to company web redesign work, including a new responsive About page aligned with Vinformatix branding and navigation patterns.",
    ],
  },
  {
    role: "B.S. in Computer Science",
    organization: "Louisiana State University at Alexandria — Alexandria, LA",
    period: "Expected Dec 2026",
    bullets: [
      "Relevant coursework: Data Structures, Database Systems, Software Development, Operating Systems, Computer Organization & Design.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["C#", "Python", "SQL", "HTML", "CSS", "JavaScript"] },
  {
    category: "Frameworks & Libraries",
    items: ["ASP.NET Core", "Razor Pages", "Entity Framework Core", "PdfPig"],
  },
  {
    category: "Tools & Platforms",
    items: ["Visual Studio", "VS Code", "SQL Server Management Studio", "Git", "Azure DevOps", "IIS", "Windows Server"],
  },
];
