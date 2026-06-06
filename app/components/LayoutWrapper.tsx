'use client';

import dynamic from 'next/dynamic';
import Preloader2 from './Preloader2';

const NavBar = dynamic(() => import('../components/ui/NavBar'), {
  ssr: false,
});

const Footer = dynamic(() => import('../components/ui/Footer'), {
  ssr: false,
});

    

export default function LayoutWrapper({ children }: { children: React.ReactNode  }) {
    
  return (
    <>
      <Preloader2 />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
