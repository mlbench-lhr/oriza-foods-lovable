import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Hafizabad, Punjab, Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 300 123 4567", "+92 321 987 6543"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@orizafoods.com", "sales@orizafoods.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9AM - 6PM", "Saturday: 9AM - 2PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await emailjs.send(
        "service_9mfj0wh",
        "template_x55fngd",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          email: formData.email,
          subject: formData.subject,
        },
        "p8_PbtWdqqOUxMKUE"
      );

      console.log("res-----", res);

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "", subject: "" });
    } catch (error) {
      console.log("error----", error);

      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries and partnerships"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Let&apos;s Talk
                </h2>
                <p className="text-muted-foreground">
                  Have a question or want to discuss a partnership? We&apos;d
                  love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="glass-card p-4 rounded-xl flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground text-sm"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 rounded-2xl space-y-6"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+92 300 123 4567"
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="How can we help?"
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden h-[400px]">
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Hafizabad,Punjab,Pakistan&output=embed"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
