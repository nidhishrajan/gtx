import { Mail, Phone, MapPin, Clock } from "lucide-react";

const links = [
  { label: "Domestic", href: "#destinations" },
  { label: "International", href: "#destinations" },
  { label: "Custom Trip", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-sand">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-earth">
              The Spiritual Odyssey
            </h3>
            <p className="mt-4 font-serif text-sm text-earth-muted leading-relaxed">
              Curating sacred journeys across India and the world since 2021.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.3em] uppercase text-gold mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-serif text-sm text-earth/50 hover:text-gold transition-colors duration-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.3em] uppercase text-gold mb-8">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-gold/50 mt-0.5 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-serif text-sm text-earth/50">
                  Karvenagar, Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 text-gold/50 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:thespiritualodyssey21@gmail.com"
                  className="font-serif text-sm text-earth/50 hover:text-gold transition-colors duration-500"
                >
                  thespiritualodyssey21@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 text-gold/50 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="tel:+917710812393"
                  className="font-serif text-sm text-earth/50 hover:text-gold transition-colors duration-500"
                >
                  +91 7710812393
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  className="w-4 h-4 text-gold/50 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-serif text-sm text-earth/50">
                  Monday to Saturday, 9am to 5pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-20 pt-8 border-t border-sand flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-xs text-earth/30 tracking-wider">
            &copy; 2025 The Spiritual Odyssey. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-serif text-xs text-earth/30 hover:text-gold transition-colors duration-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-serif text-xs text-earth/30 hover:text-gold transition-colors duration-500"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
