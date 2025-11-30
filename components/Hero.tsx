import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 bg-[#f5f5f7]">
      <div className="flex flex-col items-center justify-center text-center px-4">
        {/* Logo/Heading */}
        <h1 className="mb-2">
          <span className="sr-only">iPad Air</span>
          {/* Using text fallback for the logo image for simplicity, or we can use an img tag */}
          <img 
            src="https://www.apple.com/v/ipad-air/ae/images/overview/hero/hero_intro_logo__bnacncm3ehma_large.png" 
            alt="iPad Air Logo" 
            className="h-10 md:h-16 mx-auto object-contain"
          />
        </h1>
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-8 mt-2 text-gradient">
          İyi uçuşlar.
        </h2>

        {/* Hero Video/Image */}
        <div className="w-full max-w-5xl mx-auto mb-10 relative">
           <video 
            ref={videoRef}
            muted 
            playsInline 
            autoPlay 
            loop // Looping for demo purposes as we don't have scroll-linked animation logic
            className="w-full h-auto object-contain pointer-events-none"
            src="https://www.apple.com/105/media/us/ipad-air/2024/df9239d9-b05f-4fc6-9f57-8ce5c168833f/anim/hero/large.mp4"
          >
            <img 
              src="https://www.apple.com/v/ipad-air/ae/images/overview/hero/hero_endframe__fvm22b45e5me_large.png" 
              alt="iPad Air Hero" 
              className="w-full h-auto"
            />
          </video>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <a 
            href="#" 
            className="inline-block bg-[#0071e3] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#0077ed] transition-colors"
          >
            Satın Alın
          </a>
          <p className="text-[#1d1d1f] font-medium text-lg">
            Başlangıç fiyatı: 34.999 TL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
