import React from 'react';
import { HIGHLIGHTS } from '../constants';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Highlights: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4 mb-10">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1d1d1f] tracking-tight">
          İşte öne çıkan başlıklar.
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-[max(calc((100vw-1024px)/2),1rem)] no-scrollbar pb-10"
        >
          {HIGHLIGHTS.map((item) => (
            <div 
              key={item.id} 
              className="snap-center shrink-0 w-[280px] md:w-[400px] lg:w-[700px] h-[400px] md:h-[500px] lg:h-[520px] bg-[#f5f5f7] rounded-[2rem] overflow-hidden relative transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="absolute inset-0 w-full h-full object-contain object-bottom pb-8 md:pb-0"
              />
              <div className="absolute top-0 left-0 p-8 md:p-10 w-full z-10">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1d1d1f] leading-snug md:leading-tight max-w-[90%] md:max-w-[80%]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-4 px-8 max-w-[1024px] mx-auto mt-4">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-[#e8e8ed] text-[#1d1d1f] flex items-center justify-center hover:bg-[#d2d2d7] transition-colors disabled:opacity-50"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-[#e8e8ed] text-[#1d1d1f] flex items-center justify-center hover:bg-[#d2d2d7] transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;