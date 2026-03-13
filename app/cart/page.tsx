"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ChevronRight,
  Home,
  ArrowRight,
  Tag,
  Truck,
  Shield,
  Gift,
} from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");

  const subtotal = getCartTotal();
  const shipping = subtotal > 2000 ? 0 : 100;
  const discount = appliedCoupon ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setAppliedCoupon(couponCode);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Shopping Cart</span>
          </nav>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl mb-8">Your Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl mb-3">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Looks like you haven&apos;t added any items to your cart yet. Start shopping to fill it up!
              </p>
              <Link href="/shop">
                <Button size="lg" className="gap-2">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-muted rounded-lg text-sm font-medium text-muted-foreground">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Items */}
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="bg-card border rounded-xl p-4 md:p-6"
                  >
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="md:col-span-6 flex gap-4">
                        <Link href={`/product/${item.product.slug}`} className="shrink-0">
                          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-muted">
                            <Image
                              src={item.product.images[0]}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Link>
                        <div className="flex-1 min-w-0">
                          <Link href={`/product/${item.product.slug}`}>
                            <h3 className="font-medium hover:text-primary transition-colors line-clamp-2">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.product.brand}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
                            <span className="px-2 py-1 bg-muted rounded">
                              {item.selectedColor}
                            </span>
                            <span className="px-2 py-1 bg-muted rounded">
                              {item.selectedSize}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-2 flex items-center justify-start md:justify-center">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-10 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            disabled={item.quantity >= item.product.stockCount}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 text-left md:text-center">
                        <div className="md:hidden text-xs text-muted-foreground mb-1">
                          Price
                        </div>
                        <span className="font-medium">{formatPrice(item.product.price)}</span>
                        {item.product.originalPrice && (
                          <span className="block text-sm text-muted-foreground line-through">
                            {formatPrice(item.product.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                        <div>
                          <div className="md:hidden text-xs text-muted-foreground mb-1">
                            Total
                          </div>
                          <span className="font-semibold text-primary">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Cart Actions */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <Link href="/shop">
                    <Button variant="outline" className="gap-2 w-full sm:w-auto">
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={clearCart}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border rounded-xl p-6 sticky top-24">
                  <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">
                      Have a coupon?
                    </label>
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-primary" />
                          <span className="font-medium text-primary">{appliedCoupon}</span>
                          <span className="text-sm text-muted-foreground">(-10%)</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleRemoveCoupon}
                          className="text-muted-foreground hover:text-destructive h-auto p-1"
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="outline" onClick={handleApplyCoupon}>
                          Apply
                        </Button>
                      </div>
                    )}
                    {couponError && (
                      <p className="text-sm text-destructive mt-2">{couponError}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Try &quot;SAVE10&quot; for 10% off
                    </p>
                  </div>

                  <Separator className="my-4" />

                  {/* Summary Details */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          formatPrice(shipping)
                        )}
                      </span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discount</span>
                        <span>-{formatPrice(discount)}</span>
                      </div>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>

                  <Link href="/checkout" className="block mt-6">
                    <Button size="lg" className="w-full gap-2">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  {/* Trust Badges */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Free shipping on orders over BDT 2,000</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Secure checkout with SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Gift className="w-5 h-5 text-primary" />
                      <span>Gift wrapping available at checkout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
