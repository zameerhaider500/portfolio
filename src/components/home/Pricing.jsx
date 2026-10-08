import { Check, Clock } from "lucide-react";
import { plans } from "../../data/pricing";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="section section-glow">
      <div className="container-x">
        <SectionHeading
          title="Shopify Packages"
          subtitle="Transparent pricing for every stage of your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <div
                className={`h-full rounded-2xl ${
                  plan.featured
                    ? "p-[1.5px] bg-gradient-to-b from-primary via-accent to-primary"
                    : ""
                }`}
                style={plan.featured ? { boxShadow: "0 0 50px rgb(var(--c-primary) / 0.22)" } : undefined}
              >
                <div
                  className={`relative h-full flex flex-col p-7 rounded-2xl bg-white ${
                    plan.featured ? "" : "border border-slate-200"
                  } transition-transform duration-300 hover:-translate-y-1`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-strong to-accent-strong text-white text-[0.7rem] font-semibold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-display font-bold text-slate-900 text-lg">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{plan.tagline}</p>

                  <div className="mt-6 mb-7">
                    <span className="text-[0.65rem] text-slate-400 uppercase tracking-widest font-medium">
                      Starting From
                    </span>
                    <div className="font-display text-4xl font-bold text-slate-900 mt-1">{plan.price}</div>
                  </div>

                  <ul className="space-y-3 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-primary-strong mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="text-xs text-slate-500 mb-5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {plan.delivery}
                  </div>

                  <Button
                    href="/#contact"
                    variant={plan.featured ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}