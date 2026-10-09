import { services } from "../../data/services";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

// Photos: swap any link with your own image.
const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fm=webp&fit=crop&w=1000&q=75`;
// Real brand logos from the Simple Icons CDN: https://cdn.simpleicons.org/<brand>/<hex color>
const logo = (brand, color) => `https://cdn.simpleicons.org/${brand}/${color}`;

const websites = [
  {
    name: "Shopify",
    logo: logo("shopify", "7AB55C"),
    headline: "Online stores that sell",
    points: ["Store setup & theme design", "Products, payments & shipping", "Speed & SEO ready"],
    image: photo("photo-1556742049-0cfed4f6a45d"),
  },
  {
    name: "WordPress",
    logo: logo("wordpress", "21759B"),
    headline: "Websites you can manage",
    points: ["Custom theme design", "Simple editing for you", "Fast, secure & scalable"],
    image: photo("photo-1460925895917-afdab827c52f"),
  },
  {
    name: "React",
    logo: logo("react", "0EA5C9"),
    headline: "Fast, modern web apps",
    points: ["Custom UI & components", "Smooth, quick performance", "Clean, scalable code"],
    image: photo("photo-1555066931-4365d14bab8c"),
  },
];

const ads = [
  {
    name: "Meta Ads",
    logo: logo("meta", "0081FB"),
    headline: "Facebook & Instagram ads that bring buyers",
    points: ["Audience targeting", "Pixel & conversion tracking", "Ongoing optimization"],
    image: photo("photo-1611162617213-7d7a39e9b1d7"),
  },
  {
    name: "TikTok Ads",
    logo: logo("tiktok", "000000"),
    headline: "Short-video ads that get attention",
    points: ["Campaign setup", "Video creative direction", "Tracking & optimization"],
    image: photo("photo-1611605698335-8b1569810432"),
  },
];

function LogoBadge({ src, name }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
      <img src={src} alt={`${name} logo`} className="h-6 w-6" loading="lazy" />
    </span>
  );
}

function hideBroken(e) {
  e.currentTarget.style.display = "none";
}

function GroupTitle({ children }) {
  return (
    <div className="flex items-center gap-4">
      <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">{children}</h3>
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          title="Websites that sell, ads that bring buyers"
          subtitle="Build your store, then send the right customers to it."
        />

        {/* Websites */}
        <div className="mt-14">
          <Reveal>
            <GroupTitle>Websites</GroupTitle>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {websites.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-200">
                    <img
                      src={s.image}
                      alt={`${s.name} development`}
                      loading="lazy"
                      onError={hideBroken}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl bg-white/90 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white ring-1 ring-slate-100">
                        <img src={s.logo} alt={`${s.name} logo`} className="h-5 w-5" loading="lazy" />
                      </span>
                      <span className="text-sm font-semibold text-slate-900">{s.name}</span>
                    </div>

                    <h4 className="absolute inset-x-5 bottom-5 font-display text-2xl font-semibold leading-tight tracking-tight text-white">
                      {s.headline}
                    </h4>
                  </div>

                  <ul className="mt-5 space-y-2 px-1">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Advertising */}
        <div className="mt-20">
          <Reveal>
            <GroupTitle>Advertising</GroupTitle>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
            {ads.map((a, i) => (
              <Reveal key={a.name} delay={i * 100}>
                <article className="group relative h-[340px] overflow-hidden rounded-[1.75rem] bg-slate-800 sm:h-[380px]">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    onError={hideBroken}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/45 to-slate-900/10" />

                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <LogoBadge src={a.logo} name={a.name} />
                    <span className="text-sm font-semibold text-white">{a.name}</span>
                  </div>

                  <div className="absolute inset-x-6 bottom-6">
                    <h4 className="font-display text-2xl font-semibold leading-tight tracking-tight text-white">
                      {a.headline}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {a.points.map((pt) => (
                        <span
                          key={pt}
                          className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs text-white backdrop-blur"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Everything else + CTA (replaces the WordPress CTA section) */}
        <Reveal delay={100}>
          <div className="mt-20 rounded-[1.75rem] bg-slate-50 px-6 py-12 text-center sm:px-12">
            <p className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">
              Plus everything else your business needs
            </p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
              {services.map((s) => (
                <span
                  key={s.title}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                  {s.title}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-md text-sm text-slate-500">
              Not sure what you need? Tell me about your business and I'll suggest the right setup.
            </p>
            <Button href="/#contact" className="mt-5">
              Request a Quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
