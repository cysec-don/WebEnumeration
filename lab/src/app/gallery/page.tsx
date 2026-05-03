"use client";

import Link from "next/link";
import { useState } from "react";
import { Palette, ShoppingBag, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const artworks = [
  { id: 1, title: "Sunset Over Mountains", artist: "Elena Vasquez", price: "$2,400", seed: "sunset-mountains", category: "Landscape" },
  { id: 2, title: "Abstract Reverie", artist: "Marcus Chen", price: "$1,800", seed: "abstract-reverie", category: "Abstract" },
  { id: 3, title: "Coastal Dreams", artist: "Sofia Andersson", price: "$3,200", seed: "coastal-dreams", category: "Seascape" },
  { id: 4, title: "Urban Fragments", artist: "James Okafor", price: "$2,100", seed: "urban-fragments", category: "Urban" },
  { id: 5, title: "Whispers of Light", artist: "Amara Diallo", price: "$2,800", seed: "whispers-light", category: "Abstract" },
  { id: 6, title: "Autumn Bridge", artist: "Tomasz Kowalski", price: "$1,600", seed: "autumn-bridge", category: "Landscape" },
  { id: 7, title: "Digital Bloom", artist: "Yuki Tanaka", price: "$1,950", seed: "digital-bloom", category: "Digital" },
  { id: 8, title: "The Silent Garden", artist: "Rosa Martinez", price: "$3,500", seed: "silent-garden", category: "Nature" },
  { id: 9, title: "Ember Skies", artist: "Lucas Ferreira", price: "$2,750", seed: "ember-skies", category: "Landscape" },
  { id: 10, title: "Geometric Soul", artist: "Priya Sharma", price: "$1,450", seed: "geometric-soul", category: "Abstract" },
  { id: 11, title: "Ocean Whisper", artist: "Kai Nakamura", price: "$3,100", seed: "ocean-whisper", category: "Seascape" },
  { id: 12, title: "Neon Nights", artist: "Zara Okafor", price: "$2,200", seed: "neon-nights", category: "Urban" },
];

const categories = ["All", "Landscape", "Abstract", "Seascape", "Urban", "Digital", "Nature"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

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
              <Link href="/gallery" className="text-amber-700 transition-colors text-sm font-medium">
                Gallery
              </Link>
              <Link href="/about" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium">
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

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-stone-600">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-stone-900">Full Gallery</h1>
            <p className="text-stone-500 text-sm mt-1">Browse our complete collection of original artworks</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeCategory === cat
                  ? "bg-amber-700 text-white shadow-md"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              <Filter className="h-3.5 w-3.5" />
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((art) => (
            <Card key={art.id} className="group overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${art.seed}/400/500.jpg`}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-stone-900 text-sm">{art.title}</h3>
                <p className="text-xs text-stone-500 mt-0.5">by {art.artist}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-amber-700 font-bold text-sm">{art.price}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                    {art.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-stone-900 text-stone-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-stone-500">
          &copy; 2024 The Vulnerable Art Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
