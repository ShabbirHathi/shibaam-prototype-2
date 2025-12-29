import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      formData.username === ADMIN_CREDENTIALS.username &&
      formData.password === ADMIN_CREDENTIALS.password
    ) {
      localStorage.setItem("isAdminLoggedIn", "true");
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in to the admin panel.",
      });
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        {/* Back to Store */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Store
        </Link>

        <div className="bg-card rounded-2xl shadow-card p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Admin Login
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="username">Username</Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-muted/50 rounded-xl">
            <p className="text-xs text-muted-foreground text-center mb-2">
              Demo Credentials
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Username:</span>{" "}
                <code className="font-mono text-foreground">admin</code>
              </div>
              <div>
                <span className="text-muted-foreground">Password:</span>{" "}
                <code className="font-mono text-foreground">admin123</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
