
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const email = "ihsrjk@gmail.com";
  const whatsapp = "916005910656";

  const whatsappMessage = encodeURIComponent(
    "Hello CHENOR, I'm interested in discussing a project."
  );

  const whatsappLink = `https://wa.me/${whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#101827] px-6 py-28 text-white lg:px-10 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-4xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            LET'S CONNECT
          </p>

          <h2 className="text-5xl font-semibold leading-[1.08] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-white/40">
              Let's make it real.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
            Whether you're building something new,
            improving an existing platform, or exploring
            a digital solution, CHENOR is ready to
            collaborate.
          </p>

          {/* Main contact buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20-%20CHENOR`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#101827] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100"
            >
              <Mail size={18} />
              Start a Project
              <ArrowUpRight size={17} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-white/10"
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>

        {/* Contact details */}
        <div className="mt-24 grid gap-10 border-t border-white/15 pt-12 md:grid-cols-3">

          {/* Email */}
          <div>
            <div className="flex items-center gap-3 text-white/40">
              <Mail size={17} />
              <span className="text-xs font-medium uppercase tracking-widest">
                Email
              </span>
            </div>

            <a
              href={`mailto:${email}`}
              className="mt-5 inline-block text-lg font-medium text-white transition-colors hover:text-blue-400"
            >
              {email}
            </a>
          </div>

          {/* WhatsApp only */}
          <div>
            <div className="flex items-center gap-3 text-white/40">
              <MessageCircle size={17} />
              <span className="text-xs font-medium uppercase tracking-widest">
                WhatsApp Only
              </span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-lg font-medium text-white transition-colors hover:text-green-400"
            >
              +91 60059 10656
            </a>

            <p className="mt-2 text-xs text-white/40">
              Messages only · No phone calls
            </p>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-3 text-white/40">
              <MapPin size={17} />
              <span className="text-xs font-medium uppercase tracking-widest">
                Based In
              </span>
            </div>

            <p className="mt-5 text-lg font-medium text-white">
              Jammu, Jammu & Kashmir
            </p>

            <p className="mt-2 text-xs text-white/40">
              India
            </p>
          </div>

        </div>

        {/* Social media links */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/15 pt-10 sm:flex-row sm:items-center">

          <p className="text-sm text-white/40">
            Follow the journey. Explore the work.
          </p>

          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/hanwant26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hanwantsingh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
