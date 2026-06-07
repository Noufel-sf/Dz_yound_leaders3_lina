'use client';
import { forwardRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import FullScreenMenu from './FullScreenMenu';
import HistoryButton from './HistoryButton';

const NavBar = forwardRef<HTMLDivElement>((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === pathname) return;
    window.location.href = href;
  };

  return (
    <>
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <nav
        ref={ref}
        className="pointer-events-none fixed top-3 left-0 z-50 flex h-20 w-full items-center justify-between px-6 md:px-12"
      >
        {/* LEFT SECTION */}
        <div className="pointer-events-auto order-1 flex flex-1 items-center justify-start md:order-0">
          {/* Desktop Menu Icon */}
          <div
            onClick={() => setIsMenuOpen(true)}
            className="group hidden w-8 cursor-pointer flex-col gap-1.5 md:flex"
          >
            <div className="h-1 w-full origin-left rounded-full bg-white transition-transform group-hover:scale-x-110 group-hover:bg-primary" />
            <div className="h-1 w-6 origin-left rounded-full bg-white transition-transform group-hover:scale-x-125 group-hover:bg-primary" />
          </div>

          {/* Mobile: Logo on left */}
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, '/')}
            className="md:hidden"
          >
            <h1 className='text-3xl heading font-bold text-primary'>ارث و اثر</h1>
          </Link>
        </div>

        {/* LOGO CENTER — desktop only */}
        <div className="pointer-events-auto absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <Link href="/" onClick={(e) => handleNavigation(e, '/')}>
            <h1 className='text-3xl heading font-bold text-primary'>ارث و اثر</h1>
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="pointer-events-auto order-2 flex flex-1 items-center justify-end gap-4 md:order-0">
          {/* Desktop CTA */}
          <a href="">

          <HistoryButton
              text="انضم الينا"
              bgColor="#ffd230"
              shadowColor="#ffd230"
              paddingX="px-6"
              paddingY="py-2"
              fontSize="text-base"
            />
          </a>


          {/* Mobile Menu Icon */}
          <div
            onClick={() => setIsMenuOpen(true)}
            className="group flex w-8 cursor-pointer flex-col items-end gap-1.5 md:hidden"
          >
            <div className="h-1 w-full rounded-full bg-white transition-all group-hover:bg-primary" />
            <div className="h-1 w-6 rounded-full bg-white transition-all group-hover:w-full group-hover:bg-primary" />
          </div>
        </div>
      </nav>
    </>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
