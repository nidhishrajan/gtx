"use client";

import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/917710812393";

export default function CTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-cream">
      {/* Topo texture */}
      <div className="absolute inset-0 topo-texture opacity-50" />

      {/* Large background image — editorial fullbleed */}
      <div className="relative mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=900&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-earth/70" />

          {/* Content */}
          <div className="relative px-8 md:px-16 py-20 md:py-28 text-center">
            <p className="font-serif text-xs tracking-[0.4em] uppercase text-gold-light mb-6">
              Begin Your Story
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-cream leading-tight max-w-3xl mx-auto">
              Your Transformation{" "}
              <span className="italic text-gold-light">Awaits</span>
            </h2>

            <p className="mt-6 font-serif text-lg text-cream/70 max-w-2xl mx-auto leading-relaxed">
              Whether you know exactly where you want to go or just know you
              need to go somewhere — we will help you find your journey.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-cream text-cream font-serif text-xs tracking-[0.25em] uppercase hover:bg-cream hover:text-earth transition-all duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message Us on WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
