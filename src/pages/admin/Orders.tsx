import { useState } from "react";
import { Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminSidebar } from "@/components/AdminSidebar";
import { orders, Order } from "@/data/orders";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return "bg-gold/10 text-gold";
    case "confirmed":
      return "bg-primary/10 text-primary";
    case "shipped":
      return "bg-accent/10 text-accent";
    case "delivered":
      return "bg-sage/10 text-sage";
    case "cancelled":
      return "bg-destructive/10 text-destructive";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />

      <main className="lg:ml-72 pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Orders
            </h1>
            <p className="text-muted-foreground mt-1">
              Track and manage customer orders
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders by ID or customer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Orders Table */}
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Order ID
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Customer
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Items
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Amount
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Status
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Date
                    </th>
                    <th className="text-right text-sm font-medium text-muted-foreground px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-medium text-foreground">
                          {order.id}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {order.customerName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {order.email}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">
                          {order.items.length} item
                          {order.items.length > 1 ? "s" : ""}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-foreground">
                          ₹{order.total.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleViewOrder(order)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredOrders.length} of {orders.length} orders
          </p>
        </div>
      </main>

      {/* Order Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display">
              Order Details - {selectedOrder?.id}
            </DialogTitle>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-6 py-4">
              {/* Status */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Status:</span>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                    selectedOrder.status
                  )}`}
                >
                  {selectedOrder.status}
                </span>
              </div>

              {/* Customer Info */}
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-medium text-foreground mb-3">
                  Customer Information
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Name:</span>
                    <p className="font-medium text-foreground">
                      {selectedOrder.customerName}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <p className="font-medium text-foreground">
                      {selectedOrder.email}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Phone:</span>
                    <p className="font-medium text-foreground">
                      {selectedOrder.phone}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Order Date:</span>
                    <p className="font-medium text-foreground">
                      {new Date(selectedOrder.createdAt).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-medium text-foreground mb-3">
                  Shipping Address
                </h4>
                <p className="text-sm text-foreground">
                  {selectedOrder.address}
                  <br />
                  {selectedOrder.city}, {selectedOrder.state}{" "}
                  {selectedOrder.pincode}
                </p>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="font-medium text-foreground mb-3">
                  Order Items
                </h4>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 bg-muted/50 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {item.productName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium text-foreground">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-border pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">
                    ₹{selectedOrder.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">
                    {selectedOrder.shipping === 0
                      ? "Free"
                      : `₹${selectedOrder.shipping}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold text-foreground">
                    ₹{selectedOrder.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Orders;
