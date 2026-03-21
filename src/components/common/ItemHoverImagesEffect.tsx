import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Props {
  id: number | string;
  title: string;
  coverImage: string;
}

interface ItemImagesProps {
  items: Props[];
}

interface ItemHoverEvent extends Event {
  detail: {
    index: number;
  };
}

export const ItemHoverImagesEffect = ({ items }: ItemImagesProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number>(-1);

  // Mouse follower logic - subtle movement
  useEffect(() => {
    if (!frameRef.current) return;

    const xTo = gsap.quickTo(frameRef.current, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(frameRef.current, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Subtle movement - 10% on x and 60% on y of the displacement
      const moveX = (clientX - centerX) * 0.1;
      const moveY = (clientY - centerY) * 0.6;

      xTo(moveX);
      yTo(moveY);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Listen for hover events
  useEffect(() => {
    const handleItemHover = (event: Event) => {
      const { index } = (event as ItemHoverEvent).detail;

      if (activeItem === index) return;

      const prevIndex = prevIndexRef.current;
      const direction = index > prevIndex ? 1 : -1; // 1 = down, -1 = up

      setActiveItem(index);
      animateChange(index, prevIndex, direction);

      prevIndexRef.current = index;
    }

    const handleMouseLeave = () => {
      if (containerRef.current) {
        gsap.to(containerRef.current, { opacity: 0, duration: 0.5 });
      }
      setActiveItem(null);
      prevIndexRef.current = -1;
    }

    window.addEventListener('event:item-hover', handleItemHover);
    window.addEventListener('event:item-leave', handleMouseLeave);

    return () => {
      window.removeEventListener('event:item-hover', handleItemHover);
      window.removeEventListener('event:item-leave', handleMouseLeave);
    }
  }, [activeItem]);

  const animateChange = (currentIndex: number, prevIndex: number, direction: number) => {
    if (!containerRef.current) return;

    if (prevIndex === -1) {
      // First entry - fade in
      gsap.set(`.item-img-${currentIndex}`, { yPercent: 0, zIndex: 10 });
      gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      return;
    }

    const currentImg = `.item-img-${currentIndex}`;
    const prevImg = `.item-img-${prevIndex}`;

    // Reset Z-Index
    gsap.set('.item-img', { zIndex: 0 });
    gsap.set(currentImg, { zIndex: 10 });
    gsap.set(prevImg, { zIndex: 5 });

    // Initial position based on direction (100% = from bottom, -100% = from top)
    const enterFrom = direction === 1 ? 100 : -100;
    const exitTo = direction === 1 ? -100 : 100;

    // Animate new image entry
    gsap.fromTo(currentImg,
      { yPercent: enterFrom },
      { yPercent: 0, duration: 0.6, ease: "power3.out" }
    );

    // Animate previous image exit
    gsap.to(prevImg, {
      yPercent: exitTo,
      duration: 0.6,
      ease: "power3.out"
    });
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-1/2 right-[35%] w-[350px] h-[400px] pointer-events-none hidden md:block -translate-y-1/2 z-20 opacity-0"
    >
      <div ref={frameRef} className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`item-img item-img-${idx} absolute inset-0 w-full h-full`}
          >
            <img
              src={item.coverImage}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
