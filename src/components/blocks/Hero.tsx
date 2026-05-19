"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  { value: "117+", label: "Unicorn Startups", icon: TrendingUp },
  { value: "30+", label: "Countries Covered", icon: MapPin },
  { value: "10K+", label: "Open Roles", icon: Briefcase },
];

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-display font-bold text-gtx-orange">
      {visible ? value : "0"}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-gtx-navy">
      {/* Animated gradient background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gtx-navy via-gtx-navy-light to-gtx-orange/20" />
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gtx-orange/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gtx-orange/8 blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-24 pb-16">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-gtx-emerald animate-pulse" />
                <span className="font-body text-sm text-white/80">
                  India is hiring. Are you ready?
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
              >
                Return,{" "}
                <span className="text-gtx-orange">Rebuild</span>
                <br />
                <span className="text-white">Rise with </span>
                <span className="bg-gradient-to-r from-gtx-orange to-gtx-orange-light bg-clip-text text-transparent">
                  India
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 font-body text-lg text-white/60 leading-relaxed max-w-lg"
              >
                Your global experience is India&apos;s competitive advantage. Discover
                high-impact roles across thriving industries — and come home to a
                future that&apos;s worth returning to.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row items-start gap-4"
              >
                <a
                  href="#jobs"
                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gtx-orange text-white font-body font-semibold text-sm hover:bg-gtx-orange-dark transition-all duration-300 shadow-xl shadow-gtx-orange/30 hover:shadow-gtx-orange/50 hover:-translate-y-0.5"
                >
                  View Jobs in India
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#why-india"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-white/15 text-white/80 font-body font-semibold text-sm hover:bg-white/5 hover:border-white/25 transition-all duration-300"
                >
                  Why Return to India
                </a>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-12 flex items-center gap-6 pt-8 border-t border-white/10"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-gtx-orange" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-white">{stat.value}</div>
                      <div className="font-body text-xs text-white/50">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — India visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gtx-orange/10">
                {/* India map gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gtx-orange/30 via-gtx-navy-light to-gtx-navy" />
                {/* Decorative dots pattern */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(242,92,5,0.3) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />
                {/* Floating card overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-gtx-emerald animate-pulse" />
                      <span className="font-body text-sm text-white/70">Trending sectors in India</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["AI/ML", "Semiconductor", "Fintech", "Aerospace", "Cybersecurity"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 font-body text-xs text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gtx-orange/20 to-transparent rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />

      {/* Brand marquee */}
      <div className="relative z-20 bg-white border-t border-gtx-gray-200/50">
        <div className="mx-auto max-w-7xl px-6 py-4 overflow-hidden">
          <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="font-body text-sm font-medium text-gtx-slate">
                  Trusted by 500+ Professionals
                </span>
                <span className="text-gtx-orange/30">&#9670;</span>
                <span className="font-body text-sm font-medium text-gtx-slate">
                  30+ Countries
                </span>
                <span className="text-gtx-orange/30">&#9670;</span>
                <span className="font-body text-sm font-medium text-gtx-slate">
                  Back to Bharat Initiative
                </span>
                <span className="text-gtx-orange/30">&#9670;</span>
                <span className="font-body text-sm font-medium text-gtx-slate">
                  High-Impact Roles
                </span>
                <span className="text-gtx-orange/30">&#9670;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}