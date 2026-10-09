import { MessageCircle } from "lucide-react";
import Hero from "../components/home/Hero";
import WhyMe from "../components/home/WhyMe";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import Pricing from "../components/home/Pricing";
import Process from "../components/home/Process";
import FAQ from "../components/home/FAQ";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { whatsappLink } from "../config/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <WhyMe />
      <Pricing />
      <Process />
      <FAQ />

      {/* Contact */}
      <section id="contact" className="section section-glow relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-[-20%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="absolute top-[0%] right-[5%] w-[350px] h-[350px] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="container-x relative">
          <SectionHeading
            title="Let's build a website that grows your business"
            subtitle="New store or redesign — tell me about your project. I usually reply within a few hours."
          />
          <Reveal className="max-w-2xl mx-auto">
            <ContactForm />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-center mt-6 text-sm text-slate-500">
              Prefer to chat directly?{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-500 font-medium"
              >
                <MessageCircle className="w-4 h-4" /> Message me on WhatsApp
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}