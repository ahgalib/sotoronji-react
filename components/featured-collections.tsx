"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const collections = [
  {
    id: "1",
    name: "Floor Mats",
    description: "Traditional handwoven mats for your living space",
    image: "/images/collection-1.jpg",
    productCount: 42,
  },
  {
    id: "2",
    name: "Wall Art",
    description: "Decorative tapestries and wall hangings",
    image: "/images/collection-2.jpg",
    productCount: 28,
  },
  {
    id: "3",
    name: "Home Textiles",
    description: "Cushions, runners, and table linens",
    image: "/images/product-5.jpg",
    productCount: 35,
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
            Shop by Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Collections
          </h2>
          <p className="text-muted-foreground">
            Explore our curated collections of authentic handwoven textiles, 
            each piece crafted with love and tradition.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden cursor-pointer",
                index === 0 && "md:row-span-2 md:col-span-1",
              )}
            >
              <div className={cn(
                "relative w-full",
                index === 0 ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"
              )}>
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-sm text-white/70 mb-2">
                  {collection.productCount} Products
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                  {collection.name}
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-white font-medium group/link">
                  <span>Explore Collection</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
