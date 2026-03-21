import { useState, useRef } from 'react';
import { testimonials } from '@/config/testimonials.data';
import { useCarouselAnimation } from '@/hooks/useCarouselAnimation';

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="m268 112l144 144l-144 144m124-144H100"
    />
  </svg>
);

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useCarouselAnimation(cardsRefs.current, currentIndex);

  const totalSlides = testimonials.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Drag/swipe handling
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div className="testimonial-carousel relative mx-auto w-full max-w-7xl">
      {/* Carousel Viewport */}
      <div
        className="relative overflow-hidden px-4 md:px-16 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto h-auto min-h-[500px] flex items-center">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            const zIndex = isActive ? 10 : totalSlides - Math.abs(index - currentIndex);

            return (
              <div
                key={testimonial.author}
                ref={(el) => { cardsRefs.current[index] = el; }}
                className="absolute w-full h-full flex flex-col items-center justify-around text-center select-none rounded-2xl border border-muted-light/20 bg-secondary"
                style={{
                  transformOrigin: 'center center',
                  zIndex: zIndex,
                  clipPath: isActive ? 'none' : 'inset(0)',
                }}
              >
                <blockquote className="mx-auto px-4 md:px-12 text-base leading-relaxed font-medium md:text-3xl">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="border-primary/20 h-16 w-16 overflow-hidden rounded-full border md:h-20 md:w-20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-center">
                    <cite className="font-boldonse block text-xs font-bold tracking-wider uppercase not-italic md:text-xl">
                      {testimonial.author}
                    </cite>
                    <span className="text-muted-light text-xs font-medium tracking-widest uppercase md:text-sm">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons (Desktop) */}
      <button
        onClick={goToPrevious}
        className="cursor-pointer text-primary hover:bg-primary hover:text-body hover:border-primary group absolute top-1/2 -left-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 lg:flex"
        aria-label="Previous testimonial"
      >
        <ArrowIcon className="h-5 w-5 rotate-180" />
      </button>

      <button
        onClick={goToNext}
        className="cursor-pointer text-primary hover:bg-primary hover:text-body hover:border-primary group absolute top-1/2 -right-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 lg:flex"
        aria-label="Next testimonial" 
      >
        <ArrowIcon className="h-5 w-5" />
      </button>

      {/* Mobile Navigation */}
      <div className="mt-12 flex justify-center gap-6 lg:hidden">
        <button
          onClick={goToPrevious}
          className="border-primary/10 text-primary hover:bg-primary hover:text-body flex h-12 w-12 items-center justify-center rounded-full border transition-all"
          aria-label="Previous testimonial"
        >
          <ArrowIcon className="h-5 w-5 rotate-180" />
        </button>
        <button
          onClick={goToNext}
          className="border-primary/10 text-primary hover:bg-primary hover:text-body flex h-12 w-12 items-center justify-center rounded-full border transition-all"
          aria-label="Next testimonial"
        >
          <ArrowIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-primary/30 hover:bg-primary/50'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
