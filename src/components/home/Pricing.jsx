import { Check, Clock } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fm=webp&fit=crop&w=900&q=75`;
const logo = (brand, color) => `https://cdn.simpleicons.org/${brand}/${color}`;

// ---- EDIT YOUR PRICES, FEATURES AND DELIVERY TIMES HERE ----
// These prices are placeholders. Replace them with your real rates.
const plans = [
  {
    name: "Shopify Store",
    tagline: "A complete store, ready to sell.",
    price: "$350",
    unit: "",
    delivery: "5–10 days delivery",
    cta: "Start a Shopify Store",
    featured: true,
    logos: [logo("shopify", "7AB55C")],
    image: photo("photo-1556742049-0cfed4f6a45d"),
    features: [
      "Custom theme setup & design",
      "Product & collection setup",
      "Payments & shipping setup",
      "Mobile-first, speed optimized",
      "Basic SEO setup",
    ],
  },
  {
    name: "WordPress Website",
    tagline: "A professional site you can edit yourself.",
    price: "$250",
    unit: "",
    delivery: "5–10 days delivery",
    cta: "Get a WordPress Site",
    logos: [logo("wordpress", "21759B")],
    image: photo("photo-1460925895917-afdab827c52f"),
    features: [
      "Custom design, up to 5 pages",
      "Easy-to-edit content",
      "Contact form & basic SEO",
      "Fast, secure setup",
      "Mobile responsive",
    ],
  },
  {
    name: "React Website",
    tagline: "A fast, modern site built from scratch.",
    price: "$600",
    unit: "",
    delivery: "10–21 days delivery",
    cta: "Build with React",
    logos: [logo("react", "0EA5C9")],
    image: photo("photo-1555066931-4365d14bab8c"),
    features: [
      "Fully custom UI design",
      "Reusable, clean components",
      "Smooth animations & speed",
      "API & integrations ready",
      "Deployed and live",
    ],
  },
  {
    name: "Meta & TikTok Ads",
    tagline: "Ongoing ads that bring in customers.",
    price: "$200",
    unit: "/month",
    delivery: "Ongoing monthly management",
    cta: "Start Running Ads",
    logos: [logo("meta", "0081FB"), logo("tiktok", "000000")],
    image: photo("photo-1611162617213-7d7a39e9b1d7"),
    features: [
      "Campaign setup & targeting",
      "Pixel & conversion tracking",
      "Ad creative direction",
      "Weekly optimization",
      "Monthly performance report",
    ],
  },
];

function hideBroken(e) {
  e.currentTarget.style.display = "none";
}

export default function Pricing() {
  return (
    <section id="pricing" className="section section-glow">
      <div className="container-x">
        <SectionHeading
          title="Packages"
          subtitle="Clear starting prices for every service. Bigger projects get a custom quote."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <div
                className={`group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-500 ${
                  plan.featured
                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/25 lg:-my-3"
                    : "border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/70"
                }`}
              >
                {/* Photo header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-300">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    loading="lazy"
                    onError={hideBroken}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />

                  <div className="absolute left-4 top-4 flex -space-x-2">
                    {plan.logos.map((src) => (
                      <span
                        key={src}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-2 ring-white/60"
                      >
                        <img src={src} alt="" className="h-5 w-5" loading="lazy" />
                      </span>
                    ))}
                  </div>

                  {plan.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  )}

                  <div className="absolute inset-x-5 bottom-4 text-white">
                    <span className="text-xs text-white/80">Starting from</span>
                    <div className="font-display text-3xl font-bold leading-tight">
                      {plan.price}
                      {plan.unit && <span className="text-base font-medium text-white/80">{plan.unit}</span>}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className={`font-display text-lg font-semibold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 text-sm ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.tagline}
                  </p>

                  <ul className="mb-6 mt-5 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-sm ${
                          plan.featured ? "text-slate-200" : "text-slate-600"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.featured ? "bg-emerald-400/20 text-emerald-300" : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mb-5 flex items-center gap-1.5 border-t pt-4 text-xs ${
                      plan.featured ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5" /> {plan.delivery}
                  </div>

                  <Button
                    href="/#contact"
                    variant={plan.featured ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-slate-500">
          Need a bundle, like a store plus ads? Tell me what you're planning and I'll put together a custom quote.
        </p>
      </div>
    </section>
  );
}
