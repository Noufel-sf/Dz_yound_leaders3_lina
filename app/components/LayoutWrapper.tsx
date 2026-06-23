'use client';

import dynamic from 'next/dynamic';
import { PageTransitionProvider } from '../context/PageTransitionContext';
import PageTransitionOverlay from './PageTransitionOverlay';

const NavBar = dynamic(() => import('../components/ui/NavBar'), {
  ssr: false,
});

const Footer = dynamic(() => import('../components/ui/Footer'), {
  ssr: false,
});

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionProvider>
      {/* GSAP curtain overlay — sits above everything during transitions */}
      <PageTransitionOverlay />

      <NavBar />
      {children}
      <Footer />
    </PageTransitionProvider>
  );
}
