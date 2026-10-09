
import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { site, whatsappLink } from "../config/site";

const initial = {
  name: "",
  email: "",
  pkg: "",
  message: "",
};

const logo = (brand, color) =>
  `https://cdn.simpleicons.org/${brand}/${color}`;

// Keep these names in sync with your Pricing packages.
const options = [
  { label: "Shopify Store", logos: [logo("shopify", "7AB55C")] },
  { label: "WordPress Website", logos: [logo("wordpress", "21759B")] },
  { label: "React Website", logos: [logo("react", "0EA5C9")] },
  {
    label: "Meta & TikTok Ads",
    logos: [logo("meta", "0081FB"), logo("tiktok", "000000")],
  },
  { label: "Something custom", logos: [] },
];

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Click a service to select it, or click again to clear it.
  const choose = (label) => {
    setForm((prev) => ({
      ...prev,
      pkg: prev.pkg === label ? "" : label,
    }));
  };

  const buildWhatsAppText = () =>
    `Hi Zameer! 👋\n\n` +
    `*Name:* ${form.name}\n` +
    `*Email:* ${form.email}\n` +
    `*Service:* ${form.pkg || "Not sure yet"}\n\n` +
    `*Message:*\n${form.message}`;

  const sendWhatsApp = (e) => {
    const formEl = e.currentTarget.form;

    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    window.open(
      `${whatsappLink}?text=${encodeURIComponent(buildWhatsAppText())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `New Project Inquiry — ${form.name}`,
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          package: form.pkg || "Not specified",
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message || `Request failed (code ${res.status})`
        );
      }

      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setErrorMsg(err.message || "Network error");
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="card bg-white p-6 sm:p-10 space-y-6"
    >
      {/* Honeypot field for spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {status === "sent" && (
        <div
          role="status"
          className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-emerald-600 text-sm"
        >
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          Message sent! I'll get back to you within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-red-500 text-sm"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" />
            Something went wrong. Please reach me on WhatsApp instead.
          </div>

          {errorMsg && (
            <p className="mt-2 text-xs text-red-400 break-words">
              <strong>Debug:</strong> {errorMsg}
            </p>
          )}
        </div>
      )}

      {/* Service picker */}
      <fieldset>
        <legend className="text-sm font-medium text-slate-700">
          What do you need help with?
        </legend>

        <p className="mt-0.5 text-xs text-slate-500">
          Optional. Pick one, or skip if you're not sure yet.
        </p>

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {options.map((o) => {
            const selected = form.pkg === o.label;

            return (
              <button
                key={o.label}
                type="button"
                aria-pressed={selected}
                onClick={() => choose(o.label)}
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-3 text-left text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selected
                    ? "border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/15"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {o.logos.length > 0 && (
                  <span className="flex shrink-0 -space-x-1.5">
                    {o.logos.map((src) => (
                      <span
                        key={src}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200"
                      >
                        <img
                          src={src}
                          alt=""
                          className="h-4 w-4"
                          loading="lazy"
                        />
                      </span>
                    ))}
                  </span>
                )}

                <span className="leading-tight">{o.label}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Contact details */}
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Your name
          </span>
          <input
            required
            name="name"
            value={form.name}
            onChange={set}
            placeholder="Jane Smith"
            autoComplete="name"
            className="field mt-1.5"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Your email
          </span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={set}
            placeholder="jane@company.com"
            autoComplete="email"
            className="field mt-1.5"
          />
        </label>
      </div>

      {/* Project message */}
      <label className="block">
        <span className="text-sm font-medium text-slate-700">
          About your project
        </span>

        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={set}
          placeholder="What is your business, what do you need, and what would you like to achieve?"
          className="field resize-none mt-1.5"
        />
      </label>

      {/* Submission buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="button"
          onClick={sendWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fb857] text-white font-semibold px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          Send via WhatsApp
        </button>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary flex-1 disabled:opacity-60 disabled:pointer-events-none"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              Send via Email
            </>
          )}
        </button>
      </div>

      <p className="text-center text-xs text-slate-500">
        I usually reply within 24 hours.
      </p>
    </form>
  );
}