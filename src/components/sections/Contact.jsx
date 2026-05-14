import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { profile } from "../../data/site";
import { sendContact } from "../../utils/api";
import SectionHeading from "../ui/SectionHeading";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    try {
      await sendContact(form);
      setSuccess(true);
      setForm(initial);
    } catch {
      setErrors({ form: "Could not send. Ensure the API server is running or try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// POST /contact"
          title="Contact"
          subtitle="Building something interesting? Reach out — I typically reply within a day."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="glass space-y-4 rounded-2xl p-6 lg:col-span-2">
            <p className="font-mono text-xs text-muted">Direct</p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-text hover:text-accent">
              <HiMail className="h-5 w-5 text-accent" />
              {profile.email}
            </a>
            <a href={`tel:+91${profile.phone}`} className="flex items-center gap-3 text-sm text-text hover:text-accent">
              <HiPhone className="h-5 w-5 text-accent" />
              +91 {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-text hover:text-accent"
            >
              <FaGithub className="h-5 w-5 text-accent" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-text hover:text-accent"
            >
              <FaLinkedin className="h-5 w-5 text-accent" />
              LinkedIn
            </a>
          </div>

          <motion.form
            onSubmit={onSubmit}
            className="glass space-y-4 rounded-2xl p-6 lg:col-span-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {errors.form && <p className="text-sm text-red-400">{errors.form}</p>}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
            </div>
            <Field
              label="Subject"
              value={form.subject}
              error={errors.subject}
              onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
            />
            <div>
              <label className="block font-mono text-xs text-muted">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm text-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent-soft"
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full rounded-xl bg-accent py-3 font-semibold text-onaccent shadow-glow-sm transition hover:brightness-110 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send message"}
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-mono text-sm text-terminal"
              >
                Message sent successfully.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", value, error, onChange }) {
  return (
    <div>
      <label className="block font-mono text-xs text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm text-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent-soft"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
