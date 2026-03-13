"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, ShoppingBag, Star, Grid3X3, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShopProductGridProps {
  products: Product[];
  title?: string;
}

type SortOption = "price-low" | "price-high" | "rating" | "newest" | "bestseller";

export function ShopProductGrid({ products, title }: ShopProductGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>("bestseller");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
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
  }, [products, sortBy]);

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickAdd = (product: Product) => {
    addToCart(product, 1, product.colors[0], product.sizes[0]);
  };

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          {title && <h1 className="font-serif text-2xl md:text-3xl">{title}</h1>}
          <p className="text-muted-foreground text-sm mt-1">
            Showing {sortedProducts.length} products
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bestseller">Bestseller</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <div className="hidden sm:flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-r-none",
                viewMode === "grid" && "bg-muted"
              )}
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-l-none",
                viewMode === "list" && "bg-muted"
              )}
              onClick={() => setViewMode("list")}
            >
              <LayoutList className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters.</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={isInWishlist(product.id)}
              onToggleWishlist={() => toggleWishlist(product)}
              onQuickAdd={() => handleQuickAdd(product)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sortedProducts.map((product) => (
            <ProductListItem
              key={product.id}
              product={product}
              isWishlisted={isInWishlist(product.id)}
              onToggleWishlist={() => toggleWishlist(product)}
              onQuickAdd={() => handleQuickAdd(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onQuickAdd: () => void;
}

function ProductCard({ product, isWishlisted, onToggleWishlist, onQuickAdd }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-accent text-accent-foreground">New</Badge>
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
          {/* Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-9 h-9 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                onToggleWishlist();
              }}
            >
              <Heart
                className={cn(
                  "w-4 h-4 transition-colors",
                  isWishlisted && "fill-primary text-primary"
                )}
              />
            </Button>
          </div>
          {/* Quick Add */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Button
              className="w-full gap-2"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                onQuickAdd();
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </Button>
          </div>
        </div>
      </Link>
      <div className="mt-3 space-y-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-medium text-sm md:text-base line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-xs">{product.brand}</p>
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
          <span className="text-sm">{product.rating}</span>
          <span className="text-muted-foreground text-xs">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductListItem({ product, isWishlisted, onToggleWishlist, onQuickAdd }: ProductCardProps) {
  return (
    <div className="group flex gap-4 md:gap-6 p-4 border rounded-xl bg-card hover:shadow-md transition-shadow">
      <Link href={`/product/${product.slug}`} className="shrink-0">
        <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">New</Badge>
          )}
        </div>
      </Link>
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-lg md:text-xl hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-muted-foreground text-sm mt-1">{product.brand}</p>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2 hidden md:block">
            {product.shortDescription}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm">{product.rating}</span>
            <span className="text-muted-foreground text-xs">({product.reviewCount} reviews)</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={onToggleWishlist}
            >
              <Heart
                className={cn(
                  "w-4 h-4",
                  isWishlisted && "fill-primary text-primary"
                )}
              />
            </Button>
            <Button size="sm" className="gap-2" onClick={onQuickAdd}>
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
