export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

export const orders: Order[] = [
  {
    id: "ORD-2024-001",
    customerName: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    address: "123, Green Park Colony",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110016",
    items: [
      {
        productId: "persian-001",
        productName: "Royal Isfahan Medallion",
        price: 2499,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=100&q=80",
      },
    ],
    subtotal: 2499,
    shipping: 0,
    total: 2499,
    status: "delivered",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "ORD-2024-002",
    customerName: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    address: "456, Satellite Road",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380015",
    items: [
      {
        productId: "modern-001",
        productName: "Geometric Minimalist",
        price: 799,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&q=80",
      },
      {
        productId: "shag-001",
        productName: "Cloud Nine Ultra Soft",
        price: 599,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=100&q=80",
      },
    ],
    subtotal: 2197,
    shipping: 99,
    total: 2296,
    status: "shipped",
    createdAt: "2024-01-18T14:45:00Z",
  },
  {
    id: "ORD-2024-003",
    customerName: "Amit Kumar",
    email: "amit.kumar@email.com",
    phone: "+91 76543 21098",
    address: "789, MG Road",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    items: [
      {
        productId: "kids-001",
        productName: "Enchanted Forest",
        price: 249,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?w=100&q=80",
      },
    ],
    subtotal: 249,
    shipping: 49,
    total: 298,
    status: "confirmed",
    createdAt: "2024-01-20T09:15:00Z",
  },
  {
    id: "ORD-2024-004",
    customerName: "Sneha Reddy",
    email: "sneha.reddy@email.com",
    phone: "+91 65432 10987",
    address: "321, Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500033",
    items: [
      {
        productId: "persian-002",
        productName: "Tabriz Garden Paradise",
        price: 3299,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&q=80",
      },
    ],
    subtotal: 3299,
    shipping: 0,
    total: 3299,
    status: "pending",
    createdAt: "2024-01-22T16:00:00Z",
  },
  {
    id: "ORD-2024-005",
    customerName: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 54321 09876",
    address: "654, Civil Lines",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302006",
    items: [
      {
        productId: "outdoor-001",
        productName: "Coastal Stripe",
        price: 349,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80",
      },
      {
        productId: "runner-001",
        productName: "Heritage Medallion Runner",
        price: 299,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=100&q=80",
      },
    ],
    subtotal: 997,
    shipping: 79,
    total: 1076,
    status: "delivered",
    createdAt: "2024-01-10T11:30:00Z",
  },
];

export const getOrderById = (id: string): Order | undefined => {
  return orders.find((order) => order.id === id);
};

export const getOrdersByStatus = (status: Order["status"]): Order[] => {
  return orders.filter((order) => order.status === status);
};
