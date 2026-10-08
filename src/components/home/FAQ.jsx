import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/faqs";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container-x">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Common Questions" subtitle="Everything you might want to ask before we start." />
          <Reveal>
            <div className="card bg-white divide-y divide-slate-100 px-6 sm:px-8">
              {faqs.map((f, i) => (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full flex justify-between items-center gap-4 py-5 text-left"
                  >
                    <span className="font-medium text-slate-900 text-sm sm:text-base">{f.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        open === i ? "rotate-180 text-primary-strong" : "text-slate-400"
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-slate-600 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}