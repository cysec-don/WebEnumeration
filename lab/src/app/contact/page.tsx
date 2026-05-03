"use client";

import Link from "next/link";
import { Palette, ShoppingBag, ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Palette className="h-7 w-7 text-amber-700" />
              <span className="text-xl font-bold text-stone-900 tracking-tight">
                The Vulnerable Art Shop
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/gallery" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium">
                Gallery
              </Link>
              <Link href="/about" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-amber-700 transition-colors text-sm font-medium">
                Contact
              </Link>
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-stone-600">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-stone-900">Contact Us</h1>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl">
              Have a question about an artwork, need help with an order, or want to collaborate?
              We would love to hear from you.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-stone-700 block mb-1.5">First Name</label>
                    <Input placeholder="John" className="border-stone-300" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-stone-700 block mb-1.5">Last Name</label>
                    <Input placeholder="Doe" className="border-stone-300" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 block mb-1.5">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-stone-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 block mb-1.5">Subject</label>
                  <Input placeholder="How can we help?" className="border-stone-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 block mb-1.5">Message</label>
                  <Textarea placeholder="Tell us more..." rows={5} className="border-stone-300" />
                </div>
                <Button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Get in Touch</h2>
              <Card className="border-stone-200">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">Email</p>
                      <p className="text-stone-500 text-sm">hello@vulnerableart.shop</p>
                      <p className="text-stone-500 text-sm">support@vulnerableart.shop</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">Phone</p>
                      <p className="text-stone-500 text-sm">+1 (555) 0142</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">Address</p>
                      <p className="text-stone-500 text-sm">123 Art District<br />San Francisco, CA 94102</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">Business Hours</p>
                      <p className="text-stone-500 text-sm">Monday - Friday: 9AM - 6PM PST</p>
                      <p className="text-stone-500 text-sm">Saturday: 10AM - 4PM PST</p>
                      <p className="text-stone-500 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-stone-500">
          &copy; 2024 The Vulnerable Art Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
