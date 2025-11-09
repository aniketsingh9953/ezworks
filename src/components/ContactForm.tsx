import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("⚠️ Please fill all fields.");
      setLoading(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus("⚠️ Invalid email format.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Form Submitted Successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Submission failed. Try again later.");
      }
    } catch {
      setStatus("🌐 Network error. Please try again.");
    }

    setLoading(false);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setStatus("");
  };

  return (
    <section id="contact" className="contact-section fade-in">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Please fill the form below:</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} />

        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </form>

      {status && <p className="status">{status}</p>}
    </section>
  );
};

export default ContactForm;