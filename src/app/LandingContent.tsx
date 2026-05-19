"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
});

export default function LandingContent() {
  return (
    <>
      {/* ==== HERO ==== */}
      <section className="relative overflow-hidden bg-blue-900 text-white py-24">
        {/* floating icons */}
        <motion.div
          className="absolute top-10 left-1/4 w-12 h-12 bg-orange-600 rounded-full opacity-30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: \"linear\" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-teal-500 rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: \"linear\" }}
        />

        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text */}
          <div className="md:w-1/2">
            <motion.h1
              variants={fadeIn(0.2)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Return, Rebuild <br />
              &amp; Rise in India
            </motion.h1>

            <motion.p
              variants={fadeIn(0.4)}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl mb-8"
            >
              Connect with India’s fastest‑growing sectors, live the culture you love, and
              accelerate your career—one place.
            </motion.p>

            <motion.a
              href="#lead-form"
              variants={fadeIn(0.6)}
              initial="hidden"
              animate="visible"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md transition"
            >
              Explore Opportunities
            </motion.a>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn(0.8)}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src="/images/hero-family.png"
              alt="Family moving back to India"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ==== LEAD FORM ==== */}
      <section id="lead-form" className="bg-orange-50 py-12">
        <div className="container mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Tell us about your move
          </h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Current City (US)"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Target City (India)"
              className="border border-gray-300 rounded-md p-2"
            />
            <textarea
              placeholder="Brief note (timeline, special needs)"
              rows={3}
              className="border border-gray-300 rounded-md p-2"
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded-md transition"
            >
              Start My Move
            </button>
          </form>
        </div>
      </section>

      {/* ==== WHY US ==== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Move Back Now?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="font-semibold text-xl mb-2">Top Companies</h3>
            <p className="text-gray-600">
              117+ unicorns & industry leaders hiring now.
            </p>

            {/* Column 2 */}
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-semibold text-xl mb-2">Booming Economy</h3>
            <p className="text-gray-600">
              6.7 % FY‑26 GDP growth – opportunities exploding.
            </p>

            {/* Column 3 */}
            <div className="text-5xl mb-4">🌏</div>
            <h3 className="font-semibold text-xl mb-2">World‑Class Lifestyle</h3>
            <p className="text-gray-600">
              Modern infrastructure, vibrant culture, and global connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* ==== HOW IT WORKS ==== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: \"1\", title: \"Free Assessment\", desc: \"Share your profile; we craft a personalized relocation roadmap.\" },
              { num: \"2\", title: \"Planning & Docs\", desc: \"Visas, housing, schooling – we handle the paperwork.\" },
              { num: \"3\", title: \"Move & Settle\", desc: \"Door‑to‑door shipping, onboarding support, community network.\" },
            ].map((step, i) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== TESTIMONIALS ==== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <blockquote key={i} className="border-l-4 border-orange-600 pl-4">
                <p className="italic text-gray-700">
                  {i === 1
                    ? \"“The whole process was seamless – I could focus on my new job while they handled everything else.”\"
                    : \"“From paperwork to moving my family, Global Talex made it feel like home already.”\"}
                </p>
                <cite className="block mt-2 text-gray-600">
                  {i === 1
                    ? \"– Priya S., Software Engineer, San Francisco\"
                    : \"– Arjun K., Product Manager, New York\"}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ==== FOOTER ==== */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
          <Image src="/logo.svg" alt="Global Talex" width={120} height={30} />
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy</a>
          </nav>
        </div>
        <p className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Global Talex. All rights reserved.
        </p>
      </footer>
    </>
  );
}
