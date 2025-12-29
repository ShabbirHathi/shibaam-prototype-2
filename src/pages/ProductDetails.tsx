import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { getProductById, getProductsByCategory, getCategoryById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : null;
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mt-2">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button className="mt-4">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = getCategoryById(product.category);
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const allImages = [product.image, ...product.images];

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          {category && (
            <>
              <Link to={`/category/${category.id}`} className="hover:text-foreground">
                {category.name}
              </Link>
              <ChevronRight className="h-4 w-4" />
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            {allImages.length > 1 && (
              <div className="flex gap-3">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {product.bestseller && (
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  Bestseller
                </span>
              )}
              {discount > 0 && (
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Save {discount}%
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-gold text-gold"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-foreground font-medium">
                {product.rating}
              </span>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-20">Size:</span>
                <span className="font-medium text-foreground">{product.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-20">Material:</span>
                <span className="font-medium text-foreground">{product.material}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-20">Availability:</span>
                <span
                  className={`font-medium ${
                    product.inStock ? "text-accent" : "text-destructive"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  className="p-3 hover:bg-muted transition-colors rounded-l-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  className="p-3 hover:bg-muted transition-colors rounded-r-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="flex-1 md:flex-none md:min-w-[200px]"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                Add to Cart
              </Button>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: "Free Shipping", sub: "On ₹1,000+" },
                { icon: Shield, label: "Quality Guaranteed", sub: "Premium materials" },
                { icon: RotateCcw, label: "Easy Returns", sub: "30-day policy" },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="text-center p-4 rounded-xl bg-muted/50"
                >
                  <feature.icon className="h-5 w-5 mx-auto text-primary" />
                  <p className="font-medium text-foreground text-sm mt-2">
                    {feature.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {feature.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
