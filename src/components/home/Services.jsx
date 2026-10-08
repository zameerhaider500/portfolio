import { services } from "../../data/services";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: heading + image */}
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            title="What I can build for you"
            subtitle="Everything you need to launch and grow your online store."
          />
          <Reveal className="-mt-4">
            <div className="relative max-w-md">
              <div className="absolute -inset-3 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60 bg-white">
                <img src="/services.png" alt="Services overview" loading="lazy" className="w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: service cards */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80} className={i === services.length - 1 ? "sm:col-span-2" : ""}>
              <div className="group h-full p-5 rounded-xl border border-slate-200 bg-white hover:border-primary/40 hover:shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all duration-300 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary-strong group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-[15px]">{s.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}