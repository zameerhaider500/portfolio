import { MessageCircle, Mail, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { site, whatsappLink } from "../config/site";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Fastest way to reach me",
    value: "Chat now",
    href: whatsappLink,
    color: "text-emerald-600 bg-emerald-50",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    desc: "For detailed briefs",
    value: site.email,
    href: `mailto:${site.email}`,
    color: "text-primary-strong bg-primary/10",
  },
  {
    icon: Clock,
    title: "Response Time",
    desc: "I usually reply within",
    value: "A few hours",
    color: "text-accent-strong bg-accent/10",
  },
];

export default function Contact() {
  return (
    <section className="pt-36 pb-24">
      <div className="container-x">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Fill the form, or reach me directly — whichever you prefer."
        />
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto items-start">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {cards.map((c, i) => {
              const inner = (
                <>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${c.color}`}>
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 text-sm">{c.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{c.desc}</p>
                    <p className="text-sm text-slate-600 mt-1 truncate">{c.value}</p>
                  </div>
                </>
              );
              return (
                <Reveal key={c.title} delay={i * 100}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noreferrer" : undefined}
                      className="card bg-white p-5 flex items-center gap-4"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="card bg-white p-5 flex items-center gap-4">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Form */}
          <Reveal delay={200} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}