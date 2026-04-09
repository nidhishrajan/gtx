"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight, Clock } from "lucide-react";

const jobs = [
  {
    title: "Principal Data Architect - SAP",
    company: "Medtronic",
    location: "Hyderabad",
    experience: "13-18 yrs",
    type: "Full time",
  },
  {
    title: "Full Stack Developer - Python",
    company: "Spekond Technologies",
    location: "Bengaluru",
    experience: "7-12 yrs",
    type: "Full time",
  },
  {
    title: "Kyriba - Senior Consultant",
    company: "Ernst & Young",
    location: "Bangalore Urban",
    experience: "3-7 yrs",
    type: "Full time",
  },
  {
    title: "Senior Data Integration Engineer - AI",
    company: "Celigo",
    location: "Hyderabad",
    experience: "4-10 yrs",
    type: "Full time",
  },
  {
    title: "Senior Field Service Site Manager",
    company: "Lam Research",
    location: "Dholera",
    experience: "2-16 yrs",
    type: "Full time",
  },
  {
    title: "Data Scientist - Analytics & BI",
    company: "Global Talent Exchange",
    location: "Germany / India",
    experience: "5+ yrs",
    type: "Full time",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="jobs" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gtx-orange/10 font-body text-xs font-semibold text-gtx-orange uppercase tracking-wider mb-6">
              Featured Opportunities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gtx-gray-900 tracking-tight">
              Ready to Take the{" "}
              <span className="text-gtx-orange">Leap?</span>
            </h2>
            <p className="mt-4 font-body text-lg text-gtx-slate max-w-xl leading-relaxed">
              High-impact roles across India&apos;s fastest-growing companies. Your next chapter starts here.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gtx-orange text-gtx-orange font-body text-sm font-semibold hover:bg-gtx-orange hover:text-white transition-all duration-300 self-start md:self-auto"
          >
            View All Jobs
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Jobs grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.title}
              variants={item}
              className="group relative p-6 rounded-2xl bg-white border border-gtx-gray-200/70 hover:border-gtx-orange/30 hover:shadow-xl hover:shadow-gtx-orange/5 transition-all duration-300 cursor-pointer"
            >
              {/* Company avatar */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gtx-orange/10 to-gtx-orange/5 border border-gtx-orange/10 flex items-center justify-center mb-5 group-hover:from-gtx-orange group-hover:to-gtx-orange-dark group-hover:border-gtx-orange transition-all duration-300">
                <span className="font-display text-sm font-bold text-gtx-orange group-hover:text-white transition-colors duration-300">
                  {job.company.charAt(0)}
                </span>
              </div>

              <h3 className="font-display text-base font-semibold text-gtx-gray-900 mb-3 group-hover:text-gtx-orange transition-colors duration-300 leading-snug">
                {job.title}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-gtx-slate-light" strokeWidth={2} />
                  <span className="font-body text-xs text-gtx-slate">{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gtx-slate-light" strokeWidth={2} />
                  <span className="font-body text-xs text-gtx-slate">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gtx-slate-light" strokeWidth={2} />
                  <span className="font-body text-xs text-gtx-slate">{job.experience} &middot; {job.type}</span>
                </div>
              </div>

              {/* Arrow on hover */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-gtx-gray-50 border border-gtx-gray-200/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-gtx-orange group-hover:border-gtx-orange">
                <ArrowUpRight className="w-4 h-4 text-gtx-slate group-hover:text-white transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}