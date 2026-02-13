import { motion } from "framer-motion";
import { Target, Share2, Palette, MessageSquare, GitBranch, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Target, title: "Meta Ads Management", desc: "High-converting ad campaigns on Facebook & Instagram", price: "$499" },
  { icon: Share2, title: "Social Media Handling", desc: "Complete social media management & content strategy", price: "$399" },
  { icon: Palette, title: "Graphic Design", desc: "Stunning visuals for brand identity and campaigns", price: "$299" },
  { icon: MessageSquare, title: "Consultation", desc: "Expert digital marketing strategy & guidance", price: "$199" },
  { icon: GitBranch, title: "Funnel Building", desc: "High-conversion sales funnels that drive revenue", price: "$599" },
  { icon: Award, title: "Branding", desc: "Complete brand identity development & positioning", price: "$799" },
];

const ServicesSection = ({ onBookCall }: { onBookCall: () => void }) => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient-primary">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 group hover:glow-primary transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-heading font-bold text-lg">From {service.price}</span>
                <Button onClick={onBookCall} size="sm" variant="outline" className="border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
