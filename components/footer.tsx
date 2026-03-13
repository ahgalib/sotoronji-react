"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Floor Mats", href: "/shop/floor-mats" },
    { name: "Wall Art", href: "/shop/wall-art" },
    { name: "Rugs", href: "/shop/rugs" },
    { name: "Home Textiles", href: "/shop/home-textiles" },
    { name: "Gift Sets", href: "/shop/gift-sets" },
  ],
  company: [
    { name: "Our Story", href: "/story" },
    { name: "Artisans", href: "/artisans" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold text-background">
                Shotorongi
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Preserving the art of traditional Bangladeshi weaving while 
              empowering artisan communities. Each piece tells a story of 
              heritage, craftsmanship, and sustainable luxury.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>123 Heritage Lane, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>hello@shotorongi.com</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              © {new Date().getFullYear()} Shotorongi. All rights reserved. Handcrafted with love in Bangladesh.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-all"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
