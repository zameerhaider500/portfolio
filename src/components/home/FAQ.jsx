import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/faqs";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const supportPhoto =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fm=webp&fit=crop&w=800&q=75";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: heading + help card */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              title="Common Questions"
              subtitle="Everything you might want to ask before we start."
            />
            <Reveal className="-mt-4">
              <div className="relative max-w-md overflow-hidden rounded-3xl bg-slate-800">
                <img
                  src={supportPhoto}
                  alt="Talking through a project"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/30" />
                <div className="relative px-7 pb-7 pt-32">
                  <h3 className="font-display text-xl font-semibold text-white">Still have a question?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    Send me a message and I'll reply with a clear, honest answer.
                  </p>
                  <Button href="/#contact" className="mt-5">
                    Ask me directly
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className={`rounded-2xl border transition-colors duration-300 ${
                      isOpen ? "border-slate-300 bg-slate-50" : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-sm font-medium text-slate-900 sm:text-base">{f.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-500"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
