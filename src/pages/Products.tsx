import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import productSteam from "@/assets/product-steam.jpg";
import productSella from "@/assets/product-sella.jpg";
import productSuperBasmati from "@/assets/product-super-basmati.jpg";
import productKainat from "@/assets/product-kainat.jpg";

const categories = ["All", "Premium", "Export Quality", "Daily Use"];

const allProducts = [
  { 
    id: 1, 
    name: "Steam Rice", 
    price: 1200, 
    image: productSteam, 
    category: "Premium",
    description: "Premium steam-processed basmati rice with extra long grains."
  },
  { 
    id: 2, 
    name: "Sella Basmati", 
    price: 800, 
    image: productSella, 
    category: "Export Quality",
    description: "Golden sella basmati, parboiled for better nutrition retention."
  },
  { 
    id: 3, 
    name: "Super Basmati", 
    price: 950, 
    image: productSuperBasmati, 
    category: "Premium",
    description: "Aromatic super basmati with distinctive fragrance."
  },
  { 
    id: 4, 
    name: "Kainat Rice", 
    price: 450, 
    image: productKainat, 
    category: "Daily Use",
    description: "Everyday rice perfect for home cooking."
  },
  { 
    id: 5, 
    name: "1121 Basmati", 
    price: 1100, 
    image: productSteam, 
    category: "Export Quality",
    description: "The longest grain basmati rice variety, perfect for biryani."
  },
  { 
    id: 6, 
    name: "IRRI-6", 
    price: 350, 
    image: productSuperBasmati, 
    category: "Daily Use",
    description: "Affordable everyday rice with good cooking properties."
  },
  { 
    id: 7, 
    name: "PK-386", 
    price: 400, 
    image: productSella, 
    category: "Daily Use",
    description: "Popular Pakistani variety known for its versatility."
  },
  { 
    id: 8, 
    name: "Brown Basmati", 
    price: 900, 
    image: productKainat, 
    category: "Premium",
    description: "Whole grain brown basmati for health-conscious consumers."
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="Our Products"
        subtitle="Premium Pakistani rice varieties for every occasion"
        breadcrumbs={[{ name: "Products", path: "/products" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter size={18} />
              <span className="text-sm">{filteredProducts.length} products</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                      <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-primary font-bold text-lg">Rs. {product.price}</p>
                        <Button variant="outline" size="sm" className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need Bulk Orders?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We offer special pricing for wholesale and bulk orders. Contact us for 
              partnership opportunities and custom packaging options.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
