import { Darker_Grotesque } from 'next/font/google';
import type { Metadata } from 'next/types';
import './globals.css';

const darkerGrostesque = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--font-darker-grotesque',
  weight: ['300', '500', '600', '900'],
});

export const metadata: Metadata = {
  title: 'Full-Stack Engineer Freelance | Thomas Michel',
  description:
    'Hi, I’m Thomas, an Entrepreneur, Open-Source Contributor, and Software Engineer with a focus on Full-Stack Development, particularly back-end engineering. I specialize in crafting innovative SaaS products, taking ideas from 0 to 1 with a clear focus on user-centered applicationsthat truly make an impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${darkerGrostesque.variable} antialiased`}>{children}</body>
    </html>
  );
}
