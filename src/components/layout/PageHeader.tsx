import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; path: string }[];
}

const PageHeader = ({ title, subtitle, breadcrumbs }: PageHeaderProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <nav className="flex items-center justify-center gap-2 text-sm mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.path} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-muted-foreground" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary">{crumb.name}</span>
                  ) : (
                    <Link to={crumb.path} className="text-muted-foreground hover:text-primary transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
