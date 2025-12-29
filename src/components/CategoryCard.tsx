import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  className?: string;
  size?: "default" | "large";
}

export const CategoryCard = ({
  category,
  className,
  size = "default",
}: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl",
        size === "large" ? "aspect-[4/3] md:aspect-[3/2]" : "aspect-square",
        className
      )}
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground">
            {category.name}
          </h3>
          <p className="text-primary-foreground/80 text-sm mt-1 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center gap-2 mt-3 text-primary-foreground/90 text-sm font-medium">
            <span>Shop {category.productCount} products</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};
