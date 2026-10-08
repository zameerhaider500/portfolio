import { useState } from "react";
import { MessageCircle, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { site, whatsappLink } from "../config/site";

const initial = { name: "", email: "", pkg: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const buildWhatsAppText = () =>
    `Hi Zameer! 👋\n\n` +
    `*Name:* ${form.name}\n` +
    `*Email:* ${form.email}\n` +
    `*Package:* ${form.pkg || "Not sure yet"}\n\n` +
    `*Message:*\n${form.message}`;

  const sendWhatsApp = (e) => {
    const formEl = e.currentTarget.form;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }
    window.open(`${whatsappLink}?text=${encodeURIComponent(buildWhatsAppText())}`, "_blank");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `New Project Inquiry — ${form.name}`,
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          package: form.pkg,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={sendEmail} className="card bg-white p-6 sm:p-10 space-y-5">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

      {status === "sent" && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-emerald-600 text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          Message sent! I'll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-red-500 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          Something went wrong. Please reach me on WhatsApp instead.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <input required name="name" value={form.name} onChange={set} placeholder="Your name" className="field" />
        <input required type="email" name="email" value={form.email} onChange={set} placeholder="Your email" className="field" />
      </div>

      <select name="pkg" value={form.pkg} onChange={set} className="field">
        <option value="">Which package are you interested in? (optional)</option>
        <option>Starter — $79.99</option>
        <option>Growth — $119</option>
        <option>Premium — $199</option>
        <option>Something custom</option>
      </select>

      <textarea
        required
        name="message"
        rows={5}
        value={form.message}
        onChange={set}
        placeholder="Tell me about your project — what do you sell, what do you need?"
        className="field resize-none"
      />

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="button"
          onClick={sendWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fb857] text-white font-semibold px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" /> Send via WhatsApp
        </button>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary flex-1 disabled:opacity-60 disabled:pointer-events-none"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" /> Send via Email
            </>
          )}
        </button>
      </div>
    </form>
  );
}