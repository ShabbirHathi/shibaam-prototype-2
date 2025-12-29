import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
];

export const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/admin/dashboard" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-sidebar-foreground">
              ARTISAN
            </span>
            <span className="text-[9px] tracking-[0.25em] text-sidebar-foreground/60 uppercase -mt-0.5">
              Admin Panel
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>

        <Link to="/" onClick={() => setIsOpen(false)}>
          <Button variant="outline" className="w-full mt-3" size="sm">
            View Store
          </Button>
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border">
        <div className="flex items-center justify-between p-4">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <span className="font-display text-lg font-bold text-sidebar-foreground">
              ARTISAN Admin
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <aside className="lg:hidden fixed top-0 left-0 z-50 w-72 h-full bg-sidebar flex flex-col">
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 z-40 w-72 h-full bg-sidebar border-r border-sidebar-border flex-col">
        <SidebarContent />
      </aside>
    </>
  );
};
