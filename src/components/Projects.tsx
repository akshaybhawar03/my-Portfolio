type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description: "A cool Next.js app demonstrating SSR and API routes.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "Responsive dashboard with charts and authentication.",
    tech: ["React", "Zustand", "Chart.js"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "Landing page with animations and SEO best practices.",
    tech: ["Next.js", "Framer Motion"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded-lg border p-5 hover:shadow-sm">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-foreground/80">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border px-2 py-1 text-xs text-foreground/70">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className="mt-4 inline-block text-sm text-foreground underline">
                Visit
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
