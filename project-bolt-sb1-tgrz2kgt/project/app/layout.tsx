import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Navigation from '@/components/Navigation';
import { Analytics } from '@/components/Analytics';
import { TermsDialog } from '@/components/TermsDialog';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nutrient AI - Your Personal Nutrition Assistant',
  description: 'Get expert nutritional advice powered by AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <TermsDialog />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}