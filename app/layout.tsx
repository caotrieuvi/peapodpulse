import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthButtons } from "@/components/auth/auth-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeaPodPulse - Your Personalized Parenting Journey",
  description: "The modern pulse on parenthood! Your tech-driven, personalized guide for the parenting journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Temporary header for testing authentication */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">
              PeaPodPulse
            </div>
            <AuthButtons />
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}