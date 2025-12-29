import {
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { AdminSidebar } from "@/components/AdminSidebar";

const stats = [
  {
    name: "Total Revenue",
    value: "₹4,52,890",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Total Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Total Products",
    value: "48",
    change: "+2",
    trend: "up",
    icon: Package,
    color: "bg-gold/10 text-gold",
  },
  {
    name: "Conversion Rate",
    value: "3.2%",
    change: "-0.4%",
    trend: "down",
    icon: TrendingUp,
    color: "bg-sage/10 text-sage",
  },
];

const recentOrders = [
  {
    id: "ORD-2024-004",
    customer: "Sneha Reddy",
    product: "Tabriz Garden Paradise",
    amount: "₹3,299",
    status: "pending",
  },
  {
    id: "ORD-2024-003",
    customer: "Amit Kumar",
    product: "Enchanted Forest",
    amount: "₹298",
    status: "confirmed",
  },
  {
    id: "ORD-2024-002",
    customer: "Priya Patel",
    product: "2 items",
    amount: "₹2,296",
    status: "shipped",
  },
  {
    id: "ORD-2024-001",
    customer: "Rahul Sharma",
    product: "Royal Isfahan Medallion",
    amount: "₹2,499",
    status: "delivered",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-gold/10 text-gold";
    case "confirmed":
      return "bg-primary/10 text-primary";
    case "shipped":
      return "bg-accent/10 text-accent";
    case "delivered":
      return "bg-sage/10 text-sage";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />

      <main className="lg:ml-72 pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's what's happening with your store.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="bg-card rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === "up" ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUp className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Recent Orders
              </h2>
            </div>
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
                      Product
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Amount
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-medium text-foreground">
                          {order.id}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground">
                          {order.customer}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">
                          {order.product}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-foreground">
                          {order.amount}
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
