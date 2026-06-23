'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';

/**
 * PageTransitionFade
 *
 * No overlay. On every pathname change after the first load it plays a subtle
 * fade + slide-up so navigation feels smooth. Skipped on initial page load.
 */
export default function PageTransitionOverlay() {
  const pathname = usePathname();
  const isInitialRender = useRef(true);
  const prevPathname = useRef(pathname);

  useGSAP(() => {
    // Skip on first load and handle React strict mode double-invocations
    if (isInitialRender.current || prevPathname.current === pathname) {
      isInitialRender.current = false;
      prevPathname.current = pathname;
      return;
    }

    prevPathname.current = pathname;

    gsap.fromTo(
      'main, section',
      { opacity: 0, y: 250 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      }
    );
  }, [pathname]);

  // Nothing rendered — effect only
  return null;
}
