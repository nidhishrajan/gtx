"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Why India", href: "#why-india" },
  { label: "Sectors", href: "#sectors" },
  { label: "Jobs", href: "#jobs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-lg shadow-gtx-navy/5 border-b border-gtx-gray-200/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gtx-orange flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">G</span>
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                "font-display font-bold text-lg tracking-tight transition-colors duration-300",
                scrolled ? "text-gtx-gray-900" : "text-white"
              )}>
                GTX
              </span>
              <span className={cn(
                "font-body text-xs block -mt-1 transition-colors duration-300",
                scrolled ? "text-gtx-slate" : "text-white/70"
              )}>
                Global Talent Exchange
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300",
                  scrolled
                    ? "text-gtx-gray-600 hover:text-gtx-orange hover:bg-gtx-orange/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#jobs"
              className={cn(
                "px-5 py-2.5 rounded-lg font-body text-sm font-semibold transition-all duration-300 cursor-pointer",
                scrolled
                  ? "text-gtx-orange hover:bg-gtx-orange/5"
                  : "text-white/90 hover:text-white"
              )}
            >
              View Jobs
            </a>
            <a
              href="#cta"
              className="px-5 py-2.5 rounded-lg bg-gtx-orange text-white font-body text-sm font-semibold hover:bg-gtx-orange-dark transition-all duration-300 shadow-lg shadow-gtx-orange/25 hover:shadow-gtx-orange/40 cursor-pointer"
            >
              Back to Bharat
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors cursor-pointer",
              scrolled ? "text-gtx-gray-900" : "text-white"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-t border-gtx-gray-200/50 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-lg font-body text-sm font-medium text-gtx-gray-600 hover:text-gtx-orange hover:bg-gtx-orange/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-gtx-gray-200">
            <a
              href="#jobs"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-lg font-body text-sm font-semibold text-gtx-orange text-center hover:bg-gtx-orange/5 transition-all"
            >
              View Jobs
            </a>
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-lg bg-gtx-orange text-white font-body text-sm font-semibold text-center hover:bg-gtx-orange-dark transition-all shadow-lg shadow-gtx-orange/25"
            >
              Back to Bharat
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}