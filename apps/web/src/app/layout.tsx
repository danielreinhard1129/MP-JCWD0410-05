import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Providers } from '../providers/ChakraProviders';
import Footer from '@/components/Footer';
import NextAuthProvider from '../providers/NextAuthProvider';
import ReactQueryProvider from '../providers/ReactQueryProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Festivity',
  description: 'Experience Every Moment, Start Here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextAuthProvider>
            <ReactQueryProvider>
              <Navbar />
              {children}
              <Footer />
              <ToastContainer />
            </ReactQueryProvider>
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
