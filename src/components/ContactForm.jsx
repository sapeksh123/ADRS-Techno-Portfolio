import { useState } from "react";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import { fadeUp } from "../utils/motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits.";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const nextData = { ...formData, [e.target.name]: e.target.value };
    setFormData(nextData);

    if (Object.keys(errors).length > 0) {
      const nextErrors = { ...errors };
      delete nextErrors[e.target.name];
      setErrors(nextErrors);
    }

    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      console.log("Form Submitted ✅", { ...formData, phone: fullPhone });

      setStatus({
        type: "success",
        message: `Thanks! We have received your request. Our team will contact you on ${fullPhone}.`,
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
      setErrors({});
    } else {
      setStatus({
        type: "error",
        message: "Please review the highlighted fields before submitting.",
      });
    }
  };

  const inputClass =
    "focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#3554b7] focus:ring-2 focus:ring-[#3554b7]/20 focus:outline-none md:text-base";

  const errClass = "mt-1.5 text-xs font-medium text-red-600";

  return (
    <motion.form
      {...fadeUp(0.2)}
      onSubmit={handleSubmit}
      className="surface-card mx-auto w-full max-w-4xl rounded-2xl p-6 sm:p-8 md:p-10"
      noValidate
    >
      <div className="mb-5">
        <h3 className="font-[Sora] text-xl font-semibold text-[#132f8b] md:text-2xl">Send a Message</h3>
        <p className="mt-1 text-sm text-slate-600">Share your requirements and we will get back with a tailored proposal.</p>
      </div>

      {status.message && (
        <motion.p
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-4 rounded-lg border px-3 py-2 text-sm ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </motion.p>
      )}

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={errClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className={errClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <div className="relative w-40">
            <label htmlFor="countryCode" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Country
            </label>
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="focus-ring w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-8 text-sm text-slate-800 shadow-sm transition focus:border-[#3554b7] focus:ring-2 focus:ring-[#3554b7]/20 focus:outline-none md:text-base"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
            </select>
            <div className="pointer-events-none absolute right-2 top-[2.65rem] flex items-center">
              <FaCaretDown className="text-gray-500 w-4 h-4" />
            </div>
          </div>

          <div className="flex-1">
            <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
          </div>
        </div>
        {errors.phone && (
          <p id="phone-error" role="alert" className={errClass}>
            {errors.phone}
          </p>
        )}

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message / Project details"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            rows="5"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" role="alert" className={errClass}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 12px 24px rgba(19,47,139,0.28)" }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="focus-ring btn-primary px-8 py-3 text-base"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
}
