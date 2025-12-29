import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminSidebar } from "@/components/AdminSidebar";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Products = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = () => {
    setIsAddModalOpen(true);
  };

  const handleEditProduct = (productId: string) => {
    setSelectedProduct(productId);
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = (productId: string) => {
    toast({
      title: "Product Deleted",
      description: "This is a demo. Product deletion would happen here.",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />

      <main className="lg:ml-72 pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                Products
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your product inventory
              </p>
            </div>
            <Button variant="hero" onClick={handleAddProduct}>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Products Table */}
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Product
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Category
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Price
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Status
                    </th>
                    <th className="text-right text-sm font-medium text-muted-foreground px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {product.size}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground capitalize">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-foreground">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            product.inStock
                              ? "bg-accent/10 text-accent"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditProduct(product.id)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
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
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
      </main>

      {/* Add Product Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display">Add New Product</DialogTitle>
            <DialogDescription>
              This is a demo modal. In a real application, you would add form
              fields here to create a new product.
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 text-center text-muted-foreground">
            Product creation form would go here
          </div>
          <div className="flex justify-end gap-3 px-6 pb-6">
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="hero"
              onClick={() => {
                toast({
                  title: "Product Added",
                  description: "This is a demo. Product would be saved here.",
                });
                setIsAddModalOpen(false);
              }}
            >
              Add Product
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Product Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display">Edit Product</DialogTitle>
            <DialogDescription>
              This is a demo modal. In a real application, you would edit the
              product details here.
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 text-center text-muted-foreground">
            Product edit form would go here
          </div>
          <div className="flex justify-end gap-3 px-6 pb-6">
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="hero"
              onClick={() => {
                toast({
                  title: "Product Updated",
                  description: "This is a demo. Changes would be saved here.",
                });
                setIsEditModalOpen(false);
              }}
            >
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
