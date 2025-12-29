import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl font-bold">ARTISAN</h3>
              <p className="text-xs tracking-[0.3em] text-primary-foreground/60 uppercase">
                Rugs & Carpets
              </p>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Bringing timeless elegance to your home with handcrafted rugs and
              premium carpets from around the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Persian Rugs", href: "/category/persian" },
                { name: "Modern Rugs", href: "/category/modern" },
                { name: "Shag Rugs", href: "/category/shag" },
                { name: "Outdoor Rugs", href: "/category/outdoor" },
                { name: "Runner Rugs", href: "/category/runner" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {[
                "Shipping & Returns",
                "Care Instructions",
                "Size Guide",
                "FAQ",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/50 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Artisan Lane, Design District
                  <br />
                  New Delhi, 110001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/50 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/50 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  hello@artisanrugs.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Artisan Rugs & Carpets. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/50">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
