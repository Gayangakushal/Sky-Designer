import { motion } from "framer-motion";

import logoRockhouse from "@/assets/logos/rockhouse.jpg";
import logoDD from "@/assets/logos/dd.jpg";
import logoSLPhone from "@/assets/logos/slphonehub.jpg";
import logoLifeWellness from "@/assets/logos/lifewellness.jpg";
import logoMiraj from "@/assets/logos/miraj.jpg";
import logoAyuCeylon from "@/assets/logos/ayuceylon.jpg";
import logoHaveen from "@/assets/logos/haveen.jpg";
import logoJustShop from "@/assets/logos/justshop.jpg";

const logos = [
  { src: logoRockhouse, alt: "Rock House" },
  { src: logoDD, alt: "DD" },
  { src: logoSLPhone, alt: "SL Phone Hub" },
  { src: logoLifeWellness, alt: "Life Wellness" },
  { src: logoMiraj, alt: "Miraj Hair Clinic" },
  { src: logoAyuCeylon, alt: "Ayu Ceylon" },
  { src: logoHaveen, alt: "Haveen Advertising" },
  { src: logoJustShop, alt: "Just Tify Shop" },
];

const TrustedBrandsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-muted-foreground text-sm font-medium tracking-wide">
          Trusted by <span className="text-foreground font-bold">500+</span> Global Brands{" "}
          <span className="text-muted-foreground">(and counting)</span>
        </p>
      </motion.div>

      {/* Scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee gap-16 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-card border border-border flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
