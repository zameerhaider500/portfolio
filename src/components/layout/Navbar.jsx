import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_12px_rgba(15,23,42,0.06)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="container-x relative flex items-center justify-between h-16">
        {/* Logo — `invert` makes a white logo visible on the white navbar */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Zameer Haider logo" className="h-9 w-auto rounded-lg invert" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="/#contact" className="hidden md:inline-flex btn-primary !px-5 !py-2 text-sm">
            Start Your Project
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700 p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-slate-700 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full mt-2 text-sm">
            Start Your Project
          </a>
        </div>
      )}
    </header>
  );
}