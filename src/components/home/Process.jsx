import { Search, ClipboardList, Hammer, RefreshCw, Rocket } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fm=webp&fit=crop&w=700&q=75`;

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "Understand your goals.",
    image: photo("photo-1522202176988-66273c2fd55f"),
  },
  {
    icon: ClipboardList,
    title: "Plan",
    desc: "A clear roadmap.",
    image: photo("photo-1460925895917-afdab827c52f"),
  },
  {
    icon: Hammer,
    title: "Build",
    desc: "Your project comes to life.",
    image: photo("photo-1498050108023-c5249f4df085"),
  },
  {
    icon: RefreshCw,
    title: "Review",
    desc: "Test and refine.",
    image: photo("photo-1555066931-4365d14bab8c"),
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Go live and start growing.",
    image: photo("photo-1556742049-0cfed4f6a45d"),
  },
];

// Each card is a bit taller than the last on desktop, so the row climbs toward launch.
const heights = ["lg:h-[280px]", "lg:h-[330px]", "lg:h-[380px]", "lg:h-[430px]", "lg:h-[480px]"];

function hideBroken(e) {
  e.currentTarget.style.display = "none";
}

export default function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          title="How I Work"
          subtitle="Simple. Transparent. Five steps from idea to launch."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end lg:gap-5">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <div key={s.title} className={last ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Reveal delay={i * 100}>
                  <article
                    className={`group relative h-60 overflow-hidden rounded-3xl bg-slate-800 ${heights[i]} ${
                      last ? "ring-2 ring-emerald-400 ring-offset-4 ring-offset-white" : ""
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={`${s.title} step`}
                      loading="lazy"
                      onError={hideBroken}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 ${
                        last
                          ? "bg-gradient-to-t from-emerald-900/90 via-slate-900/45 to-slate-900/20"
                          : "bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10"
                      }`}
                    />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                      <span className="font-display text-3xl font-bold leading-none text-white/90">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur ${
                          last ? "bg-emerald-400 text-slate-900" : "bg-white/15 text-white"
                        }`}
                      >
                        <s.icon className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm text-slate-200">{s.desc}</p>
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
