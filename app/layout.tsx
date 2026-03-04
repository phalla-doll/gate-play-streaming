import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'GatePlay - Curated Streaming',
  description: 'Where Every Story Is Chosen',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans bg-[#0A0A0A] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
