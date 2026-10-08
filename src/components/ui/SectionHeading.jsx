import Reveal from "./Reveal";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-12 sm:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-slate-600 text-base sm:text-lg leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent ${
          centered ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}