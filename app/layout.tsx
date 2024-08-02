import React from 'react';
import Header from '@/components/Header';
import './globals.css';

export const metadata = {
  title: 'Your Application',
  description: 'Edit your application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
