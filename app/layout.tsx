import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konsultan Manajemen Rumah Sakit | Healthcare Advisory & Development",
  description:
    "Mitra strategis perencanaan, pembangunan, dan optimalisasi rumah sakit di Indonesia. Melayani Studi Kelayakan, Master Plan, Transformasi Lean Healthcare, SIMRS SatuSehat, dan Akreditasi Paripurna.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
