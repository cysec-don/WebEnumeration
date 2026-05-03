"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  ShoppingBag,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Heart,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const artworks = [
  { id: 1, title: "Sunset Over Mountains", artist: "Elena Vasquez", price: "$2,400", seed: "sunset-mountains", category: "Landscape" },
  { id: 2, title: "Abstract Reverie", artist: "Marcus Chen", price: "$1,800", seed: "abstract-reverie", category: "Abstract" },
  { id: 3, title: "Coastal Dreams", artist: "Sofia Andersson", price: "$3,200", seed: "coastal-dreams", category: "Seascape" },
  { id: 4, title: "Urban Fragments", artist: "James Okafor", price: "$2,100", seed: "urban-fragments", category: "Urban" },
  { id: 5, title: "Whispers of Light", artist: "Amara Diallo", price: "$2,800", seed: "whispers-light", category: "Abstract" },
  { id: 6, title: "Autumn Bridge", artist: "Tomasz Kowalski", price: "$1,600", seed: "autumn-bridge", category: "Landscape" },
  { id: 7, title: "Digital Bloom", artist: "Yuki Tanaka", price: "$1,950", seed: "digital-bloom", category: "Digital" },
  { id: 8, title: "The Silent Garden", artist: "Rosa Martinez", price: "$3,500", seed: "silent-garden", category: "Nature" },
];

const categories = ["All", "Landscape", "Abstract", "Seascape", "Urban", "Digital", "Nature"];

export default function ArtShopHome() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* HTML comment hint */}
      {/* TODO: Remove dev-site before launch */}
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
              <Link href="/contact" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium">
                Contact
              </Link>
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </nav>
            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 px-4 py-3">
            <nav className="flex flex-col gap-3">
              <Link href="/gallery" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium py-2">
                Gallery
              </Link>
              <Link href="/about" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium py-2">
                About
              </Link>
              <Link href="/contact" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium py-2">
                Contact
              </Link>
              <Button className="bg-amber-700 hover:bg-amber-800 text-white w-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={mounted ? { opacity: 0, y: 20 } : undefined}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium mb-4">
                    <Star className="h-3 w-3" /> New Collection Available
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
                    Discover Art
                    <br />
                    <span className="text-amber-700">That Speaks</span>
                  </h1>
                  <p className="mt-4 text-lg text-stone-600 max-w-lg">
                    Curated collection of original works from emerging and established artists
                    worldwide. Each piece tells a story waiting to be part of yours.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="#gallery">
                      <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                        Explore Gallery
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button size="lg" variant="outline" className="border-stone-300 text-stone-700">
                        Meet Our Artists
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={mounted ? { opacity: 0, scale: 0.95 } : undefined}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-3">
                    <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                      <img
                        src="https://picsum.photos/seed/art-hero-1/400/530.jpg"
                        alt="Featured artwork - Abstract painting"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 pt-8">
                    <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                      <img
                        src="https://picsum.photos/seed/art-hero-2/400/530.jpg"
                        alt="Featured artwork - Landscape painting"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">2,400+</p>
                    <p className="text-xs text-stone-500">Art Pieces Sold</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-900">Featured Collection</h2>
            <p className="mt-2 text-stone-600">Handpicked works from our curated gallery</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-amber-700 text-white shadow-md"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArtworks.map((art, idx) => (
              <motion.div
                key={art.id}
                initial={mounted ? { opacity: 0, y: 20 } : undefined}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="group overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${art.seed}/400/500.jpg`}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="w-full bg-white/90 text-stone-900 hover:bg-white">
                        View Details
                      </Button>
                    </div>
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-amber-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Stay Inspired</h2>
              <p className="mt-2 text-amber-100">
                Get notified when new collections drop and exclusive artist features.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-amber-600 text-white placeholder:text-amber-200 focus:ring-amber-400"
                />
                <Button className="bg-white text-amber-700 hover:bg-amber-50 shrink-0">
                  Subscribe
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-6 w-6 text-amber-500" />
                <span className="text-white font-bold">Vulnerable Art Shop</span>
              </div>
              <p className="text-sm leading-relaxed">
                Connecting art lovers with extraordinary works from around the globe since 2019.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">Gallery</Link></li>
                <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
                <li><Link href="/lab" className="hover:text-amber-400 transition-colors">Lab Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@vulnerableart.shop</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 0142</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Francisco, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Privacy Policy</span></li>
                <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Terms of Service</span></li>
                <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Cookie Policy</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
            © 2024 The Vulnerable Art Shop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
