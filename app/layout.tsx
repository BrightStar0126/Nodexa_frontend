import type { Metadata, Viewport } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Nodexa Hosting',
  description: '',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
