'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../NavBar';
import Footer from '../Footer/footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  if (isLoginPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 