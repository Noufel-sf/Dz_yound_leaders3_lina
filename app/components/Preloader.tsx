'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin();

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);
  const panel4Ref = useRef<HTMLDivElement>(null);
  const panel5Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const panels = [
        panel1Ref.current,
        panel2Ref.current,
        panel3Ref.current,
        panel4Ref.current,
        panel5Ref.current,
      ];

      // 1. Logo appear — fade + scale in
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.75, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // 2. Counter 0 → 100 while logo stays visible
      const counter = { value: 0 };
      tl.to(
        counter,
        {
          value: 100,
          duration: 2.2,
          ease: 'power1.inOut',
          onUpdate() {
            if (counterRef.current) {
              counterRef.current.textContent = Math.round(counter.value)
                .toString()
                .padStart(3, '0');
            }
          },
        },
        '<0.1' // starts just after the logo appears
      );

      // 3. Fade out logo + counter together
      tl.to(
        logoRef.current,
        { opacity: 0, scale: 0.85, duration: 0.5, ease: 'power2.in' },
        '+=0.15'
      );

      // 4. Stair panels slide up — staggered
      tl.to(
        panels,
        {
          yPercent: -100,
          duration: 0.7,
          ease: 'power4.inOut',
          stagger: 0.12,
        },
        '<0.1'
      );

      // 5. Remove the whole preloader from the layout flow
      tl.set(containerRef.current, { display: 'none' });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      id="preloader"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Stair panels — stacked absolutely, full size */}
      {[panel1Ref, panel2Ref, panel3Ref, panel4Ref, panel5Ref].map(
        (ref, i) => (
          <div
            key={i}
            ref={ref}
            style={{
              position: 'absolute',
              inset: 0,
              /* each panel is 20% wide — stairs effect */
              left: `${i * 20}%`,
              width: '20%',
              backgroundColor: i % 2 === 0 ? '#000' : '#000',
            }}
          />
        )
      )}

      {/* Logo + counter — sits above the panels */}
      <div
        ref={logoRef}
        style={{
          position: 'relative',
          zIndex: 10,
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
          width={460}
          height={460}
          priority
          style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 24px rgba(255,210,48,0.35))' }}
        />

        {/* Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '2px',
            fontFamily: 'monospace',
          }}
        >
          <span
            ref={counterRef}
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700,
              color: '#ffd230',
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            000
          </span>
          <span
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#ffd23077',
              marginLeft: '2px',
            }}
          >
            %
          </span>
        </div>
      </div>
    </div>
  );
}
