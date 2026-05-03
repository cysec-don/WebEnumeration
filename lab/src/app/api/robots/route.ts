import { NextResponse } from "next/server";

const robotsTxt = `User-agent: *
Disallow: /admin-panel/
Disallow: /backup/
Disallow: /api/v2/
Disallow: /dev-site/
Disallow: /config/
Disallow: /uploads/hidden/
Disallow: /exports/
Disallow: /logs/
Disallow: /git/

User-agent: Googlebot
Disallow: /

User-agent: Bingbot
Disallow: /admin-panel/
Disallow: /backup/

# Sitemap: https://www.vulnerableart.shop/sitemap.xml
# Last updated: 2024-01-15`;

export async function GET() {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
