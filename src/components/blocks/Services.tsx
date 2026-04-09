"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  HeartPulse,
  Factory,
  Rocket,
  Brain,
  ShoppingBag,
  ShieldCheck,
  Sun,
  Landmark,
  Film,
  Truck,
  Gamepad2,
} from "lucide-react";

const sectors = [
  { icon: Cpu, label: "Technology & IT" },
  { icon: HeartPulse, label: "Healthcare & Life Sciences" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Rocket, label: "Aerospace & Space" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: ShoppingBag, label: "Consumer & FMCG" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Sun, label: "Renewable Energy" },
  { icon: Landmark, label: "Finance & Fintech" },
  { icon: Film, label: "Media & Entertainment" },
  { icon: Truck, label: "Supply Chain & Logistics" },
  { icon: Gamepad2, label: "Gaming & Animation" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section id="sectors" className="relative py-24 md:py-32 bg-gtx-gray-50 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gtx-orange/10 font-body text-xs font-semibold text-gtx-orange uppercase tracking-wider mb-6">
            Your Skills Are in Demand
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gtx-gray-900 tracking-tight">
            Work with the{" "}
            <span className="text-gtx-orange">Best in India</span>
          </h2>
          <p className="mt-5 font-body text-lg text-gtx-slate max-w-2xl mx-auto leading-relaxed">
            From semiconductors to cybersecurity, India&apos;s top companies are actively
            hiring global talent. Your expertise fits right in.
          </p>
        </motion.div>

        {/* Sectors grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.label}
              variants={item}
              className="group relative p-6 rounded-2xl bg-white border border-gtx-gray-200/70 hover:border-gtx-orange/30 hover:shadow-lg hover:shadow-gtx-orange/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-gtx-orange/10 flex items-center justify-center mb-4 group-hover:bg-gtx-orange group-hover:scale-110 transition-all duration-300">
                <sector.icon className="w-5 h-5 text-gtx-orange group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>
              <h3 className="font-display text-sm font-semibold text-gtx-gray-900 group-hover:text-gtx-orange transition-colors duration-300">
                {sector.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}