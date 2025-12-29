import { Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal, shipping, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground/30" />
          <h1 className="font-display text-2xl font-bold text-foreground mt-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Looks like you haven't added any rugs to your cart yet. Explore our
            collection to find the perfect piece for your home.
          </p>
          <Link to="/">
            <Button variant="hero" className="mt-6">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Shopping Cart</span>
        </nav>

        <h1 className="font-display text-3xl font-bold text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 md:gap-6 p-4 md:p-6 bg-card rounded-2xl shadow-soft"
              >
                <Link
                  to={`/product/${item.product.id}`}
                  className="flex-shrink-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-28 w-28 md:h-32 md:w-32 rounded-xl object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.product.size} • {item.product.material}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        className="p-2.5 hover:bg-muted transition-colors rounded-l-lg"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="p-2.5 hover:bg-muted transition-colors rounded-r-lg"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-muted-foreground">
                          ₹{item.product.price.toLocaleString()} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl shadow-soft p-6 sticky top-24">
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Subtotal ({items.reduce((sum, i) => sum + i.quantity, 0)}{" "}
                    items)
                  </span>
                  <span className="font-medium text-foreground">
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">
                    {shipping === 0 ? (
                      <span className="text-accent">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                    Add ₹{(1000 - subtotal).toLocaleString()} more to get free
                    shipping!
                  </p>
                )}
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-xl font-bold text-foreground">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <Link to="/checkout">
                <Button variant="hero" className="w-full mt-6" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/">
                <Button variant="ghost" className="w-full mt-2">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
