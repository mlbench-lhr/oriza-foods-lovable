import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";

const faqs = [
  {
    question: "What types of rice does Oriza Foods offer?",
    answer: "We offer a wide variety of premium Pakistani rice including 1121 Basmati, Super Basmati, Kainat, IRRI-6, PK-386, and Steam Rice. Each variety is carefully selected and processed to ensure the highest quality.",
  },
  {
    question: "Where is your rice sourced from?",
    answer: "All our rice is sourced directly from the fertile fields of Hafizabad in Punjab, Pakistan. We work closely with local farmers to ensure authentic, high-quality grains from farm to table.",
  },
  {
    question: "Do you offer bulk or wholesale orders?",
    answer: "Yes, we cater to both retail customers and wholesale buyers. We serve households, restaurants, caterers, and businesses across Pakistan. Contact our sales team for bulk pricing and partnership opportunities.",
  },
  {
    question: "How is the quality of rice ensured?",
    answer: "Every batch of rice undergoes rigorous quality testing and grading. We follow strict hygiene standards during milling and packaging. Our quality control team ensures that every grain meets our premium standards.",
  },
  {
    question: "What is the shelf life of your rice?",
    answer: "When stored properly in a cool, dry place, our rice has a shelf life of 12-18 months. We recommend keeping it in an airtight container away from moisture and direct sunlight.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we primarily serve customers within Pakistan. However, we are expanding our export operations. Please contact us for international shipping inquiries and availability.",
  },
  {
    question: "What makes Basmati rice special?",
    answer: "Basmati rice is known for its distinctive aroma, long slender grains, and fluffy texture when cooked. Pakistani Basmati, particularly from Punjab, is considered among the finest in the world due to the unique soil and climate conditions.",
  },
  {
    question: "How can I become a distributor?",
    answer: "We welcome partnership opportunities with distributors across Pakistan. Please reach out to us through our contact form or email us at partnerships@orizafoods.com with your business details.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products and services"
        breadcrumbs={[{ name: "FAQs", path: "/faqs" }]}
      />

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="glass-card rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="font-serif text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-primary" />
                      ) : (
                        <Plus className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="pb-20">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
