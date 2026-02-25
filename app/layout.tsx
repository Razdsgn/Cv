import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata = {
  title: "Amir Mohseni – Creative Art Director",
  description:
    "Award-winning Creative Art Director based in Canada. Winner of the world's most prestigious web design awards in UI, UX, and innovation.",
  metadataBase: new URL("https://amirmohseni.com"),
  openGraph: {
    title: "Amir Mohseni – Creative Art Director",
    description:
      "Winner of leading web design awards in UI, UX, and innovation.",
    url: "https://amirmohseni.com",
    siteName: "Amir Mohseni Portfolio",
    locale: "en_CA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#050507] text-neutral-100 antialiased selection:bg-orange-500 selection:text-slate-950">
        <LenisProvider>
          <div className="relative overflow-hidden">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
