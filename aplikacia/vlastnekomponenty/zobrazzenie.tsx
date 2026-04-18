"use client"
import { motion } from "framer-motion";

const navLinks = [
  { label: "Domov", href: "/" },
  { label: "Rodinný dom na mieru", href: "/", underline: true },
  { label: "Katalógové projekty", href: "/" },
  { label: "Interiérový dizajn", href: "/" },
  { label: "Výstavba", href: "/" },
  { label: "Pre firmy", href: "/" },
  { label: "O nás", href: "/" },
  { label: "Kontakt", href: "/" },
];

export default function FooterMain() {
  return (
    <footer className="bg-[var(--cierna)] text-white">
      {/* Upper section */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Navigation links */}
            <nav className="md:col-span-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <div
              
                      className={`text-xl md:text-2xl font-body font-medium text-white/90 hover:text-white transition-colors ${
                        link.underline ? "underline underline-offset-4" : ""
                      }`}
                    >
                      {link.label}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact info */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Social */}
                <div>
                  <p className="text-[11px] font-body uppercase tracking-widest text-white/40 mb-3">
                    Sledujte nás na
                  </p>
                  <p className="text-sm font-body text-white/80">
                    <a href="#" className="underline underline-offset-2 hover:text-white transition-colors">
                      Facebooku
                    </a>
                    {" "}a{" "}
                    <a href="#" className="underline underline-offset-2 hover:text-white transition-colors">
                      Instagrame
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="sm:col-start-3">
                  <p className="text-[11px] font-body uppercase tracking-widest text-white/40 mb-3">
                    Napíšte nám na
                  </p>
                  <a
                    href="mailto:info@domyodarchitektov.sk"
                    className="text-sm font-body text-white/80 hover:text-white transition-colors"
                  >
                    info@domyodarchitektov.sk
                  </a>
                </div>
              </div>

              {/* Addresses row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                <div>
                  <p className="text-[11px] font-body uppercase tracking-widest text-white/40 mb-3">
                    Adresa (SK)
                  </p>
                  <p className="text-sm font-body text-white/80 leading-relaxed">
                    Estónska 2<br />
                    (8. poschodie)<br />
                    821 06 Bratislava
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-body text-white/80 underline underline-offset-2 mt-2 hover:text-white transition-colors"
                  >
                    Navigovať ▼
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-body uppercase tracking-widest text-white/40 mb-3">
                    Adresa (CZ)
                  </p>
                  <p className="text-sm font-body text-white/60 italic">Coming soon.</p>
                </div>

                <div>
                  <p className="text-[11px] font-body uppercase tracking-widest text-white/40 mb-3">
                    Alebo nám zavolajte
                  </p>
                  <a
                    href="tel:+421904530619"
                    className="text-sm font-body text-white/80 hover:text-white transition-colors"
                  >
                    +421 904 530 619
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big brand text */}
      <div className="px-6 md:px-12 lg:px-20 pb-10 pt-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-display font-bold text-white leading-[0.9] tracking-tight"
          >
      Timothy Smon
          </motion.div>
        </div>
      </div>
    </footer>
  );
}