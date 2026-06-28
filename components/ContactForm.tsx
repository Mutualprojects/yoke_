"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      terms: formData.get("terms") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-100 rounded-sm">
      <h3 className="text-2xl font-light tracking-tight text-[#04091a] mb-8">
        Send us a <span className="font-medium text-[#F18805] italic">message</span>
      </h3>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 flex items-start gap-3 rounded-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-sm">
            Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.
          </p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 rounded-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm">
            {errorMessage || "Something went wrong. Please try again later or contact us directly."}
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#04091a]/70">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#04091a] focus:ring-0 outline-none transition-colors text-sm disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#04091a]/70">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#04091a] focus:ring-0 outline-none transition-colors text-sm disabled:opacity-50"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-[#04091a]/70">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#04091a] focus:ring-0 outline-none transition-colors text-sm disabled:opacity-50"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#04091a]/70">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#04091a] focus:ring-0 outline-none transition-colors text-sm resize-none disabled:opacity-50"
            placeholder="Tell us about your requirements, production capacity, or workflow challenges..."
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-3 pt-2">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              disabled={isSubmitting}
              className="w-4 h-4 border-neutral-300 text-[#F18805] focus:ring-[#F18805] rounded-[2px]"
            />
          </div>
          <label htmlFor="terms" className="text-xs leading-relaxed text-[#04091a]/70">
            I agree to the Terms and Conditions and understand that my data will be processed in accordance with the Privacy Policy to handle my inquiry. *
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative flex items-center justify-center gap-3 bg-[#04091a] py-4 text-white hover:bg-[#F18805] transition-all duration-300 disabled:opacity-70 disabled:hover:bg-[#04091a] mt-4"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Submit Inquiry</span>
          )}
        </button>
      </form>
    </div>
  );
}
