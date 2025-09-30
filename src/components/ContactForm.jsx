import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";

export default function ContactForm() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  const colors = ["#1A2A80", "#3B38A0", "#7A85C1", "#B2B0E8"];
  const primary = colors[0];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      console.log("Form Submitted ✅", { ...formData, phone: fullPhone });
      alert(`Form submitted successfully!\nPhone: ${fullPhone}`);
      setFormData({
        name: "",
        company: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  const inputClass =
    "p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7A85C1] " +
    "focus:outline-none transition-all shadow-sm w-full text-base sm:text-md";

  return (
    <motion.form
      {...fadeUp(0.2)}
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl 
                 transition-all border border-gray-200 max-w-4xl mx-auto w-full"
    >
      <div className="grid grid-cols-1 gap-6">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Country Code + Phone */}
        <div className="flex gap-2">
          {/* Country Code */}
          <div className="relative w-40">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="appearance-none p-4 border border-gray-300 rounded-xl 
                         focus:ring-2 focus:ring-[#B2B0E8] focus:outline-none 
                         transition-all shadow-sm w-full pr-8 bg-white text-base sm:text-lg"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <FaCaretDown className="text-gray-500 w-4 h-4" />
            </div>
          </div>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Message */}
      <div className="mt-6">
        <textarea
          name="message"
          placeholder="Message / Project details"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          rows="5"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(26,42,128,0.4)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="px-8 py-3 text-white font-semibold rounded-xl shadow-lg 
                     transition-all disabled:opacity-50 disabled:cursor-not-allowed 
                     text-base sm:text-lg"
          style={{ background: primary }}
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
}
