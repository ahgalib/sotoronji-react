"use client";

import { Sparkles, Leaf, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Authentic Craftsmanship",
    description:
      "Every piece is 100% handwoven using traditional techniques passed down through generations. No machines, no shortcuts—just pure artistry.",
  },
  {
    icon: Heart,
    title: "Cultural Heritage",
    description:
      "Each Shotorongi carries the soul of Bengali tradition. The patterns and colors tell stories that connect you to centuries of history.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Eco-Friendly",
    description:
      "Made from natural cotton and dyed with eco-friendly colors. Our production process respects both people and planet.",
  },
  {
    icon: Award,
    title: "Fair Trade Certified",
    description:
      "We ensure fair wages and safe working conditions for all our artisans, empowering rural communities across Bangladesh.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
            The Shotorongi Difference
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Shotorongi?
          </h2>
          <p className="text-muted-foreground">
            {"We're"} not just selling textiles—{"we're"} preserving heritage, supporting artisans, 
            and bringing sustainable luxury into your home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
