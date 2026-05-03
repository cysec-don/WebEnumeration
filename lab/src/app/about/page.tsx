"use client";

import Link from "next/link";
import { Palette, ShoppingBag, ArrowLeft, Users, Heart, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  { name: "Elena Vasquez", role: "Founder & Creative Director", seed: "elena-vasquez" },
  { name: "Marcus Chen", role: "Head of Curation", seed: "marcus-chen" },
  { name: "Sofia Andersson", role: "Gallery Manager", seed: "sofia-andersson" },
  { name: "James Okafor", role: "Technology Lead", seed: "james-okafor" },
];

const stats = [
  { icon: Users, label: "Artists Worldwide", value: "340+" },
  { icon: Heart, label: "Art Pieces Sold", value: "2,400+" },
  { icon: Globe, label: "Countries Reached", value: "45" },
  { icon: Award, label: "Years in Business", value: "5" },
];

export default function AboutPage() {
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
              <Link href="/about" className="text-amber-700 transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium">
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
            <h1 className="text-4xl font-bold text-stone-900">About Us</h1>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl">
              We connect art lovers with extraordinary works from emerging and established artists around the world.
              Since 2019, we have been curating collections that tell stories and inspire connections.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-stone-200">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-amber-700 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-stone-900">{stat.value}</p>
                  <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-stone-900 mb-6">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden border-stone-200">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${member.seed}/400/400.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-stone-900">{member.name}</h3>
                  <p className="text-xs text-stone-500 mt-0.5">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-amber-700 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-amber-100 leading-relaxed">
              We believe art should be accessible to everyone. Our platform bridges the gap between talented artists
              and passionate collectors, making it easy to discover, appreciate, and own original works of art.
              Every purchase directly supports the artists who create these beautiful pieces.
            </p>
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
