import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const AUTOPLAY_MS = 2000;

function ProjectDetails({ p }) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-strong">
        {p.category}
      </p>

      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-3">
            <span className="mt-2.5 h-px w-3 shrink-0 bg-primary" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-strong transition-colors hover:text-primary"
        >
          Visit live site
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef(null);
  const current = projects[active];

  // Autoplay: next project every 2 seconds, loop back to the first
  useEffect(() => {
    if (projects.length < 2) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % projects.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // Keep the active mobile pill centered inside its own row.
  // Only the pill row scrolls. The page itself is never moved.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const el = document.getElementById(`project-pill-${active}`);
    if (!scroller || !el) return;

    const offset =
      el.getBoundingClientRect().left -
      scroller.getBoundingClientRect().left +
      scroller.scrollLeft -
      (scroller.clientWidth - el.offsetWidth) / 2;

    scroller.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real stores built for real businesses. Every project below was designed, built, and delivered by me."
        />

        <Reveal className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          {/* Mobile: horizontal scrolling pills */}
          <div
            ref={scrollerRef}
            className="-mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
          >
            <div className="flex w-max gap-2">
              {projects.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.title}
                    id={`project-pill-${i}`}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-primary-strong bg-primary-strong text-white"
                        : "border-slate-200 bg-white text-slate-600 active:bg-slate-50"
                    }`}
                  >
                    <span className="mr-1.5 font-display text-[11px] tabular-nums opacity-70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop: numbered index list with progress line */}
          <ol className="hidden border-y border-slate-200 lg:block">
            {projects.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={p.title} className="border-b border-slate-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group flex w-full cursor-pointer items-center gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-display text-xs font-semibold tabular-nums transition-colors duration-300 ${
                        isActive ? "text-primary-strong" : "text-slate-400"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 font-display text-xl font-bold tracking-tight transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-slate-900"
                          : "text-slate-400 group-hover:text-slate-700"
                      }`}
                    >
                      {p.title}
                    </span>

                    <span className="relative h-px w-10 overflow-hidden bg-slate-200">
                      {isActive && (
                        <span
                          key={active}
                          className="absolute inset-y-0 left-0 bg-primary-strong"
                          style={{ animation: `projectBar ${AUTOPLAY_MS}ms linear forwards` }}
                        />
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Preview: below the pills on mobile, sticky beside the list on desktop */}
          <div className="self-start lg:sticky lg:top-28">
            <p className="font-display text-xs font-semibold tabular-nums text-slate-400">
              {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {current.title}
            </h3>
            <div className="mt-6" key={active}>
              <ProjectDetails p={current} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Progress bar keyframes (scoped to this component) */}
      <style>{`
        @keyframes projectBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}