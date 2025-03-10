// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers'; // Import Providers
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Chatbot from '@/components/chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trendlytics - Unlock Insights, Elevate Decisions',
  description: 'Your gateway to the latest trends, stock analysis, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers> {/* Use the Providers component */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Chatbot />
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}