'use client';

import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('../components/ui/NavBar'), {
  ssr: false,
});

const Footer = dynamic(() => import('../components/ui/Footer'), {
  ssr: false,
});

    

export default function LayoutWrapper({ children }: { children: React.ReactNode  }) {
    
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
