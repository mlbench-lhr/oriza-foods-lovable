import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Target, Eye, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import aboutImage from "@/assets/about-seedling.jpg";
import riceField from "@/assets/rice-field.jpg";

const values = [
  {
    icon: Leaf,
    title: "Pure & Organic",
    description:
      "We believe in delivering 100% pure and organic rice without any chemicals or additives.",
  },
  {
    icon: Target,
    title: "Quality First",
    description:
      "Every batch is tested and graded to meet strict quality standards.",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    description:
      "Trusted by households, restaurants, and caterers across Pakistan.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do.",
  },
];

const team = [
  {
    name: "Qazi Ammar",
    role: "CEO",
    pic: "/ammar.png",
    bio: "Building a smarter, technology-driven future for agriculture.",
  },
  {
    name: "Nabeel Hassan",
    role: "Co-Founder",
    pic: "/nabeel.png",
    bio: "Dedicated to bringing modern, efficient, and sustainable food solutions.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Born from Punjab's fertile fields and rooted in tradition"
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Zameen se Dastarkhwan Tak
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We bring you authentic Pakistani rice straight from the fields
                of Hafizabad. From premium varieties like 1121 Basmati, Super
                Basmati, and Kainat to everyday options like IRRI-6 and PK-386,
                every grain is naturally fragrant, hygienically milled, and
                perfect for daily meals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Trusted by households, restaurants, and caterers across
                Pakistan, we deliver pure, long, and flavorful rice in every
                bag.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Growing With Pakistan",
                  "Quality You Can Trust",
                  "Premium Varieties",
                  "Hygienic Processing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={riceField}
                alt="Rice Fields"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-card border border-border p-6 rounded-2xl max-w-xs">
                <p className="text-3xl font-serif font-bold text-primary">
                  25+
                </p>
                <p className="text-foreground font-semibold">
                  Years of Excellence
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Serving Pakistani households since 1999
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To combine innovation with agriculture, bringing modern,
                efficient, and sustainable food solutions that support farmers
                and deliver quality to consumers. Every step we take is aimed at
                transforming the agricultural landscape for a better future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a smarter, technology-driven future for agriculture —
                delivering purity, quality, and innovation in every product we
                offer. We envision a Pakistan where every kitchen enjoys the
                finest quality rice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center glow-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Meet The Leaders
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <div className="w-[100px] h-[100px] object-cover rounded-xl pt-2 bg-[#cccccc]/90 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={member.pic}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our products and how we can
              serve your needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
