"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShopFilters } from "@/components/shop-filters";
import { ShopProductGrid } from "@/components/shop-product-grid";
import { CategorySection } from "@/components/category-section";
import { products, categories, filterProducts, getCategoryBySlug } from "@/lib/products";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

function ShopContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category");
  const brandParam = searchParams.get("brand");

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;

  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      category: categorySlug || undefined,
      brand: brandParam || undefined,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      inStock: inStockOnly || undefined,
    });
  }, [categorySlug, brandParam, priceRange, inStockOnly]);

  const pageTitle = category
    ? category.name
    : brandParam
    ? brandParam
    : "All Products";

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-8 px-4 md:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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
                <span className="text-foreground">{category.name}</span>
              </>
            )}
          </nav>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            {pageTitle}
          </h1>
          {category && (
            <p className="text-muted-foreground mt-2 max-w-2xl">
              {category.description}
            </p>
          )}
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-6 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Link
              href="/shop"
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                !categorySlug
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  categorySlug === cat.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            <ShopFilters
              selectedCategory={categorySlug || undefined}
              selectedBrand={brandParam || undefined}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              inStockOnly={inStockOnly}
              onInStockChange={setInStockOnly}
            />
            <ShopProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      {/* Categories Section (when viewing all products) */}
      {!categorySlug && <CategorySection />}

      <Footer />
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </main>
    }>
      <ShopContent />
    </Suspense>
  );
}
