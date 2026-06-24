import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import commandCenterImg from '../assets/civil-command-center.jpeg';
import projectListImg from '../assets/civil-project-list.jpeg';
import labourImg from '../assets/civil-labour.jpeg';
import transactionsImg from '../assets/civil-transactions.jpeg';
import materialsImg from '../assets/civil-materials.jpeg';
import aiAssistantImg from '../assets/civil-ai-assistant.jpeg';

const slides = [
  { id: 'command-center', title: 'Command Center', image: commandCenterImg },
  { id: 'projects', title: 'Project List', image: projectListImg },
  { id: 'labour', title: 'Labour Tracking', image: labourImg },
  { id: 'transactions', title: 'Transactions', image: transactionsImg },
  { id: 'materials', title: 'Materials Master', image: materialsImg },
  { id: 'ai-assistant', title: 'AI Assistant', image: aiAssistantImg },
];

export default function CivilProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const maxIndex = slides.length - 1;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 3800);
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-xl border border-border/80 bg-[#101010] shadow-[0_0_24px_rgba(212,175,55,0.08)]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="relative aspect-[16/9] bg-black">
                <img
                  src={slide.image}
                  alt={`${slide.title} screen from Civil Project Management System`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-black/80 p-2.5 text-white opacity-0 shadow-lg transition-all hover:border-gold/60 hover:text-gold group-hover:opacity-100"
        aria-label="Previous civil product screenshot"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-black/80 p-2.5 text-white opacity-0 shadow-lg transition-all hover:border-gold/60 hover:text-gold group-hover:opacity-100"
        aria-label="Next civil product screenshot"
      >
        <ChevronRight size={20} />
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === idx ? 'w-6 bg-gold' : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Show ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}
