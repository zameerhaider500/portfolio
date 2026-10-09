
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const USE_IMAGE_LOGO = false;
const IMAGE_LOGO_SRC = "/Forge-logo.png";

const sectionIds = links.map((l) => l.href.split("#")[1]);

/* ---------- Logo ---------- */

function LogoMark() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="h-9 w-9 shrink-0 transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="10" fill="#111111" />
      <rect
        x="0.5"
        y="0.5"
        width="35"
        height="35"
        rx="9.5"
        fill="none"
        stroke="#333333"
      />
      <path
        d="M11 12h14L11 24h14"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27.5" cy="9.5" r="2.4" fill="#34d399" />
    </svg>
  );
}

function Logo({ onClick }) {
  return (
    <a
      href="/"
      onClick={onClick}
      className="group flex items-center gap-2.5"
      aria-label="Forge Vision, home"
    >
      <img
        src="/Forge-logo.png"
        alt="Forge Vision logo"
        className="h-[200px] w-[200px] shrink-0 object-contain"
      />
    </a>
  );
}

/* ---------- Navbar ---------- */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Update navbar appearance on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the active section while scrolling.
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let currentSection = "";

      for (const el of els) {
        const rect = el.getBoundingClientRect();

        if (rect.top <= marker) {
          currentSection = el.id;
        } else {
          break;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = els[els.length - 1].id;
      }

      setActive(currentSection);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);
  const floating = scrolled || open;

  // FIX: Unlock page scrolling, close the menu,
  // and scroll directly to the requested section.
  const handleSectionClick = (e, href) => {
    e.preventDefault();

    const hash = href.split("#")[1];
    const isHomePage =
      window.location.pathname === "/" ||
      window.location.pathname === "";

    close();

    // Unlock scrolling immediately instead of waiting
    // for the menu's state effect to run.
    document.body.style.overflow = "";

    if (isHomePage) {
      const target = document.getElementById(hash);

      if (!target) {
        console.error(`Navigation target not found: #${hash}`);
        return;
      }

      window.history.pushState(null, "", `/#${hash}`);

      // Calculate the exact destination, accounting
      // for the fixed navbar at the top.
      const navbarOffset = 88;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });
      });
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        floating ? "px-3 pt-3 sm:px-5" : "px-0 pt-0"
      }`}
    >
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 overflow-y-auto bg-black pt-24 transition-all duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-6xl flex-col px-5 pb-8 pt-2">
          <div className="flex-1">
            {links.map((l, i) => {
              const id = l.href.split("#")[1];
              const isActive = active === id;

              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleSectionClick(e, l.href)}
                  style={{
                    transitionDelay: open
                      ? `${80 + i * 55}ms`
                      : "0ms",
                  }}
                  className={`flex items-center justify-between border-b border-white/20 py-4 font-display text-2xl font-semibold tracking-tight transition-all duration-500 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  } ${
                    isActive
                      ? "text-emerald-400"
                      : "text-white active:text-emerald-400"
                  }`}
                >
                  {l.label}

                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive
                        ? "bg-emerald-400"
                        : "bg-white/30"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div
            style={{
              transitionDelay: open ? "400ms" : "0ms",
            }}
            className={`mt-8 transition-all duration-500 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <a
              href="/#contact"
              onClick={(e) =>
                handleSectionClick(e, "/#contact")
              }
              className="btn-primary w-full text-base"
            >
              Start Your Project
            </a>

            <p className="mt-3 text-center text-xs text-white">
              I usually reply within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Navbar Bar */}
      <div
        className={`relative mx-auto transition-all duration-500 ease-out ${
          floating
            ? "max-w-5xl rounded-2xl border border-white/20 bg-black/90 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:rounded-full"
            : "max-w-full border-b border-white/10 bg-black/90 backdrop-blur-md"
        }`}
      >
        <nav
          className={`relative mx-auto flex h-16 items-center justify-between transition-all duration-500 ${
            floating ? "px-4 sm:px-6" : "max-w-6xl px-5"
          }`}
        >
          <Logo onClick={close} />

          {/* Desktop Links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {links.map((l) => {
              const id = l.href.split("#")[1];
              const isActive = active === id;

              return (
                <a
                  key={l.label}
                  href={l.href}
                  aria-current={
                    isActive ? "true" : undefined
                  }
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}

                  <span
                    className={`absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-emerald-400 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="btn-primary hidden !px-5 !py-2 text-sm lg:inline-flex"
            >
              Start Your Project
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={
                open ? "Close menu" : "Open menu"
              }
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu
                className={`absolute h-6 w-6 transition-all duration-300 ${
                  open
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />

              <X
                className={`absolute h-6 w-6 transition-all duration-300 ${
                  open
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}