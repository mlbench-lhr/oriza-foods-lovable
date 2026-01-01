import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award, Users, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-rice.jpg";
import aboutImage from "@/assets/about-seedling.jpg";
import productSteam from "@/assets/product-steam.jpg";
import productSella from "@/assets/product-sella.jpg";
import productSuperBasmati from "@/assets/product-super-basmati.jpg";
import productKainat from "@/assets/product-kainat.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const stats = [
  { number: "50+", label: "Team Members", icon: Users },
  { number: "10k+", label: "Happy Customers", icon: Star },
  { number: "100+", label: "Projects Completed", icon: Award },
  { number: "25+", label: "Years Experience", icon: Leaf },
];

const products = [
  { id: 1, name: "Steam Rice", price: 1200, image: productSteam, category: "Premium" },
  { id: 2, name: "Sella Basmati", price: 800, image: productSella, category: "Export Quality" },
  { id: 3, name: "Super Basmati", price: 950, image: productSuperBasmati, category: "Premium" },
  { id: 4, name: "Kainat Rice", price: 450, image: productKainat, category: "Daily Use" },
];

const galleryImages = [gallery1, gallery2, gallery3];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Pakistani Basmati Rice"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Leaf size={16} className="text-primary" />
                <span className="text-sm text-primary font-medium">100% Pure & Organic</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Khalis Basmati,</span>
                <br />
                <span className="text-gradient">Khalis Pakistani</span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
                We are Oriza Foods, a proudly Pakistani rice producer born out of Punjab&apos;s fertile fields 
                and rooted in decades old tradition. Our mission is simple — to bring pure, premium quality 
                rice from the farm to your kitchen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <Link to="/products">
                    View Products
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-muted-foreground">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-foreground font-semibold">10,000+ Happy Customers</p>
                  <p className="text-muted-foreground text-sm">Trusted across Pakistan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">{stat.number}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="About Oriza Foods"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <p className="text-3xl font-serif font-bold">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Pure and Organic
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We deliver exactly what we promise — pure, premium and consistent quality rice every time. 
                Every batch is tested, graded and packed to meet strict quality standards so the rice 
                you cook today tastes the same as the rice you loved yesterday.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Pure and Organic</span>
                    <span className="text-primary">70%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Premium and Healthy</span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                <Link to="/about">
                  Read More <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Gallery</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Pakistani Zayqay Ki Kahani
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-border hover:bg-secondary">
              <Link to="/gallery">View All Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Products</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              The Taste Pakistan Trusts
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/products/${product.id}`} className="block group">
                  <div className="glass-card rounded-xl overflow-hidden glow-hover">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">Premium quality rice</p>
                      <p className="text-primary font-bold text-lg mt-2">Rs. {product.price}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="text-5xl text-primary mb-6">"</div>
              <p className="text-xl md:text-2xl text-foreground italic font-serif leading-relaxed">
                At OrizaFoods, my vision is to build a smarter, technology-driven future for agriculture 
                — delivering purity, quality, and innovation in every product we offer.
              </p>
              <div className="mt-8">
                <p className="font-serif text-lg font-semibold text-foreground">Qazi Ammar</p>
                <p className="text-muted-foreground text-sm">CEO, Oriza Foods</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
            <div className="absolute inset-0 dot-pattern opacity-20" />
            
            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                Join the Oriza Family
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Experience the authentic taste of Pakistani basmati rice. From our fields to your kitchen, 
                we deliver quality you can trust.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
