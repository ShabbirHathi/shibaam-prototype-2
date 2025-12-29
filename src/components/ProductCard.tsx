import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden shadow-soft card-hover",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.bestseller && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
              Bestseller
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full shadow-lg bg-background/90 backdrop-blur-sm hover:bg-background"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-muted-foreground mt-1">
          {product.size} • {product.material}
        </p>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-foreground">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
