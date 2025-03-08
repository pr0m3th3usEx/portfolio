import type { Metadata } from 'next';
import { stolzl } from '@/config/theme/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thomas Michel | Software Engineer Freelance <> ex-Founder @ Glowme',
  description:
    "Full-Stack Freelance Developer with 3+ years of experience in SaaS development, UI/UX optimization, and scalable web solutions. Former co-founder of Glowme and open-source contributor. Expert in Node.js, React, Rust, and AWS. Helping startups and businesses build high-performance applications. Let's create something amazing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stolzl.variable} ${stolzl.className}`}>
        {children}
      </body>
    </html>
  );
}
