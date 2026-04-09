"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "117+", label: "Unicorn Startups", prefix: "" },
  { value: "100+", label: "Smart Cities", prefix: "" },
  { value: "6.7%", label: "GDP Growth (FY26)", prefix: "" },
  { value: "3rd", label: "Largest Economy by PPP", prefix: "" },
  { value: "82%", label: "Lower Cost of Living", prefix: "" },
  { value: "3rd", label: "Largest Digital Economy", prefix: "" },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gtx-orange transition-colors duration-300">
        {visible ? stat.value : "—"}
      </div>
      <div className="font-body text-sm text-white/50 tracking-wide uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  return (
    <section className="relative py-20 md:py-28 bg-gtx-navy overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gtx-orange/5 via-transparent to-gtx-orange/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gtx-orange/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-body text-xs font-semibold text-gtx-orange uppercase tracking-wider mb-4">
            A Powerful Decade
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            India&apos;s Transformation,{" "}
            <span className="text-gtx-orange">By the Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}