import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { LatestProducts } from "@/components/latest-products";
import { OurStory } from "@/components/our-story";
import { FeaturedCollections } from "@/components/featured-collections";
import { WhyChooseUs } from "@/components/why-choose-us";
import { LifestyleSection } from "@/components/lifestyle-section";
import { ArtisanSection } from "@/components/artisan-section";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <OurStory />
      <FeaturedCollections />
      <WhyChooseUs />
      <LifestyleSection />
      <ArtisanSection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
