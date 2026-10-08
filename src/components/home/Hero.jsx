import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "5★", label: "Client Rating" },
  { value: "3–14 days", label: "Typical Delivery" },
  { value: "100%", label: "Mobile Responsive" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 sm:pt-44 pb-20">
      {/* Soft light color blobs on white */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-32 left-[8%] w-[480px] h-[480px] rounded-full bg-primary/20 blur-[140px] animate-blob" />
        <div className="absolute top-24 right-[4%] w-[420px] h-[420px] rounded-full bg-accent/15 blur-[130px] animate-blob-slow" />
        <div className="absolute bottom-[-30%] left-[30%] w-[380px] h-[380px] rounded-full bg-primary-light/20 blur-[120px] animate-blob" style={{ animationDelay: "-7s" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 text-sm text-emerald-600 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new projects
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight">
            Shopify stores that turn <span className="gradient-text">visitors into customers</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I'm Zameer Haider — I design & build fast, professional eCommerce websites that help
            businesses look credible and sell more.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/#contact">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/#projects" variant="outline">
              View My Work
            </Button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">{s.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}