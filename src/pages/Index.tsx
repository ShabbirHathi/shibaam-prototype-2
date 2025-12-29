import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Sparkles, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { categories, getFeaturedProducts, getBestsellerProducts } from "@/data/products";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over ₹1,000",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Handpicked premium rugs",
  },
  {
    icon: Sparkles,
    title: "Artisan Crafted",
    description: "Traditional techniques",
  },
  {
    icon: Repeat,
    title: "Easy Returns",
    description: "30-day return policy",
  },
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const bestsellers = getBestsellerProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=1920&q=80"
            alt="Luxury Persian rug in elegant living room"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              New Collection 2024
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up stagger-1">
              Transform Your
              <br />
              <span className="text-primary">Living Space</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg animate-fade-up stagger-2">
              Discover our curated collection of handcrafted rugs and premium
              carpets, bringing timeless elegance to every corner of your home.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up stagger-3">
              <Link to="/category/persian">
                <Button variant="hero" size="xl">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/category/modern">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Explore Modern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-secondary py-6 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Shop by Category
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From traditional Persian masterpieces to contemporary designs,
              find the perfect rug for every room
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.slice(0, 6).map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                size={index < 2 ? "large" : "default"}
                className={index < 2 ? "md:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Featured Collection
              </h2>
              <p className="text-muted-foreground mt-2">
                Handpicked favorites from our artisan collection
              </p>
            </div>
            <Link
              to="/category/persian"
              className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/category/persian">
              <Button variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Most Popular
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Bestselling Rugs
              </h2>
            </div>
            <Link
              to="/category/modern"
              className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Shop All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Need Help Choosing?
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Our rug experts are here to help you find the perfect piece for your
            space. Get personalized recommendations based on your style and needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button variant="hero" size="lg">
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              View Size Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
