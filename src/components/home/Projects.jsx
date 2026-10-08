import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section section-glow">
      <div className="container-x">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real stores built for real businesses. Every project below was designed, built, and delivered by me."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100} className="h-full">
              <article className="card group overflow-hidden h-full flex flex-col hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-primary-strong text-xs font-medium mt-0.5">{p.category}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600 flex-1">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="text-primary">▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-strong hover:text-primary transition-colors"
                    >
                      Visit live site <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}