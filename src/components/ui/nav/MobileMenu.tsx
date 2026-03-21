import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { socialLinks } from '@/config/socialLinks.data';
import { navItems } from '@/config/navItems.data';
import { t } from '@/lib/utils';


export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<Element | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // --- DETECT ROUTE ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, [isOpen]);

  // --- ASTRO EVENTS ---
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ isOpen: boolean }>;
      if (custom.detail.isOpen) {
        triggerElementRef.current = document.activeElement;
      }
      setIsOpen(custom.detail.isOpen);
    };

    window.addEventListener('toggleMenu', handler as EventListener);
    return () => window.removeEventListener('toggleMenu', handler as EventListener);
  }, []);

  // --- TOGGLE MENU ---
  const toggleMenu = () => {
    if (isOpen) {
      handleClose();
    } else {
      triggerElementRef.current = document.activeElement;
      setIsOpen(true);
      window.dispatchEvent(new CustomEvent('menuOpened'));
    }
  };

  // --- CLOSING LOGIC ---
  const handleClose = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setIsOpen(false);
      window.dispatchEvent(new CustomEvent('closeMenu'));
      if (triggerElementRef.current instanceof HTMLElement) {
        triggerElementRef.current.focus();
      }
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        window.dispatchEvent(new CustomEvent('closeMenu'));
        if (triggerElementRef.current instanceof HTMLElement) {
          triggerElementRef.current.focus();
        }
      }
    });

    timelineRef.current = tl;

    tl.to('.mobile-menu-item', {
      opacity: 0,
      x: 20,
      duration: 0.15,
      stagger: 0.02,
      ease: 'power2.in',
    });
    tl.to(menuRef.current, {
      x: '100%',
      duration: 0.3,
      ease: 'power3.in',
    }, '-=0.12');
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
    }, '-=0.25');
  };

  // --- OPENING ANIMATION + LISTENERS ---
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (!reduceMotion) {
      const tl = gsap.timeline({
        onComplete: () => closeButtonRef.current?.focus()
      });

      timelineRef.current = tl;

      // Overlay fade in
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.25,
          ease: 'none'
        }
      );

      // Menu slide from right
      tl.fromTo(
        menuRef.current,
        { x: '100%' },
        {
          x: '0%',
          duration: 0.4,
          ease: 'power3.out',
          clearProps: 'transform'
        },
        '-=0.1'
      );

      // Menu items stagger
      tl.fromTo(
        '.mobile-menu-item',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.04,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        },
        '-=0.25'
      );

    } else {
      closeButtonRef.current?.focus();
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener('keydown', handleKey);

      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <>
      {/* HAMBURGER BUTTON  */}
      <button
        onClick={toggleMenu}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        style={{ zIndex: 60 }}
      >
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'hidden' : ''
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'hidden' : ''
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'hidden' : ''
            }`}
        />
      </button>

      {isOpen && (
        <>
          {/* OVERLAY */}
          <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden"
            onClick={handleClose}
            aria-hidden="true"
            style={{ willChange: 'opacity' }}
          />

          {/* MENU */}
          <div
            ref={menuRef}
            className="fixed bottom-0 right-0 top-0 z-50 flex w-[85vw] max-w-[340px] flex-col bg-secondary shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            style={{ willChange: 'transform' }}
          >
            {/* HEADER */}
            <header className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-6">
              <h2
                id="mobile-menu-title"
                className="font-boldonse text-2xl tracking-wide text-white uppercase"
              >
                {t('company.short.name')}
              </h2>
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white transition-all duration-200 hover:bg-white/10 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                aria-label="Cerrar menú"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </header>

            {/* NAVIGATION */}
            <nav
              className="flex flex-1 flex-col px-4 py-8"
              aria-label="Navegación principal"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((link, index) => {
                  const isActive = currentPath === link.href;

                  return (
                    <li key={link.title} className="mobile-menu-item">
                      <a
                        href={link.href}
                        onClick={handleClose}
                        aria-current={isActive ? 'page' : undefined}
                        className={`group flex items-center gap-3 rounded-lg px-4 py-4 transition-all duration-200 ${isActive
                            ? 'bg-[#242424] text-muted-light shadow-sm'
                            : 'text-white hover:bg-white/5 hover:text-muted-light active:bg-white/10'
                          }`}
                      >
                        <span className={`font-inter text-xs font-medium ${isActive ? 'text-orange/70' : 'text-muted-light'
                          }`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="font-boldonse text-xl tracking-wide uppercase">
                          {link.title}
                        </span>
                        {isActive && (
                          <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-orange shadow-sm shadow-orange/50" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* FOOTER - Social Links */}
            <footer className="mobile-menu-item mt-auto border-t border-white/10 px-6 py-6">
              <p className="mb-3 font-inter text-xs font-medium uppercase tracking-wider text-muted-light">
                {t('nav.mobile.follow')}
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-sm text-white transition-colors hover:text-orange active:text-orange/80"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </>
      )}
    </>
  );
};
