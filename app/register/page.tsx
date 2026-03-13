"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

export default function RegisterPage() {
  const router = useRouter();
  const { register, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    register(name, email, password);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-card border border-border rounded-xl p-8 space-y-6">
          <h1 className="font-serif text-2xl text-center">Register</h1>
          {error && (
            <p className="text-center text-destructive text-sm">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>

          <div className="text-center text-sm">
            <p>
              Already have an account?{' '}
              <Link href="/login" className="text-primary">
                Login
              </Link>
            </p>
          </div>

          <div className="pt-4 border-t border-border text-center text-sm">
            <p className="mb-2">Or register with</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://accounts.google.com/signin"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
              <a
                href="https://www.facebook.com/login"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}