import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const team = [
  { name: "Alex Mitchell", role: "CEO & Founder", color: "from-primary to-blue-400" },
  { name: "Sarah Chen", role: "Meta Ads Specialist", color: "from-accent to-yellow-300" },
  { name: "David Kim", role: "Creative Designer", color: "from-emerald-500 to-teal-400" },
  { name: "Maya Patel", role: "Social Media Manager", color: "from-pink-500 to-rose-400" },
  { name: "James Rivera", role: "Sales Consultant", color: "from-purple-500 to-indigo-400" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">The Experts</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient-primary">Meet Our Team</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card p-6 text-center">
                {/* Avatar */}
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-2xl font-heading font-bold text-background">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-foreground text-sm">{member.name}</h3>
                <p className="text-muted-foreground text-xs mt-1">{member.role}</p>

                {/* Social icons on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex justify-center gap-3 mt-4"
                >
                  {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                    <a key={idx} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Icon size={16} />
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
