import { Target, Smartphone, Zap, MessageCircle, Code2, TrendingUp, Star } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const features = [
  { icon: Target, title: "Business Focused", desc: "Every decision tied to your revenue." },
  { icon: Smartphone, title: "Mobile First", desc: "Perfect on phones, tablets, and desktops." },
  { icon: Zap, title: "Fast Loading", desc: "Optimized so customers never leave." },
  { icon: MessageCircle, title: "Fast Communication", desc: "No jargon. You always know where things stand." },
  { icon: Code2, title: "Clean Development", desc: "Fewer bugs, easier updates, better performance." },
  { icon: TrendingUp, title: "Conversion Focused", desc: "Layouts designed to turn visitors into buyers." },
];

export default function WhyMe() {
  return (
    <section className="section">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Left: image */}
        <Reveal>
          <div className="relative max-w-lg mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60 bg-white">
              <img src="/about.jpg" alt="Why work with me" loading="lazy" className="w-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 card px-5 py-4 flex items-center gap-3 animate-float bg-white">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-500 flex items-center justify-center">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">5-Star Rated</p>
                <p className="text-slate-500 text-xs">Trusted by clients</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: features */}
        <div>
          <SectionHeading
            align="left"
            title="Why businesses work with me"
            subtitle="I focus on results, not just design."
          />
          <div className="grid sm:grid-cols-2 gap-4 -mt-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all duration-300 h-full">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{f.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}