import { NextResponse } from "next/server";

const products = [
  { id: 1, title: "Sunset Over Mountains", artist: "Elena Vasquez", price: 2400, category: "Landscape", image: "https://picsum.photos/seed/sunset-mountains/400/500.jpg" },
  { id: 2, title: "Abstract Reverie", artist: "Marcus Chen", price: 1800, category: "Abstract", image: "https://picsum.photos/seed/abstract-reverie/400/500.jpg" },
  { id: 3, title: "Coastal Dreams", artist: "Sofia Andersson", price: 3200, category: "Seascape", image: "https://picsum.photos/seed/coastal-dreams/400/500.jpg" },
  { id: 4, title: "Urban Fragments", artist: "James Okafor", price: 2100, category: "Urban", image: "https://picsum.photos/seed/urban-fragments/400/500.jpg" },
  { id: 5, title: "Whispers of Light", artist: "Amara Diallo", price: 2800, category: "Abstract", image: "https://picsum.photos/seed/whispers-light/400/500.jpg" },
  { id: 6, title: "Autumn Bridge", artist: "Tomasz Kowalski", price: 1600, category: "Landscape", image: "https://picsum.photos/seed/autumn-bridge/400/500.jpg" },
  { id: 7, title: "Digital Bloom", artist: "Yuki Tanaka", price: 1950, category: "Digital", image: "https://picsum.photos/seed/digital-bloom/400/500.jpg" },
  { id: 8, title: "The Silent Garden", artist: "Rosa Martinez", price: 3500, category: "Nature", image: "https://picsum.photos/seed/silent-garden/400/500.jpg" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  let filtered = products;
  if (category) {
    filtered = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    products: paginated,
    total: filtered.length,
    page,
    limit,
    total_pages: Math.ceil(filtered.length / limit),
  });
}
