import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "5★", label: "Client Rating" },
  { value: "3–14 days", label: "Typical Delivery" },
  { value: "100%", label: "Mobile Responsive" },
];

const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fm=webp&fit=crop&w=800&q=75`;

const logo = (brand, color) =>
  `https://cdn.simpleicons.org/${brand}/${color}`;

const images = [
  {
    src: photo("photo-1523381210434-271e8be1f52b"),
    alt: "Online store products",
    label: "Shopify stores",
    logos: [logo("shopify", "7AB55C")],
  },
  {
    src: photo("photo-1499951360447-b19be8fe80f5"),
    alt: "Designing a business website",
    label: "WordPress sites",
    logos: [logo("wordpress", "21759B")],
  },
  {
    src: photo("photo-1461749280684-dccba630e2f6"),
    alt: "Custom web development",
    label: "React web apps",
    logos: [logo("react", "0EA5C9")],
  },
  {
    src: photo("photo-1551288049-bebda4e38f71"),
    alt: "Ad performance dashboard",
    label: "Meta & TikTok ads",
    logos: [logo("meta", "0081FB"), logo("tiktok", "000000")],
  },
];

const platforms = [
  { name: "Shopify", src: logo("shopify", "7AB55C") },
  { name: "WordPress", src: logo("wordpress", "21759B") },
  { name: "React", src: logo("react", "0EA5C9") },
  { name: "Meta", src: logo("meta", "0081FB") },
  { name: "TikTok", src: logo("tiktok", "000000") },
];

function hideBroken(e) {
  e.currentTarget.style.display = "none";
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 1750);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-slate-200 shadow-xl shadow-slate-900/10 sm:h-[460px] lg:h-[min(65vh,680px)]">
      {images.map((img, i) => (
        <div
          key={img.label}
          aria-hidden={i !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading={i === 0 ? "eager" : "lazy"}
            onError={hideBroken}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-4 backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-4">
            <span className="flex shrink-0 -space-x-1.5">
              {img.logos.map((l) => (
                <span
                  key={l}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 sm:h-11 sm:w-11"
                >
                  <img
                    src={l}
                    alt=""
                    className="h-5 w-5"
                    loading="lazy"
                  />
                </span>
              ))}
            </span>

            <span className="text-base font-semibold text-slate-900 sm:text-lg">
              {img.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.6rem]">
                Websites that sell.
                <span className="block text-black">
                  Ads that bring buyers.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Forge Vision - builds modern websites and powerful eCommerce experiences that help businesses stand out in the digital world.
                <br />
                We combine creative design with smart technology to turn your ideas into meaningful digital solutions.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button href="/#contact">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>

                <Button href="/#projects" variant="outline">
                  View My Work
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="text-sm text-slate-500">I work with</span>

                <div className="flex items-center gap-2.5">
                  {platforms.map((p) => (
                    <span
                      key={p.name}
                      title={p.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm"
                    >
                      <img
                        src={p.src}
                        alt={p.name}
                        className="h-5 w-5"
                        loading="lazy"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Large fading image carousel */}
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-6">
            <Reveal delay={250}>
              <HeroCarousel />
            </Reveal>
          </div>
        </div>

        {/* Facts strip */}
        <Reveal delay={400}>
          <dl className="mt-20 grid grid-cols-2 border-t border-slate-200 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 pr-6 ${
                  i % 2 === 1 ? "border-l border-slate-200 pl-6" : ""
                } ${
                  i > 0 ? "lg:border-l lg:border-slate-200 lg:pl-6" : ""
                }`}
              >
                <dt className="text-sm text-slate-500">{s.label}</dt>

                <dd className="mt-1 font-display text-2xl font-semibold text-black sm:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

