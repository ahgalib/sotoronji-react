"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export function CategorySection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Browse By Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 text-balance">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover handcrafted textiles organized by type. Each category represents 
            centuries of Bangladeshi weaving tradition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-muted"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-serif text-lg md:text-xl text-card font-medium">
                  {category.name}
                </h3>
                <p className="text-card/70 text-sm mt-1">
                  {category.productCount} Products
                </p>
                <div className="flex items-center gap-1 mt-2 text-card text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
