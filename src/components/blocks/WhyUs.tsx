"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Target,
  Zap,
  Shield,
  Crown,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Culture, History & Heritage",
    description: "Rekindle your connection to the food, festivals, and traditions that shaped you. India isn't just where you're from — it's who you are.",
    color: "from-rose-500/10 to-rose-500/5",
    iconColor: "text-rose-500",
  },
  {
    icon: Users,
    title: "Move Closer to Loved Ones",
    description: "Nothing replaces the warmth of family. Return to the people and places that make life meaningful — without the 12-hour time difference.",
    color: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Target,
    title: "Create Impact at Scale",
    description: "Lead projects that affect millions — even billions — of lives. India's scale is unmatched, and your global perspective is exactly what's needed.",
    color: "from-gtx-orange/10 to-gtx-orange/5",
    iconColor: "text-gtx-orange",
  },
  {
    icon: Zap,
    title: "Fill India's Talent Void",
    description: "Niche skills are in unprecedented demand. Your specialized expertise puts you at the front of the line for leadership and specialist roles.",
    color: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-500",
  },
  {
    icon: Shield,
    title: "Invest with Confidence",
    description: "Pro-innovation policies, startup-friendly regulations, and government incentives make this the decade to build wealth and invest in India's growth story.",
    color: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-500",
  },
  {
    icon: Crown,
    title: "Live Life Like a King",
    description: "Modern amenities, world-class healthcare, premium education, and a cost of living that lets you enjoy the lifestyle you've earned — on your terms.",
    color: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyUs() {
  return (
    <section id="why-india" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #F25C05 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

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
            Why Return to India
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gtx-gray-900 tracking-tight">
            You Left to Grow.
            <br />
            <span className="text-gtx-orange">Now Return to Lead.</span>
          </h2>
          <p className="mt-5 font-body text-lg text-gtx-slate max-w-2xl mx-auto leading-relaxed">
            India is in the middle of its most powerful decade of transformation.
            Your global experience is exactly what the country needs.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={item}
              className="group relative p-8 rounded-2xl bg-white border border-gtx-gray-200/70 hover:border-gtx-orange/30 hover:shadow-xl hover:shadow-gtx-orange/5 transition-all duration-500 cursor-default"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gtx-gray-50 border border-gtx-gray-200/50 flex items-center justify-center mb-5 group-hover:border-gtx-orange/20 group-hover:bg-gtx-orange/5 transition-all duration-500">
                  <reason.icon className={`w-5 h-5 ${reason.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-semibold text-gtx-gray-900 mb-3 group-hover:text-gtx-orange transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-gtx-slate leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}