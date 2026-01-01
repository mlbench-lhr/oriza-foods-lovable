import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import riceField from "@/assets/rice-field.jpg";
import heroRice from "@/assets/hero-rice.jpg";

const blogPosts = [
  {
    id: 1,
    title: "From Farm to Table: The Journey of Premium Rice",
    excerpt: "Discover how our rice travels from the fertile fields of Punjab to your kitchen, maintaining quality at every step.",
    image: gallery3,
    date: "January 22, 2026",
    author: "Admin",
    category: "Agriculture",
  },
  {
    id: 2,
    title: "The Art of Cooking Perfect Biryani",
    excerpt: "Master the art of making restaurant-quality biryani at home with our premium basmati rice.",
    image: heroRice,
    date: "January 18, 2026",
    author: "Admin",
    category: "Recipes",
  },
  {
    id: 3,
    title: "Understanding Different Rice Varieties",
    excerpt: "A comprehensive guide to understanding the differences between Basmati, Sella, and other rice varieties.",
    image: gallery1,
    date: "January 15, 2026",
    author: "Admin",
    category: "Education",
  },
  {
    id: 4,
    title: "Sustainable Farming Practices in Pakistan",
    excerpt: "How modern technology and traditional wisdom combine to create sustainable rice farming.",
    image: riceField,
    date: "January 10, 2026",
    author: "Admin",
    category: "Sustainability",
  },
  {
    id: 5,
    title: "Health Benefits of Basmati Rice",
    excerpt: "Explore the nutritional benefits of including basmati rice in your daily diet.",
    image: heroRice,
    date: "January 5, 2026",
    author: "Admin",
    category: "Health",
  },
  {
    id: 6,
    title: "Rice Storage Tips for Maximum Freshness",
    excerpt: "Learn the best practices for storing rice to maintain its aroma and quality for longer.",
    image: gallery1,
    date: "January 1, 2026",
    author: "Admin",
    category: "Tips",
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Blog"
        subtitle="Discover the world of premium Pakistani rice"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link to={`/blog/${blogPosts[0].id}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 glass-card rounded-2xl overflow-hidden glow-hover">
                <div className="h-72 lg:h-96 overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-primary text-sm font-medium">{blogPosts[0].category}</span>
                  <h2 className="font-serif text-3xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {blogPosts[0].author}
                    </span>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-primary font-medium">
                      Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="block group">
                  <div className="glass-card rounded-xl overflow-hidden glow-hover">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-primary text-xs font-medium">{post.category}</span>
                      <h3 className="font-serif text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
