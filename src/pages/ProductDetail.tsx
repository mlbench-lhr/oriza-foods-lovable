import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Truck, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import productSteam from "@/assets/product-steam.jpg";
import productSella from "@/assets/product-sella.jpg";
import productSuperBasmati from "@/assets/product-super-basmati.jpg";
import productKainat from "@/assets/product-kainat.jpg";

const productsData = [
  { 
    id: 1, 
    name: "Steam Rice", 
    price: 1200, 
    image: productSteam, 
    category: "Premium",
    description: "Premium steam-processed basmati rice with extra long grains. Perfect for special occasions and restaurant-quality dishes.",
    features: [
      "Extra long grain length (8.4mm+)",
      "Steam processed for better texture",
      "Low starch content",
      "Aromatic and fluffy when cooked",
    ],
    weight: "5kg, 10kg, 25kg bags available",
    origin: "Hafizabad, Punjab",
  },
  { 
    id: 2, 
    name: "Sella Basmati", 
    price: 800, 
    image: productSella, 
    category: "Export Quality",
    description: "Golden sella basmati rice, parboiled to retain maximum nutrition. Ideal for biryani and pulao dishes.",
    features: [
      "Parboiled for nutrition retention",
      "Non-sticky when cooked",
      "Golden color adds appeal",
      "Great for biryani and pulao",
    ],
    weight: "5kg, 10kg, 25kg bags available",
    origin: "Hafizabad, Punjab",
  },
  { 
    id: 3, 
    name: "Super Basmati", 
    price: 950, 
    image: productSuperBasmati, 
    category: "Premium",
    description: "Aromatic super basmati with distinctive fragrance. The classic choice for Pakistani households.",
    features: [
      "Traditional aromatic variety",
      "Long slender grains",
      "Excellent cooking expansion",
      "Perfect for everyday use",
    ],
    weight: "5kg, 10kg, 25kg bags available",
    origin: "Hafizabad, Punjab",
  },
  { 
    id: 4, 
    name: "Kainat Rice", 
    price: 450, 
    image: productKainat, 
    category: "Daily Use",
    description: "Everyday rice perfect for home cooking. Affordable quality without compromise.",
    features: [
      "Budget-friendly option",
      "Good cooking properties",
      "Suitable for all dishes",
      "Consistent quality",
    ],
    weight: "5kg, 10kg, 25kg bags available",
    origin: "Hafizabad, Punjab",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id)) || productsData[0];

  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          {/* Back button */}
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <span className="absolute top-6 left-6 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full">
                {product.category}
              </span>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  {product.name}
                </h1>
                <p className="text-3xl text-primary font-bold mt-4">Rs. {product.price}</p>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Key Features:</h3>
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card p-4 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground text-sm">Available Sizes</p>
                    <p className="text-foreground font-medium">{product.weight}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Origin</p>
                    <p className="text-foreground font-medium">{product.origin}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 border-border hover:bg-secondary">
                  <Link to="/contact">Bulk Order Inquiry</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Quality Assured</p>
                </div>
                <div className="text-center">
                  <Leaf className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">100% Natural</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`} className="block group">
                <div className="glass-card rounded-xl overflow-hidden glow-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-bold mt-1">Rs. {relatedProduct.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
