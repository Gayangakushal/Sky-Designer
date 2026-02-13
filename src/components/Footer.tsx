import { motion } from "framer-motion";
import { Facebook, Youtube, Instagram, Linkedin, ChevronRight, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const usefulLinks = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#team" },
  { label: "Contact Us", href: "#reviews" },
  { label: "Courses", href: "#services" },
  { label: "Solutions", href: "#services" },
  { label: "Knowledge Centre", href: "#portfolio" },
];

const services = [
  { label: "Meta Ads Management", href: "#meta-ads" },
  { label: "Social Media Handling", href: "#services" },
  { label: "Graphic Design", href: "/graphic-design" },
  { label: "Consultation", href: "#services" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100089002696067", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="relative pt-16 pb-6 border-t border-border">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <a href="#home" className="font-heading text-2xl font-bold text-gradient-primary inline-block mb-4">
            Sky Designer<span className="text-accent">.</span>
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            We are 10+ professional Digital Marketers 5 years of experience
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-5">Useful Links</h3>
          <ul className="space-y-3">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-5">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.label}>
                <a href={service.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-5">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">Kanatta Rd, Battaramulla 10120</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="tel:+94779507298" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                +94 77 950 7298
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:Info@jsskydesigners.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Info@jsskydesigners.com
              </a>
            </li>
          </ul>
        </div>
      </div>


      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">
          Copyright 2025, <span className="text-primary font-medium">Sky Designers</span>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">Terms of Services</a>
          <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>

    {/* WhatsApp floating button */}
    <motion.a
      href="https://wa.me/94779507298"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg z-40"
    >
      <MessageCircle className="text-accent-foreground" size={26} />
    </motion.a>
  </footer>
);

export default Footer;
