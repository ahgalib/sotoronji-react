"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely stunning quality! The colors are vibrant and the craftsmanship is impeccable. It has become the centerpiece of my meditation room.",
    product: "Rajshahi Shotorongi Mat",
  },
  {
    id: "2",
    name: "Anika Rahman",
    location: "Dhaka, Bangladesh",
    rating: 5,
    text: "As a Bangladeshi living abroad, owning a Shotorongi brings me closer to home. The authenticity and quality exceeded my expectations.",
    product: "Heritage Tribal Rug",
  },
  {
    id: "3",
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "I ordered three pieces for my boutique hotel rooms. Guests constantly ask about them. Exceptional quality and wonderful customer service.",
    product: "Premium Floor Collection",
  },
  {
    id: "4",
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "The wall tapestry I purchased is a conversation starter. Knowing it supports artisan families makes it even more special.",
    product: "Geometric Wall Tapestry",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
            Customer Love
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            {"Don't"} just take our word for it. Here{"'s"} what our community has to say 
            about their Shotorongi experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                {"\""}{testimonial.text}{"\""}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Purchased</p>
                  <p className="text-sm font-medium text-primary">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-foreground">4.9</p>
            <div className="flex gap-0.5 justify-center my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Google Reviews</p>
          </div>
          <div className="w-px h-12 bg-border hidden lg:block" />
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-foreground">2,500+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-border hidden lg:block" />
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-foreground">15+</p>
            <p className="text-sm text-muted-foreground">Countries Shipped</p>
          </div>
        </div>
      </div>
    </section>
  );
}
