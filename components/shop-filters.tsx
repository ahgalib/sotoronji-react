"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories, brands } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal, X } from "lucide-react";

interface ShopFiltersProps {
  selectedCategory?: string;
  selectedBrand?: string;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  inStockOnly: boolean;
  onInStockChange: (value: boolean) => void;
}

export function ShopFilters({
  selectedCategory,
  selectedBrand,
  priceRange,
  onPriceChange,
  inStockOnly,
  onInStockChange,
}: ShopFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  const clearAllFilters = () => {
    router.push("/shop", { scroll: false });
    onPriceChange([0, 15000]);
    onInStockChange(false);
  };

  const hasActiveFilters = selectedCategory || selectedBrand || priceRange[0] > 0 || priceRange[1] < 15000 || inStockOnly;

  const FilterContent = () => (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={clearAllFilters}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      )}

      <Accordion type="multiple" defaultValue={["categories", "brands", "price"]} className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-medium">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`cat-${category.slug}`}
                    checked={selectedCategory === category.slug}
                    onCheckedChange={(checked) =>
                      updateFilter("category", checked ? category.slug : null)
                    }
                  />
                  <Label
                    htmlFor={`cat-${category.slug}`}
                    className="text-sm font-normal cursor-pointer flex-1 flex justify-between"
                  >
                    <span>{category.name}</span>
                    <span className="text-muted-foreground">({category.productCount})</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger className="text-sm font-medium">
            Brands
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrand === brand}
                    onCheckedChange={(checked) =>
                      updateFilter("brand", checked ? brand : null)
                    }
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-1">
              <Slider
                min={0}
                max={15000}
                step={100}
                value={priceRange}
                onValueChange={(value) => onPriceChange(value as [number, number])}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>BDT {priceRange[0].toLocaleString()}</span>
                <span>BDT {priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger className="text-sm font-medium">
            Availability
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-2">
              <Checkbox
                id="in-stock"
                checked={inStockOnly}
                onCheckedChange={(checked) => onInStockChange(checked as boolean)}
              />
              <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
                In Stock Only
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-card rounded-xl p-6 border border-border">
          <h3 className="font-serif text-lg mb-4">Filters</h3>
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-primary" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
