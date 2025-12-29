import { useLocation, Link, Navigate } from "react-router-dom";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  if (!orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success Animation */}
        <div className="relative mb-8">
          <div className="h-28 w-28 mx-auto rounded-full bg-accent/10 flex items-center justify-center animate-scale-in">
            <CheckCircle className="h-14 w-14 text-accent" />
          </div>
          <div className="absolute inset-0 h-28 w-28 mx-auto rounded-full border-2 border-accent/20 animate-ping" />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground animate-fade-up">
          Order Placed Successfully!
        </h1>

        <p className="text-muted-foreground mt-4 animate-fade-up stagger-1">
          Thank you for shopping with Artisan Rugs & Carpets. Your order has
          been confirmed and will be shipped soon.
        </p>

        {/* Order Details */}
        <div className="mt-8 p-6 bg-card rounded-2xl shadow-soft animate-fade-up stagger-2">
          <div className="flex items-center justify-center gap-3 text-accent mb-4">
            <Package className="h-5 w-5" />
            <span className="font-medium">Order Confirmed</span>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">Order ID</p>
            <p className="font-mono font-semibold text-lg text-foreground mt-1">
              {orderId}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-accent">Confirmed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Delivery</span>
              <span className="font-medium text-foreground">5-7 Business Days</span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="mt-8 p-6 bg-muted/50 rounded-2xl text-left animate-fade-up stagger-3">
          <h3 className="font-display font-semibold text-foreground mb-4">
            What happens next?
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium flex-shrink-0">
                1
              </span>
              <span>
                You'll receive an order confirmation email with all the details.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium flex-shrink-0">
                2
              </span>
              <span>
                Once shipped, you'll get tracking information via email and SMS.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium flex-shrink-0">
                3
              </span>
              <span>
                Your beautiful rug will arrive at your doorstep within 5-7
                business days.
              </span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-4">
          <Link to="/">
            <Button variant="hero" size="lg">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
