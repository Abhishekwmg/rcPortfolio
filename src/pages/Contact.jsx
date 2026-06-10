import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, LoaderCircle, CheckCircle2 } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,

        import.meta.env.VITE_EMAIL_TEMPLATE_ID,

        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },

        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-(--bg-primary) px-8 py-24 text-(--text-primary) lg:px-20">
      <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[420px_1fr]">
        {/* Left */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-(--accent-primary)">
            //5 Contact
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight lg:text-6xl">
            Let's Build
            <span className="bg-linear-to-r from-(--accent-primary) via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Something.
            </span>
          </h1>

          <p className="mb-12 text-lg leading-loose text-(--text-secondary)">
            Have a project, collaboration idea, or opportunity? Send a message —
            I'll get back to you soon.
          </p>

          <div className="rounded-3xl border border-(--text-primary)/20 bg-(--bg-primary)/70 p-8">
            <Mail className="mb-6 text-(--accent-primary)" size={32} />

            <h3 className="mb-4 text-xl font-semibold">Direct Contact</h3>

            <p className="leading-relaxed text-(--text-secondary)">
              Prefer email?
            </p>

            <a
              href="mailto:your@email.com"
              className="mt-4 inline-block text-(--accent-primary)"
            >
              ak89471@gmail.com
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl border border-(--text-primary)/20 bg-(--bg-primary)/70 p-10 backdrop-blur-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <div>
            <label className="mb-3 block text-sm text-(--text-secondary)">
              Message
            </label>

            <textarea
              required
              rows={7}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-(--text-primary)/20 bg-(--bg-primary) px-5 py-4 text-(--text-primary) outline-none transition-all focus:border-(--accent-primary)/30"
            />
          </div>

          <button
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-(--accent-primary) py-4 font-semibold text-(--bg-primary) transition-all hover:opacity-90 disabled:opacity-60"
          >
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" size={18} />
                Sending...
              </>
            ) : success ? (
              <>
                <CheckCircle2 size={18} />
                Message Sent
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm text-(--text-secondary)">{label}</label>

      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-(--text-primary)/20 bg-(--bg-primary) p-4 text-(--text-secondary) outline-none transition-all focus:border-(--accent-primary)/30"
      />
    </div>
  );
}

export default Contact;
