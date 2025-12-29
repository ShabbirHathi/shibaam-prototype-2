export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  size: string;
  material: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  featured?: boolean;
  bestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "persian",
    name: "Persian Rugs",
    description: "Timeless elegance with intricate traditional patterns",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
    productCount: 24,
  },
  {
    id: "modern",
    name: "Modern Rugs",
    description: "Contemporary designs for the modern home",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    productCount: 32,
  },
  {
    id: "shag",
    name: "Shag Rugs",
    description: "Plush comfort with luxurious texture",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    productCount: 18,
  },
  {
    id: "outdoor",
    name: "Outdoor Rugs",
    description: "Weather-resistant beauty for patios and decks",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    productCount: 15,
  },
  {
    id: "runner",
    name: "Runner Rugs",
    description: "Perfect for hallways and entryways",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80",
    productCount: 20,
  },
  {
    id: "kids",
    name: "Kids Rugs",
    description: "Fun and playful designs for children's spaces",
    image: "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?w=600&q=80",
    productCount: 12,
  },
];

export const products: Product[] = [
  // Persian Rugs
  {
    id: "persian-001",
    name: "Royal Isfahan Medallion",
    price: 2499,
    originalPrice: 2999,
    description: "Hand-knotted Persian rug featuring an exquisite central medallion design with intricate floral motifs. Crafted by master artisans using traditional techniques passed down through generations. The rich color palette of deep burgundy, navy, and gold creates a stunning focal point for any room.",
    category: "persian",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    ],
    size: "8' x 10'",
    material: "100% Wool",
    inStock: true,
    rating: 4.9,
    reviews: 127,
    featured: true,
    bestseller: true,
  },
  {
    id: "persian-002",
    name: "Tabriz Garden Paradise",
    price: 3299,
    description: "A masterpiece of Persian craftsmanship featuring the classic garden design. Hand-woven with premium New Zealand wool on a cotton foundation. The intricate pattern depicts flowing water, cypress trees, and blooming flowers.",
    category: "persian",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    ],
    size: "9' x 12'",
    material: "New Zealand Wool",
    inStock: true,
    rating: 4.8,
    reviews: 89,
    featured: true,
  },
  {
    id: "persian-003",
    name: "Kashan Silk Elegance",
    price: 4599,
    description: "Luxurious silk Persian rug with exceptional detail and luminous sheen. Features classic Kashan design with central medallion surrounded by elaborate arabesques.",
    category: "persian",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
    images: [],
    size: "6' x 9'",
    material: "Pure Silk",
    inStock: true,
    rating: 5.0,
    reviews: 45,
  },
  // Modern Rugs
  {
    id: "modern-001",
    name: "Geometric Minimalist",
    price: 799,
    originalPrice: 999,
    description: "Clean lines and bold geometric patterns define this contemporary masterpiece. The neutral color palette with subtle texture variations adds depth without overwhelming your space. Perfect for modern and Scandinavian interiors.",
    category: "modern",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
    size: "5' x 7'",
    material: "Wool Blend",
    inStock: true,
    rating: 4.7,
    reviews: 234,
    featured: true,
    bestseller: true,
  },
  {
    id: "modern-002",
    name: "Abstract Watercolor",
    price: 1199,
    description: "Artistic abstract design reminiscent of watercolor paintings. Soft gradients of blue, teal, and cream create a serene atmosphere. Machine-woven with high-quality synthetic fibers for durability.",
    category: "modern",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    images: [],
    size: "8' x 10'",
    material: "Polypropylene",
    inStock: true,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "modern-003",
    name: "Nordic Lines",
    price: 649,
    description: "Scandinavian-inspired rug with clean parallel lines in muted earth tones. Low pile height makes it perfect for high-traffic areas while maintaining a sophisticated look.",
    category: "modern",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    images: [],
    size: "6' x 8'",
    material: "Cotton Blend",
    inStock: true,
    rating: 4.5,
    reviews: 98,
  },
  // Shag Rugs
  {
    id: "shag-001",
    name: "Cloud Nine Ultra Soft",
    price: 599,
    description: "Sink your feet into pure luxury with this ultra-plush shag rug. The 2-inch pile height provides exceptional comfort while the neutral ivory tone complements any décor style.",
    category: "shag",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    images: [],
    size: "5' x 7'",
    material: "Polyester",
    inStock: true,
    rating: 4.8,
    reviews: 312,
    bestseller: true,
  },
  {
    id: "shag-002",
    name: "Moroccan Diamond Shag",
    price: 899,
    description: "Bohemian-inspired shag rug featuring a classic Moroccan diamond pattern. Thick, cozy pile in cream and charcoal creates a statement piece that's as comfortable as it is stylish.",
    category: "shag",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    images: [],
    size: "8' x 10'",
    material: "Polypropylene",
    inStock: true,
    rating: 4.7,
    reviews: 178,
    featured: true,
  },
  // Outdoor Rugs
  {
    id: "outdoor-001",
    name: "Coastal Stripe",
    price: 349,
    originalPrice: 449,
    description: "Bring resort-style elegance to your outdoor space with this durable striped rug. UV-resistant and easy to clean, it withstands sun, rain, and heavy foot traffic while maintaining its vibrant colors.",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    images: [],
    size: "6' x 9'",
    material: "Polypropylene",
    inStock: true,
    rating: 4.6,
    reviews: 203,
    bestseller: true,
  },
  {
    id: "outdoor-002",
    name: "Tropical Palm",
    price: 429,
    description: "Create a tropical oasis with this palm leaf patterned outdoor rug. Fade-resistant and mold-resistant, perfect for covered patios, pool areas, and three-season porches.",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    images: [],
    size: "5' x 8'",
    material: "Synthetic Fiber",
    inStock: true,
    rating: 4.5,
    reviews: 89,
  },
  // Runner Rugs
  {
    id: "runner-001",
    name: "Heritage Medallion Runner",
    price: 299,
    description: "Traditional medallion pattern runner perfect for hallways and entryways. Rich jewel tones of ruby, sapphire, and gold create a warm welcome for your home.",
    category: "runner",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80",
    images: [],
    size: "2'6\" x 10'",
    material: "Wool",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    featured: true,
  },
  {
    id: "runner-002",
    name: "Modern Stripe Runner",
    price: 199,
    description: "Contemporary striped runner in neutral tones. Durable construction with non-slip backing makes it ideal for high-traffic areas like hallways and kitchens.",
    category: "runner",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80",
    images: [],
    size: "2' x 8'",
    material: "Cotton Blend",
    inStock: true,
    rating: 4.4,
    reviews: 234,
  },
  // Kids Rugs
  {
    id: "kids-001",
    name: "Enchanted Forest",
    price: 249,
    description: "Magical woodland scene rug featuring friendly forest animals and colorful trees. Soft, stain-resistant pile is perfect for playrooms and nurseries.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?w=600&q=80",
    images: [],
    size: "5' x 7'",
    material: "Nylon",
    inStock: true,
    rating: 4.9,
    reviews: 287,
    bestseller: true,
  },
  {
    id: "kids-002",
    name: "Rainbow Road Play Rug",
    price: 179,
    description: "Interactive play rug featuring colorful roads and cityscape. Spark imagination during playtime while protecting floors. Easy to clean and extra durable.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?w=600&q=80",
    images: [],
    size: "4' x 6'",
    material: "Polyester",
    inStock: true,
    rating: 4.8,
    reviews: 198,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter((product) => product.bestseller);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};
