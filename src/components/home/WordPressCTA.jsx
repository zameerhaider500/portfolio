import { Globe } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function WordPressCTA() {
  return (
    <section className="py-16 px-5">
      <Reveal className="container-x">
        <div className="max-w-2xl mx-auto card p-10 text-center bg-white">
          <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <h2 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Need a WordPress website instead?
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
            I also build professional WordPress sites for businesses, agencies, and service providers.
          </p>
          <Button href="/#contact" variant="outline" className="mt-7">
            Request a Quote
          </Button>
        </div>
      </Reveal>
    </section>
  );
}