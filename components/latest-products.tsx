"use client";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const latestProducts = [
  {
    id: "5",
    name: "Handwoven Cushion Cover",
    price: 1200,
    image: "/images/product-5.jpg",
    category: "Home Decor",
    isNew: true,
  },
  {
    id: "6",
    name: "Artisan Table Runner",
    price: 1800,
    image: "/images/product-6.jpg",
    category: "Table Linens",
    isNew: true,
  },
  {
    id: "7",
    name: "Premium Shotorongi Mat",
    price: 5500,
    image: "/images/product-1.jpg",
    category: "Floor Mats",
    isNew: true,
  },
  {
    id: "8",
    name: "Decorative Wall Hanging",
    price: 2800,
    image: "/images/product-3.jpg",
    category: "Wall Art",
    isNew: true,
  },
  {
    id: "9",
    name: "Traditional Tribal Rug",
    price: 7200,
    image: "/images/product-2.jpg",
    category: "Rugs",
    isNew: true,
  },
];

export function LatestProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-2 block">
              Fresh Arrivals
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Latest Products
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
            <Button
              variant="outline"
              className="group border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-6 transition-all duration-300"
            >
              Shop New
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Scrollable Products */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {latestProducts.map((product) => (
            <div key={product.id} className="min-w-[280px] snap-start">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
