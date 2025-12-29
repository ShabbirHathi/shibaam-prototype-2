import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export const CartDrawer = () => {
  const {
    items,
    isOpen,
    setCartOpen,
    removeItem,
    updateQuantity,
    subtotal,
    shipping,
    total,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm animate-fade-in"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-2xl animate-slide-in-right">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl font-semibold">Your Cart</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-lg font-medium text-foreground">
                  Your cart is empty
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Add some beautiful rugs to get started
                </p>
                <Button
                  variant="default"
                  className="mt-6"
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-muted/30 rounded-xl"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-24 w-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm line-clamp-1">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.product.size}
                      </p>
                      <p className="font-semibold text-foreground mt-2">
                        ₹{item.product.price.toLocaleString()}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            className="p-1.5 hover:bg-muted transition-colors rounded-l-lg"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1.5 hover:bg-muted transition-colors rounded-r-lg"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border px-6 py-4 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-accent">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Free shipping on orders above ₹1,000
                  </p>
                )}
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-bold text-lg">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Link to="/cart" onClick={() => setCartOpen(false)}>
                  <Button variant="outline" className="w-full">
                    View Cart
                  </Button>
                </Link>
                <Link to="/checkout" onClick={() => setCartOpen(false)}>
                  <Button variant="hero" className="w-full">
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
