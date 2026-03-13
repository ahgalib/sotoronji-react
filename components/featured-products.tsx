"use client";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "Traditional Rajshahi Shotorongi",
    price: 4500,
    originalPrice: 5500,
    image: "/images/product-1.jpg",
    category: "Floor Mats",
    isBestseller: true,
  },
  {
    id: "2",
    name: "Heritage Tribal Floor Rug",
    price: 6200,
    image: "/images/product-2.jpg",
    category: "Rugs",
    isNew: true,
  },
  {
    id: "3",
    name: "Geometric Wall Tapestry",
    price: 3800,
    image: "/images/product-3.jpg",
    category: "Wall Art",
  },
  {
    id: "4",
    name: "Classic Runner Mat",
    price: 2900,
    originalPrice: 3500,
    image: "/images/product-4.jpg",
    category: "Runners",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-2 block">
              Handpicked for You
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Products
            </h2>
          </div>
          <Button
            variant="outline"
            className="group self-start md:self-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-6 transition-all duration-300"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
