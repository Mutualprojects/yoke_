import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Yoke Conveyors",
  description: "Get in touch with Yoke Conveyors for your industrial automation and material handling needs.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-[#F18805] selection:text-white">
      <Header />

      <div className="flex-1">
        {/* Minimal Hero Section */}
        <section className="relative pt-32 pb-16 px-8 md:pt-48 md:pb-24 lg:px-16 overflow-hidden bg-white border-b border-neutral-100">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#04091a]" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#04091a]/80">
                Get In Touch
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light tracking-tight text-[#04091a] leading-[1.1] max-w-[800px]">
              Let&apos;s build your next <br className="hidden md:block" />
              <span className="font-medium italic text-[#F18805]">automation</span> system.
            </h1>
            <p className="mt-6 text-[1.1rem] font-light leading-[1.7] text-[#04091a]/70 max-w-[600px]">
              Our engineering team is ready to analyze your workflow challenges and design the perfect material handling solution for your facility.
            </p>
          </div>
          {/* Decorative background element */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none" />
        </section>

        {/* Contact Content Area */}
        <section className="px-8 py-20 lg:px-16 lg:py-28 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Details (Left Column) */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-light text-[#04091a] mb-6 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-sm font-light text-[#04091a]/70 leading-relaxed mb-8">
                  Fill out the form to request a consultation, or reach out to us directly via phone or email. We typically respond within one business day.
                </p>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-white border border-neutral-200 shadow-sm text-[#04091a]">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#04091a]/50 mb-1">Call Us</h4>
                    <a href="tel:+91975228999" className="text-lg font-medium text-[#04091a] hover:text-[#F18805] transition-colors">
                      +91 97522 8999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-white border border-neutral-200 shadow-sm text-[#04091a]">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#04091a]/50 mb-1">Email Us</h4>
                    <a href="mailto:yokeconveyors@gmail.com" className="text-lg font-medium text-[#04091a] hover:text-[#F18805] transition-colors">
                      yokeconveyors@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-white border border-neutral-200 shadow-sm text-[#04091a]">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#04091a]/50 mb-1">Headquarters</h4>
                    <p className="text-lg font-medium text-[#04091a] leading-relaxed">
                      Hyderabad, Telangana,
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-8 border-t border-neutral-200">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#04091a]/50 mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm font-light text-[#04091a]/80">
                  <div className="flex justify-between max-w-[300px]">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-[300px]">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-[300px] text-[#04091a]/50">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
