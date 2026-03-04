import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'GatePlay - Curated Streaming',
  description: 'Where Every Story Is Chosen',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-[#0A0A0A] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
