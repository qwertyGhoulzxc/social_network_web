import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import CommonProvider from '@providers/commonProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'lalalala',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonProvider>{children}</CommonProvider>
      </body>
    </html>
  );
}
