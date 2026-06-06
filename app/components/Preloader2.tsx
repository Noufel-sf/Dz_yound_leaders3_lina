'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Preloader2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Logo fades + scales in
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );

      // 2. Counter 0 → 100 (starts right after logo appears)
      const counter = { value: 0 };
      tl.to(
        counter,
        {
          value: 100,
          duration: 2.4,
          ease: 'power1.inOut',
          onUpdate() {
            if (counterRef.current) {
              counterRef.current.textContent = Math.round(counter.value)
                .toString()
                .padStart(3, '0');
            }
          },
        },
        '<0.1'
      );

      // 3. Fade out logo + counter
      tl.to(
        logoRef.current,
        { opacity: 0, duration: 0.4, ease: 'power2.in' },
        '+=0.1'
      );

      // 4. Slide the whole background up as one solid block
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
      }, '<0.05');

      // 5. Remove from layout so it can't block clicks
      tl.set(containerRef.current, { display: 'none' });
    },
    { scope: containerRef }
  );


  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}
    >
      {/* Logo + counter */}
      <div
        ref={logoRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          opacity: 0,
        }}
      >
        <Image
          src="/logopreloader.png"
          alt="Logo"
          width={360}
          height={360}
          priority
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 28px rgba(255,210,48,0.4))',
          }}
        />

        {/* Counter */}
        <div style={{ display: 'flex', alignItems: 'baseline', fontFamily: 'monospace' }}>
          <span
            ref={counterRef}
            style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 700,
              color: '#ffd230',
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            00
          </span>
          <span
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#ffd23066',
              marginLeft: '3px',
            }}
          >
            %
          </span>
        </div>
      </div>
    </div>
  );
}
