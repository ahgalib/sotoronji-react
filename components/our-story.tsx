"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function OurStory() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/weaving-hands.jpg"
                alt="Traditional handloom weaving"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card p-6 rounded-xl shadow-2xl max-w-[260px] border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="h-6 w-6 text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">Years of Legacy</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Preserving the ancient art of Bangladeshi weaving for generations.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
              Our Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy Woven
              <span className="text-primary block">Through Generations</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Shotorongi is more than just a textile—{"it's"} a living tradition that has graced 
                Bangladeshi homes for centuries. Originating from the Rangpur region, these 
                handwoven masterpieces carry the soul of Bengali culture in every thread.
              </p>
              <p>
                Our artisans, many from families who have practiced this craft for generations, 
                use traditional techniques passed down through time. Each mat takes days to 
                complete, with patterns that tell stories of our rich cultural heritage.
              </p>
              <p>
                By choosing Shotorongi, {"you're"} not just buying a product—{"you're"} supporting 
                sustainable livelihoods and helping preserve an art form that defines who we are.
              </p>
            </div>
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Read Our Full Story
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
