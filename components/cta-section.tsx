"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium text-primary-foreground/80 tracking-widest uppercase mb-4 block">
            Join Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Bring Home a Piece of
            <span className="block">Bengali Heritage</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Every Shotorongi tells a story. Every purchase supports a family. 
            Start your collection today and become part of a tradition that spans centuries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-background text-foreground hover:bg-background/90 px-10 py-6 text-base font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-base font-medium rounded-full border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-12 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter for exclusive offers and artisan stories
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/30 rounded-full text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
              />
              <Button className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
