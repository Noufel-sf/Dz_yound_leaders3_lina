'use client';

import { usePathname } from 'next/navigation';
import { usePageTransition } from '../../context/PageTransitionContext';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /**
   * Optional click handler. When provided, it fully overrides the default
   * navigate() call — the caller is responsible for triggering navigation.
   * (Used by FullScreenMenu which has its own GSAP exit sequence.)
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  style?: React.CSSProperties;
}

/**
 * TransitionLink
 *
 * Drop-in replacement for Next.js <Link> that plays the GSAP curtain
 * transition before navigating. Use wherever you want the page transition
 * effect (NavBar, FullScreenMenu, CTA buttons, etc.).
 *
 * - Without onClick: plays curtain → navigates automatically.
 * - With onClick: delegates entirely to the provided handler
 *   (useful when the caller manages its own exit animation, e.g. FullScreenMenu).
 *
 * Usage:
 *   <TransitionLink href="/about">من نحن</TransitionLink>
 */
export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  style,
}: TransitionLinkProps) {
  const { navigate } = usePageTransition();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If a custom handler is provided (e.g. FullScreenMenu's GSAP exit),
    // delegate to it — the caller handles navigation.
    if (onClick) {
      onClick(e);
      return;
    }

    // Skip animation if already on this page
    if (href === pathname) return;

    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
