'use client';

import { createContext, useContext, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PageTransitionContextValue {
  /** Call this instead of router.push to get the page transition */
  navigate: (href: string) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const navigate = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error('usePageTransition must be used inside <PageTransitionProvider>');
  }
  return ctx;
}
