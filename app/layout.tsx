import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneManArmy Review 2026: AI Army Platform + $682 Bonus Pack",
  description: "Honest OneManArmy review + exclusive $682 bonus package. See if this AI army platform is right for your business.",
  keywords: ["OneManArmy review", "AI army platform", "OneManArmy bonus", "AI bots", "solo operator"],
  openGraph: {
    title: "OneManArmy Review 2026: AI Army Platform + $682 Bonus Pack",
    description: "Honest OneManArmy review + exclusive $682 bonus package. See if this AI army platform is right for your business.",
    type: "website",
    url: "https://onemanarmy-review.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneManArmy Review 2026: AI Army Platform + $682 Bonus Pack",
    description: "Honest OneManArmy review + exclusive $682 bonus package.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
