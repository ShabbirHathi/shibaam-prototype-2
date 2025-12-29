import { useParams, Link } from "react-router-dom";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory, getCategoryById, categories } from "@/data/products";

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? getCategoryById(categoryId) : null;
  const products = categoryId ? getProductsByCategory(categoryId) : [];

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Category Not Found
          </h1>
          <p className="text-muted-foreground mt-2">
            The category you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button className="mt-4">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        <div className="container relative h-full mx-auto px-4 flex flex-col justify-end pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/80 mb-4">
            <Link to="/" className="hover:text-primary-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-foreground">{category.name}</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            {category.name}
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-border bg-background sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat.id === categoryId
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing{" "}
              <span className="text-foreground font-medium">
                {products.length} products
              </span>
            </p>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No products found in this category.
              </p>
              <Link to="/">
                <Button className="mt-4">Browse All Products</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Category;
