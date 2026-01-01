import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
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
    content: `
      <p>Agriculture and farming are essential industries that involve the cultivation of crops and the raising of livestock for food, fiber, and other products. At Oriza Foods, we take pride in every step of the journey that brings premium rice from our fields to your kitchen.</p>
      
      <h2>The Beginning: Our Fields in Hafizabad</h2>
      <p>Our journey begins in the fertile plains of Hafizabad, Punjab, where the rich soil and favorable climate create perfect conditions for growing premium basmati rice. Our farmers use a combination of traditional wisdom and modern agricultural practices to ensure the best crop yield.</p>
      
      <h2>Careful Cultivation</h2>
      <p>The rice cultivation process takes several months, during which our agricultural experts monitor the crops closely. From seedling to harvest, every stage is carefully managed to ensure optimal growth and quality.</p>
      
      <h2>Harvesting at the Right Time</h2>
      <p>Timing is crucial in rice harvesting. Our experienced farmers know exactly when the grains have reached their peak maturity, ensuring maximum aroma and grain length. The harvest is conducted using both traditional and modern methods to preserve the integrity of each grain.</p>
      
      <h2>State-of-the-Art Processing</h2>
      <p>Once harvested, the rice is transported to our modern milling facility where it undergoes rigorous processing. This includes cleaning, de-husking, polishing, and grading. Every batch is tested to meet our strict quality standards.</p>
      
      <h2>Quality Control</h2>
      <p>Our quality control team inspects every batch before packaging. We check for grain length, aroma, moisture content, and overall quality to ensure that only the finest rice reaches our customers.</p>
      
      <h2>Packaging and Distribution</h2>
      <p>The final step is packaging in hygienic conditions using food-grade materials that preserve freshness. Our distribution network ensures that fresh rice reaches households, restaurants, and retailers across Pakistan.</p>
    `,
  },
  {
    id: 2,
    title: "The Art of Cooking Perfect Biryani",
    excerpt: "Master the art of making restaurant-quality biryani at home with our premium basmati rice.",
    image: heroRice,
    date: "January 18, 2026",
    author: "Admin",
    category: "Recipes",
    content: `
      <p>Biryani is more than just a dish – it's a culinary tradition that has been perfected over centuries. The key to a perfect biryani starts with choosing the right rice, and there's no better choice than premium basmati.</p>
      
      <h2>Why Basmati is Essential</h2>
      <p>Basmati rice is the heart of any good biryani. Its long grains, distinctive aroma, and ability to stay separate when cooked make it the ideal choice for this beloved dish.</p>
      
      <h2>Preparation Tips</h2>
      <p>Always soak your basmati rice for at least 30 minutes before cooking. This helps the grains absorb water evenly and cook to perfection. Drain well before adding to your biryani pot.</p>
      
      <h2>The Perfect Ratio</h2>
      <p>For biryani, use slightly less water than you would for regular rice. The steam from the meat and spices will provide additional moisture, keeping the rice fluffy but not mushy.</p>
      
      <h2>Layering Technique</h2>
      <p>The secret to restaurant-quality biryani lies in the layering. Alternate layers of marinated meat and parboiled rice, adding saffron milk and ghee between layers for that authentic taste.</p>
    `,
  },
  {
    id: 3,
    title: "Understanding Different Rice Varieties",
    excerpt: "A comprehensive guide to understanding the differences between Basmati, Sella, and other rice varieties.",
    image: gallery1,
    date: "January 15, 2026",
    author: "Admin",
    category: "Education",
    content: `
      <p>With so many rice varieties available, it can be confusing to choose the right one for your needs. This guide will help you understand the differences and make informed decisions.</p>
      
      <h2>Basmati Rice</h2>
      <p>Known as the king of rice, basmati is prized for its long, slender grains and distinctive aroma. When cooked, the grains elongate significantly and remain separate. Perfect for biryani, pulao, and special occasions.</p>
      
      <h2>Sella Rice</h2>
      <p>Sella (parboiled) rice is processed differently – the paddy is soaked and steamed before milling. This process pushes nutrients from the husk into the grain, making it more nutritious. The grains are firmer and less likely to break.</p>
      
      <h2>Super Basmati</h2>
      <p>A premium variety that offers an excellent balance of aroma, grain length, and cooking properties. It's versatile enough for everyday cooking while maintaining the quality expected of basmati.</p>
      
      <h2>Daily Use Varieties</h2>
      <p>Varieties like IRRI-6 and PK-386 are perfect for everyday cooking. They're affordable, cook well, and are suitable for a variety of dishes.</p>
    `,
  },
  {
    id: 4,
    title: "Sustainable Farming Practices in Pakistan",
    excerpt: "How modern technology and traditional wisdom combine to create sustainable rice farming.",
    image: riceField,
    date: "January 10, 2026",
    author: "Admin",
    category: "Sustainability",
    content: `
      <p>Sustainability is at the heart of modern agriculture. At Oriza Foods, we're committed to practices that protect our environment while producing the highest quality rice.</p>
      
      <h2>Water Conservation</h2>
      <p>Rice cultivation traditionally requires significant water resources. We've implemented modern irrigation techniques that reduce water usage while maintaining crop quality.</p>
      
      <h2>Natural Pest Control</h2>
      <p>We encourage integrated pest management practices that minimize the use of chemical pesticides. This protects the ecosystem and ensures cleaner, healthier rice.</p>
      
      <h2>Supporting Local Farmers</h2>
      <p>Our partnerships with local farmers ensure fair prices and sustainable livelihoods. We provide training and resources to help them adopt better farming practices.</p>
    `,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id)) || blogPosts[0];
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Back button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <header className="mb-8">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Tag size={16} />
                  {post.category}
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-a:text-primary prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                <div className="glass-card rounded-xl overflow-hidden glow-hover">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">{relatedPost.date}</p>
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

export default BlogDetail;
