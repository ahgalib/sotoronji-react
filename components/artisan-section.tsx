"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Artisan Partners",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Villages Supported",
  },
  {
    icon: Heart,
    value: "5000+",
    label: "Families Empowered",
  },
];

export function ArtisanSection() {
  return (
    <section id="artisans" className="py-20 lg:py-28 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-accent tracking-widest uppercase mb-4 block">
              Empowering Communities
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Meet the Hands
              <span className="text-accent block">Behind Every Thread</span>
            </h2>
            <p className="text-background/80 leading-relaxed mb-8">
              Behind every Shotorongi is a skilled artisan whose hands have mastered 
              techniques passed down through generations. When you purchase from us, 
              you directly support these talented craftspeople and their families.
            </p>
            <p className="text-background/80 leading-relaxed mb-8">
              We partner with weavers across rural Bangladesh, providing fair wages, 
              healthcare support, and educational opportunities for their children. 
              Together, {"we're"} building a sustainable future while preserving our heritage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-3">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-background">{stat.value}</p>
                  <p className="text-sm text-background/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Meet Our Artisans
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/artisan.jpg"
                alt="Bangladeshi artisan weaving on traditional loom"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Quote Card */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-card text-foreground p-6 rounded-xl shadow-2xl max-w-[280px]">
              <p className="text-sm italic mb-4">
                {"\""}Weaving is not just my work—{"it's"} my legacy. Every mat I create carries 
                a piece of my heart and the hopes of my family.{"\""}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20" />
                <div>
                  <p className="font-medium text-sm">Fatema Begum</p>
                  <p className="text-xs text-muted-foreground">Artisan, Rangpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
