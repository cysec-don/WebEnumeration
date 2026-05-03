import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "all";

  const products = [
    { id: 1, title: "Sunset Over Mountains", category: "Landscape", price: 2400 },
    { id: 2, title: "Abstract Reverie", category: "Abstract", price: 1800 },
    { id: 3, title: "Coastal Dreams", category: "Seascape", price: 3200 },
    { id: 4, title: "Urban Fragments", category: "Urban", price: 2100 },
    { id: 5, title: "Whispers of Light", category: "Abstract", price: 2800 },
  ];

  const users = [
    { id: 1, username: "admin", bio: "System Administrator" },
    { id: 2, username: "sarah.smith", bio: "Art Curator" },
    { id: 3, username: "john.doe", bio: "Art Collector" },
  ];

  const query = q.toLowerCase();

  const filteredProducts = products.filter(
    (p) => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  );

  const filteredUsers = users.filter(
    (u) => u.username.toLowerCase().includes(query) || u.bio.toLowerCase().includes(query)
  );

  return NextResponse.json({
    query: q,
    results: {
      products: type === "all" || type === "products" ? filteredProducts : [],
      users: type === "all" || type === "users" ? filteredUsers : [],
    },
    total_results: filteredProducts.length + filteredUsers.length,
  });
}
