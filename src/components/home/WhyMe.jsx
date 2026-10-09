import { Target, Smartphone, Zap, MessageCircle, Layers, TrendingUp, Star } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const features = [
  { icon: Target, title: "Business Focused", desc: "Every decision tied to your revenue." },
  { icon: Smartphone, title: "Mobile First", desc: "Perfect on phones, tablets, and desktops." },
  { icon: Zap, title: "Fast & Clean", desc: "Clean code, optimized so customers never leave." },
  { icon: MessageCircle, title: "Fast Communication", desc: "No jargon. You always know where things stand." },
  { icon: Layers, title: "Website + Ads, One Expert", desc: "Your site and your ads handled together, so nothing gets lost." },
  { icon: TrendingUp, title: "Conversion Focused", desc: "Layouts and ads designed to turn visitors into buyers." },
];

const [business, mobile, speed, communication, allInOne, conversion] = features;

const logo = (brand, color) => `https://cdn.simpleicons.org/${brand}/${color}`;

const websiteLogos = [
  { name: "Shopify", src: logo("shopify", "7AB55C") },
  { name: "WordPress", src: logo("wordpress", "21759B") },
  { name: "React", src: logo("react", "0EA5C9") },
];

const adLogos = [
  { name: "Meta", src: logo("meta", "0081FB") },
  { name: "TikTok", src: logo("tiktok", "000000") },
];

/* ---------- small illustrations ---------- */

function PhoneVisual() {
  return (
    <div className="mt-6 flex items-end justify-center gap-3" aria-hidden="true">
      <div className="h-24 w-36 rounded-t-lg border border-b-0 border-slate-200 bg-slate-50 p-2">
        <div className="h-2 w-10 rounded bg-slate-300" />
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded bg-slate-200" />
          <div className="h-8 rounded bg-slate-200" />
          <div className="h-8 rounded bg-slate-200" />
        </div>
      </div>
      <div className="h-24 w-14 rounded-t-xl border-2 border-b-0 border-slate-300 bg-white p-1.5">
        <div className="h-1.5 w-6 rounded bg-slate-300" />
        <div className="mt-1.5 h-9 rounded bg-emerald-100" />
        <div className="mt-1.5 h-2 rounded bg-slate-200" />
      </div>
    </div>
  );
}

function SpeedVisual() {
  return (
    <div className="mt-6" aria-hidden="true">
      <div className="h-2 w-full rounded-full bg-slate-100">
        <div className="h-2 w-[92%] rounded-full bg-emerald-500" />
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-slate-400">
        <span>Request</span>
        <span>Page ready</span>
      </div>
    </div>
  );
}

function ConversionVisual() {
  const bars = [28, 38, 46, 60, 74, 96];

  return (
    <div className="mt-6 flex h-24 items-end gap-2.5" aria-hidden="true">
      {bars.map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-emerald-500" : "bg-emerald-100"}`}
        />
      ))}
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="mt-6 space-y-2 text-xs" aria-hidden="true">
      <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2 text-slate-700">
        Homepage draft is ready for review.
      </div>
      <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm bg-slate-900 px-3 py-2 text-white">
        Looks great, go ahead.
      </div>
    </div>
  );
}

function LogoChip({ name, src }) {
  return (
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
      <img
        src={src}
        alt={name}
        title={name}
        className="h-6 w-6"
        loading="lazy"
      />
    </span>
  );
}

function StackVisual() {
  return (
    <div className="mt-6 flex min-w-0 items-end gap-5">
      <div className="min-w-0">
        <div className="flex flex-nowrap gap-2">
          {websiteLogos.map((l) => (
            <LogoChip key={l.name} {...l} />
          ))}
        </div>
        <p className="mt-2 text-[11px] text-slate-400">Websites</p>
      </div>

      <div className="min-w-0">
        <div className="flex flex-nowrap gap-2">
          {adLogos.map((l) => (
            <LogoChip key={l.name} {...l} />
          ))}
        </div>
        <p className="mt-2 text-[11px] text-slate-400">Ads</p>
      </div>
    </div>
  );
}

/* ---------- card shell ---------- */

function Card({ item, children }) {
  return (
    <div className="flex h-[320px] flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
        <item.icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
        {item.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-500">
        {item.desc}
      </p>
      <div className="mt-auto">{children}</div>
    </div>
  );
}

export default function WhyMe() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          align="center"
          title="Why businesses work with me"
          subtitle="I focus on results, not just design."
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Feature image */}
          <div className="sm:col-span-2 lg:row-span-2">
            <Reveal>
              <div className="relative h-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:h-[420px] lg:h-[660px]">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fm=webp&fit=crop&w=1200&q=75"
                  alt="Why work with me"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-sm">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-slate-900">
                    5-Star Rated
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <business.icon className="h-6 w-6 text-emerald-300" />
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {business.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-slate-200">
                    {business.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={80}>
              <Card item={mobile}>
                <PhoneVisual />
              </Card>
            </Reveal>
          </div>

          <div>
            <Reveal delay={120}>
              <Card item={speed}>
                <SpeedVisual />
              </Card>
            </Reveal>
          </div>

          <div className="sm:col-span-2">
            <Reveal delay={160}>
              <Card item={conversion}>
                <ConversionVisual />
              </Card>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={200}>
              <Card item={allInOne}>
                <StackVisual />
              </Card>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={240}>
              <Card item={communication}>
                <ChatVisual />
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}