
import { Mail } from "lucide-react";
import { site, whatsappLink } from "../../config/site";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Shopify Development", tag: "Store" },
  { label: "WordPress Development", tag: "Web" },
  { label: "React Websites", tag: "Web" },
  { label: "Meta Ads", tag: "Ads" },
  { label: "TikTok Ads", tag: "Ads" },
];

const tagColors = {
  Store: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  Web: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  Ads: "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10",
};

/* ---------- Logo ---------- */

function LogoMark() {
  return (
    <img
      src="/Forge-logo.png"
      alt="Forge Vision Logo"
      className="h-50 w-50 shrink-0 object-contain transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105"
    />
  );
}

/* ---------- Footer ---------- */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/20">
      {/* Subtle black decorative background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-black blur-3xl" />

      <div className="container-x relative py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a
              href="/"
              aria-label="Forge Vision, home"
              className="group inline-flex items-center gap-3"
            >
              <LogoMark />
            </a>

            <p className="mt-5 text-sm leading-relaxed text-white">
              Web development and ads solutions helping businesses build
              websites that convert and run ads that bring the right customers.
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs text-white">
                Available for new projects
              </span>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/50 hover:text-sky-400"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 py-1.5 text-sm text-white transition-colors hover:text-emerald-400"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>

            <ul className="space-y-1">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href="/#services"
                    className="group flex items-center justify-between gap-2 py-1.5 text-sm text-white transition-colors hover:text-emerald-400"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {service.label}
                    </span>

                    <span
                      className={`hidden rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide opacity-80 transition-opacity group-hover:opacity-100 sm:inline-block ${tagColors[service.tag]}`}
                    >
                      {service.tag}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/20"
            >
              WhatsApp — Chat Now

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group mt-3 flex items-center gap-3 break-all rounded-xl border border-white/20 px-4 py-3 text-sm text-white transition-all duration-300 hover:border-white/40 hover:text-sky-400"
            >
              <Mail className="h-4 w-4 shrink-0 text-white transition-colors group-hover:text-sky-400" />
              {site.email}
            </a>

            <p className="mt-4 text-xs text-white">
              I usually reply within 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Forge Vision. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}