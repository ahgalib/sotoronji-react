"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import {
  ChevronRight,
  Home,
  CreditCard,
  Smartphone,
  Banknote,
  Truck,
  ShoppingBag,
  Lock,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const divisions = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    division: "",
    postalCode: "",
    saveInfo: false,
    paymentMethod: "cod",
    notes: "",
    giftWrap: false,
    giftMessage: "",
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 2000 ? 0 : 100;
  const giftWrapFee = formData.giftWrap ? 50 : 0;
  const total = subtotal + shipping + giftWrapFee;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate order ID
    const newOrderId = `SHT-${Date.now().toString(36).toUpperCase()}`;
    setOrderId(newOrderId);
    setOrderComplete(true);
    clearCart();
    setIsProcessing(false);
  };

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl mb-4">
              Thank You for Your Order!
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Your order has been successfully placed.
            </p>
            <p className="text-muted-foreground mb-8">
              Order ID: <span className="font-semibold text-foreground">{orderId}</span>
            </p>

            <div className="bg-card border rounded-xl p-6 text-left mb-8">
              <h3 className="font-medium mb-4">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-medium text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Order Confirmation</p>
                    <p className="text-sm text-muted-foreground">
                      You will receive an email confirmation shortly at {formData.email || "your email"}.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-medium text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Order Processing</p>
                    <p className="text-sm text-muted-foreground">
                      Our artisans will carefully prepare your handcrafted items (1-2 business days).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-medium text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Your order will be delivered within 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some beautiful handcrafted items to your cart before checking out.
            </p>
            <Link href="/shop">
              <Button size="lg" className="gap-2">
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

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
            <Link href="/cart" className="hover:text-primary transition-colors">
              Cart
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Checkout</span>
          </nav>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <div className="bg-card border rounded-xl p-6">
                  <h2 className="font-serif text-xl mb-6">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-card border rounded-xl p-6">
                  <h2 className="font-serif text-xl mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="House number, road, area"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apartment">Apartment, Suite, etc. (Optional)</Label>
                      <Input
                        id="apartment"
                        name="apartment"
                        placeholder="Apartment, floor, building name"
                        value={formData.apartment}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="division">Division *</Label>
                        <Select
                          value={formData.division}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, division: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select division" />
                          </SelectTrigger>
                          <SelectContent>
                            {divisions.map((division) => (
                              <SelectItem key={division} value={division}>
                                {division}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code *</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          placeholder="Enter code"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="saveInfo"
                        checked={formData.saveInfo}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, saveInfo: checked as boolean }))
                        }
                      />
                      <Label htmlFor="saveInfo" className="text-sm font-normal cursor-pointer">
                        Save this information for next time
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card border rounded-xl p-6">
                  <h2 className="font-serif text-xl mb-6">Payment Method</h2>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, paymentMethod: value }))
                    }
                    className="space-y-3"
                  >
                    <div
                      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.paymentMethod === "cod"
                          ? "border-primary bg-primary/5"
                          : "hover:border-muted-foreground/50"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, paymentMethod: "cod" }))
                      }
                    >
                      <RadioGroupItem value="cod" id="cod" />
                      <Banknote className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <Label htmlFor="cod" className="cursor-pointer font-medium">
                          Cash on Delivery
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Pay when you receive your order
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.paymentMethod === "bkash"
                          ? "border-primary bg-primary/5"
                          : "hover:border-muted-foreground/50"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, paymentMethod: "bkash" }))
                      }
                    >
                      <RadioGroupItem value="bkash" id="bkash" />
                      <Smartphone className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <Label htmlFor="bkash" className="cursor-pointer font-medium">
                          bKash / Nagad / Rocket
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Pay via mobile banking
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.paymentMethod === "card"
                          ? "border-primary bg-primary/5"
                          : "hover:border-muted-foreground/50"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, paymentMethod: "card" }))
                      }
                    >
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <Label htmlFor="card" className="cursor-pointer font-medium">
                          Credit / Debit Card
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Visa, Mastercard, AMEX accepted
                        </p>
                      </div>
                    </div>
                  </RadioGroup>

                  {formData.paymentMethod === "card" && (
                    <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Options */}
                <Accordion type="single" collapsible className="bg-card border rounded-xl">
                  <AccordionItem value="notes" className="border-none">
                    <AccordionTrigger className="px-6 hover:no-underline">
                      <span className="font-serif">Order Notes (Optional)</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <Textarea
                        name="notes"
                        placeholder="Special instructions for your order..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="gift" className="border-none border-t">
                    <AccordionTrigger className="px-6 hover:no-underline">
                      <span className="font-serif">Gift Options (+BDT 50)</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="giftWrap"
                          checked={formData.giftWrap}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, giftWrap: checked as boolean }))
                          }
                        />
                        <Label htmlFor="giftWrap" className="font-normal cursor-pointer">
                          Add premium gift wrapping
                        </Label>
                      </div>
                      {formData.giftWrap && (
                        <div className="space-y-2">
                          <Label htmlFor="giftMessage">Gift Message</Label>
                          <Textarea
                            id="giftMessage"
                            name="giftMessage"
                            placeholder="Write a personal message..."
                            value={formData.giftMessage}
                            onChange={handleInputChange}
                            rows={2}
                          />
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border rounded-xl p-6 sticky top-24">
                  <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                  {/* Cart Items */}
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                        className="flex gap-3"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted shrink-0">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                            {item.quantity}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm line-clamp-1">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.selectedColor} / {item.selectedSize}
                          </p>
                          <p className="text-sm font-medium text-primary mt-1">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
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
                    {formData.giftWrap && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Gift Wrapping</span>
                        <span className="font-medium">{formatPrice(giftWrapFee)}</span>
                      </div>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-6 gap-2"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Place Order
                      </>
                    )}
                  </Button>

                  {/* Trust Indicators */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Your data is secure and encrypted</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Delivery within 3-5 business days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
