"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-living-room.jpg"
          alt="Cozy living room with traditional Bangladeshi textile art"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl animate-fade-in-up">
            <span className="inline-block text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Handcrafted with Love
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              <span className="block">Weaving Stories</span>
              <span className="block text-primary">Into Every Thread</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Discover the timeless beauty of authentic Bangladeshi textiles. 
              Each Shotorongi mat carries generations of artisanal mastery, 
              bringing warmth, heritage, and sustainable luxury into your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-medium rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Artisan Partners</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">25+</p>
                <p className="text-sm text-muted-foreground">Years of Heritage</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Handwoven</p>
              </div>
            </div>
          </div>

          {/* Right - Empty for hero image focus */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
}
