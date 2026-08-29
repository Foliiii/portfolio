// Edit this file to personalize the site. Every section on the page
// pulls its content from here — no need to touch component code.

export const profile = {
  name: "Samuel Melancon",
  title: "Software Engineer",
  tagline: "I build clean, reliable software and enjoy solving hard problems end to end.",
  location: "Add your city/region",
  email: "samuel.melancon3@gmail.com",
  resumeUrl: "", // e.g. "/resume.pdf" — drop a PDF in /public and set this to show a Download Resume button
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  },
  about: [
    "I'm a recent computer science graduate passionate about building software that's fast, well-tested, and easy to maintain. I like working across the stack — from database schema to pixel-perfect UI.",
    "I'm currently looking for full-time software engineering roles where I can keep growing, ship real products, and work with people who care about craft.",
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
    title: "Project One",
    description:
      "Replace with a real project: what it does, the problem it solves, and the impact or scale (e.g. users, performance gains).",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/project-one",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Replace with a real project. Focus on your specific contributions and any interesting technical decisions you made.",
    tech: ["Python", "FastAPI", "Docker"],
    githubUrl: "https://github.com/your-username/project-two",
    demoUrl: "",
    featured: true,
  },
  {
    title: "This Portfolio",
    description:
      "The site you're looking at right now — built with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/portfolio",
    demoUrl: "",
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
    role: "Software Engineering Intern",
    organization: "Add Company Name",
    period: "Summer 2025",
    bullets: [
      "Replace with a real accomplishment, ideally with a measurable result.",
      "What did you build, fix, or improve? Who used it?",
    ],
  },
  {
    role: "B.S. in Computer Science",
    organization: "Add University Name",
    period: "20XX – 20XX",
    bullets: [
      "Relevant coursework: Data Structures & Algorithms, Systems, Databases, etc.",
      "Add honors, GPA (if strong), or notable coursework/projects.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs"] },
  { category: "Tools & Cloud", items: ["Git", "Docker", "AWS", "PostgreSQL", "CI/CD"] },
];
