import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aster Intel | Purpose-Driven AI Solutions for Businesses',
  description:
    'To empower businesses by driving optimization and efficiency through transformative AI solutions tailored to unique challenges',
  keywords: [
    'AI',
    'artificial intelligence',
    'business optimization',
    'AI solutions',
    'enterprise AI',
  ],
  authors: [{ name: 'Aster Intel' }],
  openGraph: {
    title: 'Aster Intel | Purpose-Driven AI Solutions',
    description:
      'To empower businesses by driving optimization and efficiency through transformative AI solutions tailored to unique challenges',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aster Intel | Purpose-Driven AI Solutions',
    description:
      'To empower businesses by driving optimization and efficiency through transformative AI solutions tailored to unique challenges',
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
      <body className="antialiased relative overflow-x-hidden">
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        {/* Decorative corner elements */}
        <div className="fixed bottom-0 left-0 w-96 h-96 pointer-events-none opacity-10 z-0">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-accent/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="fixed bottom-0 right-0 w-96 h-96 pointer-events-none opacity-10 z-0">
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-teal/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </body>
    </html>
  );
}
