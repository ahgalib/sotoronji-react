export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  brand: string;
  colors: string[];
  sizes: string[];
  material: string;
  dimensions: string;
  weight: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  featured: boolean;
  isNew: boolean;
  isBestseller: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Floor Mats",
    slug: "floor-mats",
    description: "Traditional handwoven floor mats for your living spaces",
    image: "/images/collection-1.jpg",
    productCount: 24,
  },
  {
    id: "2",
    name: "Wall Hangings",
    slug: "wall-hangings",
    description: "Decorative textile art pieces for your walls",
    image: "/images/collection-2.jpg",
    productCount: 18,
  },
  {
    id: "3",
    name: "Table Runners",
    slug: "table-runners",
    description: "Elegant handwoven runners for dining tables",
    image: "/images/product-6.jpg",
    productCount: 12,
  },
  {
    id: "4",
    name: "Cushion Covers",
    slug: "cushion-covers",
    description: "Comfortable and stylish cushion covers",
    image: "/images/product-5.jpg",
    productCount: 15,
  },
  {
    id: "5",
    name: "Rugs",
    slug: "rugs",
    description: "Premium handcrafted area rugs",
    image: "/images/product-2.jpg",
    productCount: 20,
  },
  {
    id: "6",
    name: "Yoga Mats",
    slug: "yoga-mats",
    description: "Natural fiber yoga and meditation mats",
    image: "/images/lifestyle-2.jpg",
    productCount: 8,
  },
];

export const brands = [
  "Shotorongi Heritage",
  "Nakshi Kantha",
  "Bengal Weaves",
  "Artisan Collection",
  "Rural Crafts",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Heritage Shotorongi Mat",
    slug: "heritage-shotorongi-mat",
    price: 4500,
    originalPrice: 5500,
    description: "This exquisite Heritage Shotorongi Mat is a masterpiece of Bangladeshi craftsmanship, handwoven by skilled artisans from Rangpur using traditional techniques passed down through generations. Each mat features intricate geometric patterns in warm terracotta, mustard, and cream tones that tell stories of our rich cultural heritage. Made from 100% natural cotton and jute fibers, this mat is not only beautiful but also eco-friendly and durable. Perfect for your living room, meditation space, or as a statement piece in any room.",
    shortDescription: "Traditional handwoven mat with geometric patterns",
    images: ["/images/product-1.jpg", "/images/hero-living-room.jpg", "/images/lifestyle-1.jpg"],
    category: "floor-mats",
    brand: "Shotorongi Heritage",
    colors: ["Terracotta", "Mustard", "Cream"],
    sizes: ["4x6 ft", "5x7 ft", "6x9 ft"],
    material: "Cotton & Jute",
    dimensions: "4x6 feet",
    weight: "2.5 kg",
    inStock: true,
    stockCount: 15,
    rating: 4.8,
    reviewCount: 124,
    tags: ["handwoven", "traditional", "floor-mat", "living-room"],
    featured: true,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "2",
    name: "Tribal Pattern Rug",
    slug: "tribal-pattern-rug",
    price: 6800,
    originalPrice: 8000,
    description: "Embrace the spirit of Bangladesh's indigenous communities with this stunning Tribal Pattern Rug. Featuring bold geometric designs inspired by the Chakma and Marma traditions, this rug brings authentic cultural artistry into your home. Hand-knotted using time-honored techniques, each piece takes weeks to complete, ensuring exceptional quality and uniqueness.",
    shortDescription: "Bold tribal geometric design rug",
    images: ["/images/product-2.jpg", "/images/collection-1.jpg"],
    category: "rugs",
    brand: "Bengal Weaves",
    colors: ["Brown", "Beige", "Terracotta"],
    sizes: ["3x5 ft", "4x6 ft", "5x8 ft"],
    material: "Wool & Cotton",
    dimensions: "4x6 feet",
    weight: "4 kg",
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviewCount: 89,
    tags: ["tribal", "rug", "handknotted", "wool"],
    featured: true,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "3",
    name: "Nakshi Wall Tapestry",
    slug: "nakshi-wall-tapestry",
    price: 3200,
    description: "Transform any wall into a gallery of Bangladeshi art with this magnificent Nakshi Wall Tapestry. Inspired by the famous Nakshi Kantha quilting tradition, this piece features delicate embroidery work depicting rural life, nature, and traditional motifs. Each stitch tells a story, making this tapestry not just decor but a piece of living history.",
    shortDescription: "Embroidered wall art with traditional motifs",
    images: ["/images/product-3.jpg", "/images/collection-2.jpg"],
    category: "wall-hangings",
    brand: "Nakshi Kantha",
    colors: ["Mustard", "Cream", "Green"],
    sizes: ["2x3 ft", "3x4 ft", "4x5 ft"],
    material: "Cotton",
    dimensions: "3x4 feet",
    weight: "0.8 kg",
    inStock: true,
    stockCount: 20,
    rating: 4.7,
    reviewCount: 56,
    tags: ["wall-hanging", "nakshi", "embroidery", "art"],
    featured: true,
    isNew: true,
    isBestseller: false,
  },
  {
    id: "4",
    name: "Classic Stripe Runner",
    slug: "classic-stripe-runner",
    price: 1800,
    originalPrice: 2200,
    description: "Add a touch of elegance to your hallway or table with this Classic Stripe Runner. The timeless design features alternating stripes in terracotta and cream, woven with precision to create a clean, sophisticated look. Versatile enough for both traditional and contemporary settings.",
    shortDescription: "Elegant striped runner for tables or hallways",
    images: ["/images/product-4.jpg"],
    category: "table-runners",
    brand: "Artisan Collection",
    colors: ["Terracotta", "Cream"],
    sizes: ["1x4 ft", "1x6 ft", "1x8 ft"],
    material: "Cotton",
    dimensions: "1x6 feet",
    weight: "0.5 kg",
    inStock: true,
    stockCount: 35,
    rating: 4.6,
    reviewCount: 78,
    tags: ["runner", "table", "hallway", "stripes"],
    featured: false,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "5",
    name: "Geometric Cushion Cover",
    slug: "geometric-cushion-cover",
    price: 850,
    description: "Elevate your sofa or bed with these beautiful Geometric Cushion Covers. Featuring contemporary interpretations of traditional Bangladeshi patterns, these covers blend heritage with modern design sensibilities. Soft to touch yet durable, they come with a hidden zipper for easy care.",
    shortDescription: "Modern geometric pattern cushion cover",
    images: ["/images/product-5.jpg"],
    category: "cushion-covers",
    brand: "Shotorongi Heritage",
    colors: ["Mustard", "Cream", "Gray"],
    sizes: ["16x16 in", "18x18 in", "20x20 in"],
    material: "Cotton",
    dimensions: "18x18 inches",
    weight: "0.2 kg",
    inStock: true,
    stockCount: 50,
    rating: 4.5,
    reviewCount: 145,
    tags: ["cushion", "pillow", "geometric", "modern"],
    featured: false,
    isNew: true,
    isBestseller: false,
  },
  {
    id: "6",
    name: "Festive Table Runner",
    slug: "festive-table-runner",
    price: 2400,
    description: "Make every meal a celebration with this Festive Table Runner. Rich terracotta and beige tones combined with intricate border patterns make this piece perfect for special occasions or everyday elegance. The dense weave ensures durability while maintaining a luxurious feel.",
    shortDescription: "Ornate table runner for special occasions",
    images: ["/images/product-6.jpg"],
    category: "table-runners",
    brand: "Bengal Weaves",
    colors: ["Terracotta", "Beige", "Gold"],
    sizes: ["1x4 ft", "1x6 ft", "1x8 ft"],
    material: "Cotton & Silk",
    dimensions: "1x6 feet",
    weight: "0.6 kg",
    inStock: true,
    stockCount: 18,
    rating: 4.8,
    reviewCount: 42,
    tags: ["runner", "table", "festive", "silk"],
    featured: true,
    isNew: false,
    isBestseller: false,
  },
  {
    id: "7",
    name: "Natural Yoga Mat",
    slug: "natural-yoga-mat",
    price: 2800,
    description: "Connect with nature during your practice with this Natural Yoga Mat. Handwoven from organic cotton and jute, this mat provides excellent grip and cushioning while being completely eco-friendly. The natural fibers are breathable and antimicrobial, making it perfect for yoga and meditation.",
    shortDescription: "Eco-friendly handwoven yoga mat",
    images: ["/images/lifestyle-2.jpg"],
    category: "yoga-mats",
    brand: "Rural Crafts",
    colors: ["Natural", "Cream", "Light Brown"],
    sizes: ["2x6 ft", "2.5x6 ft"],
    material: "Organic Cotton & Jute",
    dimensions: "2x6 feet",
    weight: "1.5 kg",
    inStock: true,
    stockCount: 25,
    rating: 4.7,
    reviewCount: 67,
    tags: ["yoga", "meditation", "eco-friendly", "natural"],
    featured: false,
    isNew: true,
    isBestseller: false,
  },
  {
    id: "8",
    name: "Royal Bengal Rug",
    slug: "royal-bengal-rug",
    price: 12000,
    originalPrice: 15000,
    description: "The crown jewel of our collection, the Royal Bengal Rug is a testament to the finest Bangladeshi craftsmanship. This luxurious piece features an elaborate central medallion surrounded by intricate floral and geometric borders. Made with premium wool and natural dyes, it develops a beautiful patina over time.",
    shortDescription: "Premium luxury rug with medallion design",
    images: ["/images/collection-1.jpg", "/images/hero-living-room.jpg"],
    category: "rugs",
    brand: "Shotorongi Heritage",
    colors: ["Burgundy", "Gold", "Cream", "Navy"],
    sizes: ["6x9 ft", "8x10 ft", "9x12 ft"],
    material: "Hand-spun Wool",
    dimensions: "6x9 feet",
    weight: "8 kg",
    inStock: true,
    stockCount: 5,
    rating: 5.0,
    reviewCount: 28,
    tags: ["luxury", "rug", "wool", "medallion", "premium"],
    featured: true,
    isNew: false,
    isBestseller: true,
  },
  {
    id: "9",
    name: "Minimalist Wall Art",
    slug: "minimalist-wall-art",
    price: 2600,
    description: "For those who appreciate understated elegance, this Minimalist Wall Art piece offers a contemporary take on traditional weaving. Clean lines and a muted color palette make it perfect for modern interiors while still honoring artisanal techniques.",
    shortDescription: "Contemporary woven wall decoration",
    images: ["/images/collection-2.jpg"],
    category: "wall-hangings",
    brand: "Artisan Collection",
    colors: ["Off-White", "Beige", "Gray"],
    sizes: ["2x2 ft", "3x3 ft", "2x4 ft"],
    material: "Cotton & Linen",
    dimensions: "3x3 feet",
    weight: "0.6 kg",
    inStock: true,
    stockCount: 12,
    rating: 4.6,
    reviewCount: 34,
    tags: ["wall-art", "minimalist", "modern", "contemporary"],
    featured: false,
    isNew: true,
    isBestseller: false,
  },
  {
    id: "10",
    name: "Boho Floor Cushion Mat",
    slug: "boho-floor-cushion-mat",
    price: 3500,
    description: "Create a cozy floor seating area with this Boho Floor Cushion Mat. Large enough for comfortable seating, it features playful patterns and fringe details that add a bohemian touch to any space. Perfect for casual gatherings, reading nooks, or meditation corners.",
    shortDescription: "Large bohemian style floor seating mat",
    images: ["/images/lifestyle-1.jpg"],
    category: "floor-mats",
    brand: "Rural Crafts",
    colors: ["Multi-color", "Earth Tones"],
    sizes: ["4x4 ft", "5x5 ft"],
    material: "Cotton",
    dimensions: "4x4 feet",
    weight: "3 kg",
    inStock: true,
    stockCount: 10,
    rating: 4.8,
    reviewCount: 52,
    tags: ["boho", "floor-seating", "cushion", "casual"],
    featured: false,
    isNew: false,
    isBestseller: false,
  },
  {
    id: "11",
    name: "Heritage Bedspread",
    slug: "heritage-bedspread",
    price: 8500,
    originalPrice: 10000,
    description: "Transform your bedroom into a sanctuary with this Heritage Bedspread. This large-format piece showcases the full breadth of Shotorongi artistry with its complex patterns and rich color palette. Lightweight yet warm, it's perfect for all seasons.",
    shortDescription: "Large traditional bedspread",
    images: ["/images/product-1.jpg", "/images/hero-living-room.jpg"],
    category: "floor-mats",
    brand: "Nakshi Kantha",
    colors: ["Terracotta", "Indigo", "Cream"],
    sizes: ["Queen", "King"],
    material: "Cotton",
    dimensions: "90x100 inches",
    weight: "2 kg",
    inStock: true,
    stockCount: 7,
    rating: 4.9,
    reviewCount: 38,
    tags: ["bedspread", "bedroom", "large", "heritage"],
    featured: true,
    isNew: false,
    isBestseller: false,
  },
  {
    id: "12",
    name: "Artisan Placemat Set",
    slug: "artisan-placemat-set",
    price: 1200,
    description: "Elevate your dining experience with this set of 6 Artisan Placemats. Each placemat features subtle variations in pattern, celebrating the handmade nature of these pieces. Stain-resistant and easy to clean, they're practical as well as beautiful.",
    shortDescription: "Set of 6 handwoven placemats",
    images: ["/images/product-6.jpg"],
    category: "table-runners",
    brand: "Bengal Weaves",
    colors: ["Cream", "Brown"],
    sizes: ["12x18 in (Set of 6)"],
    material: "Jute & Cotton",
    dimensions: "12x18 inches each",
    weight: "0.8 kg",
    inStock: true,
    stockCount: 30,
    rating: 4.5,
    reviewCount: 92,
    tags: ["placemats", "dining", "set", "practical"],
    featured: false,
    isNew: false,
    isBestseller: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function filterProducts(
  productList: Product[],
  filters: {
    category?: string;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
    search?: string;
  }
): Product[] {
  return productList.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    if (filters.inStock && !product.inStock) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });
}

export function sortProducts(
  productList: Product[],
  sortBy: "price-low" | "price-high" | "rating" | "newest" | "bestseller"
): Product[] {
  const sorted = [...productList];
  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "newest":
      return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    case "bestseller":
      return sorted.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    default:
      return sorted;
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
