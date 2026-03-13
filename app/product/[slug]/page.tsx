"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import {
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
  categories,
  Product,
} from "@/lib/products";
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus,
  ChevronRight,
  Home,
  Check,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const foundProduct = getProductBySlug(resolvedParams.slug);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
      setRelatedProducts(getRelatedProducts(foundProduct));
    }
  }, [resolvedParams.slug]);

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </main>
    );
  }

  const category = categories.find((c) => c.slug === product.category);
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity, selectedColor, selectedSize);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    router.push("/cart");
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            {category && (
              <>
                <ChevronRight className="w-4 h-4" />
                <Link
                  href={`/shop?category=${category.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate max-w-[150px] md:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground">New Arrival</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>
                  )}
                  {product.originalPrice && (
                    <Badge variant="secondary">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all",
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent hover:border-muted-foreground/50"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium">{product.brand}</p>
                <h1 className="font-serif text-3xl md:text-4xl mt-2 text-balance">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviewCount} reviews)
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      product.inStock ? "text-green-600" : "text-destructive"
                    )}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Color Selection */}
              <div className="space-y-3">
                <p className="font-medium">
                  Color: <span className="text-muted-foreground font-normal">{selectedColor}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm transition-all",
                        selectedColor === color
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-muted-foreground"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <p className="font-medium">
                  Size: <span className="text-muted-foreground font-normal">{selectedSize}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm transition-all",
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-muted-foreground"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <p className="font-medium">Quantity</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-r-none"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-l-none"
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.stockCount} items available
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  disabled={!product.inStock || isAdding}
                >
                  {isAdding ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                >
                  Buy Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-4"
                  onClick={toggleWishlist}
                >
                  <Heart
                    className={cn(
                      "w-5 h-5",
                      isWishlisted && "fill-primary text-primary"
                    )}
                  />
                </Button>
                <Button size="lg" variant="outline" className="px-4">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium mt-2">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders over BDT 2000</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium mt-2">Quality Guarantee</p>
                  <p className="text-xs text-muted-foreground">100% Authentic</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <RotateCcw className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium mt-2">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">7 Days Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 gap-8">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3"
              >
                Reviews ({product.reviewCount})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="font-medium">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-medium">{product.weight}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Brand</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{category?.name}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">SKU</span>
                    <span className="font-medium">SHT-{product.id.padStart(4, "0")}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">{product.rating}</div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {product.reviewCount} reviews
                    </p>
                  </div>
                </div>
                {/* Sample Reviews */}
                <div className="space-y-4 border-t pt-6">
                  {[
                    {
                      name: "Fatima Rahman",
                      rating: 5,
                      date: "2 weeks ago",
                      comment: "Absolutely stunning craftsmanship! The colors are exactly as shown and the quality is exceptional.",
                    },
                    {
                      name: "Karim Ahmed",
                      rating: 5,
                      date: "1 month ago",
                      comment: "Beautiful piece that adds so much character to our living room. Highly recommend!",
                    },
                    {
                      name: "Sarah Begum",
                      rating: 4,
                      date: "1 month ago",
                      comment: "Great quality and fast delivery. The mat is perfect for our meditation room.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="p-4 bg-card rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-3 h-3",
                                i < review.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted-foreground"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-3">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} href={`/product/${relProduct.slug}`} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={relProduct.images[0]}
                      alt={relProduct.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">
                      {relProduct.name}
                    </h3>
                    <p className="text-primary font-semibold mt-1">
                      {formatPrice(relProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
