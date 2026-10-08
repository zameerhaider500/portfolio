import { Search, ClipboardList, Hammer, RefreshCw, Rocket } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  { icon: Search, title: "Discover", desc: "Understand your goals." },
  { icon: ClipboardList, title: "Plan", desc: "A clear roadmap." },
  { icon: Hammer, title: "Build", desc: "Your store comes to life." },
  { icon: RefreshCw, title: "Review", desc: "Test and refine." },
  { icon: Rocket, title: "Launch", desc: "Go live and sell." },
];

export default function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          title="How I Work"
          subtitle="Simple. Transparent. Five steps from idea to launch."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-primary/50 to-accent/20" />
              )}
              <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary-strong to-accent-strong text-white flex items-center justify-center shadow-lg shadow-primary/30">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 text-sm">{s.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}