import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Jessica W.", rating: 5, text: "Sky Designers completely transformed our online presence. Our leads tripled within 3 months!", avatar: "JW" },
  { name: "Michael R.", rating: 5, text: "The best marketing team we've ever worked with. Professional, creative, and results-driven.", avatar: "MR" },
  { name: "Amanda K.", rating: 5, text: "Their Meta Ads strategy was a game-changer. ROI exceeded our expectations by 200%.", avatar: "AK" },
  { name: "Robert S.", rating: 4, text: "Excellent branding work. Our new identity perfectly captures our company values.", avatar: "RS" },
  { name: "Laura T.", rating: 5, text: "From consultation to execution, every step was handled with expertise and care.", avatar: "LT" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient-primary">What Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className={idx < review.rating ? "text-accent fill-accent" : "text-muted-foreground"}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{review.avatar}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
