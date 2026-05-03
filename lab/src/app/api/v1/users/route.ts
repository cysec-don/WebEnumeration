import { NextResponse } from "next/server";

const users = [
  { id: 1, username: "admin", avatar: "https://picsum.photos/seed/admin-avatar/100/100.jpg", bio: "System Administrator" },
  { id: 2, username: "sarah.smith", avatar: "https://picsum.photos/seed/sarah-avatar/100/100.jpg", bio: "Art Curator" },
  { id: 3, username: "john.doe", avatar: "https://picsum.photos/seed/john-avatar/100/100.jpg", bio: "Art Collector" },
  { id: 4, username: "emily.johnson", avatar: "https://picsum.photos/seed/emily-avatar/100/100.jpg", bio: "Photographer" },
  { id: 5, username: "michael.brown", avatar: "https://picsum.photos/seed/michael-avatar/100/100.jpg", bio: "Sculptor" },
  { id: 6, username: "lisa.wang", avatar: "https://picsum.photos/seed/lisa-avatar/100/100.jpg", bio: "Digital Artist" },
  { id: 7, username: "david.garcia", avatar: "https://picsum.photos/seed/david-avatar/100/100.jpg", bio: "Painter" },
  { id: 8, username: "anna.kowalski", avatar: "https://picsum.photos/seed/anna-avatar/100/100.jpg", bio: "Mixed Media" },
  { id: 9, username: "robert.chen", avatar: "https://picsum.photos/seed/robert-avatar/100/100.jpg", bio: "Illustrator" },
  { id: 10, username: "maria.santos", avatar: "https://picsum.photos/seed/maria-avatar/100/100.jpg", bio: "Installation Artist" },
];

export async function GET() {
  return NextResponse.json({
    users,
    total: users.length,
  });
}
