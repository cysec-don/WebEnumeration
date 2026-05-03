import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DiscoveryProvider } from "@/components/DiscoveryProvider";
import { DiscoveryToast } from "@/components/DiscoveryToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Vulnerable Art Shop",
  description: "A curated collection of fine art — explore beautiful works from emerging and established artists.",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <DiscoveryProvider>
          {children}
          <DiscoveryToast />
        </DiscoveryProvider>
      </body>
    </html>
  );
}
