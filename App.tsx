import React from 'react';
import { GlobalNav, LocalNav } from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import { SizeSelector, M3ChipSection, AppleIntelligenceSection, PencilAndKeyboard, CameraSection } from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased selection:bg-[#0071e3] selection:text-white">
      <GlobalNav />
      <LocalNav />
      <main>
        <Hero />
        <Highlights />
        <SizeSelector />
        <M3ChipSection />
        <AppleIntelligenceSection />
        <CameraSection />
        <PencilAndKeyboard />
        
        {/* Connectivity Section (Simplified inline) */}
        <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f7] text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-semibold mb-2">Bağlantı.</h2>
            <h2 className="text-4xl md:text-6xl font-semibold text-gradient mb-8">Hızlı ve kablosuz.</h2>
            <p className="text-[#86868b] text-lg max-w-2xl mx-auto">
              Işık hızında Wi-Fi 6E. Ve 5G hücresel bağlantı özellikleri.
            </p>
            <div className="mt-12">
               <img 
                 src="https://www.apple.com/tr/ipad-air/images/overview/connectivity/connectivity_endframe__caymxw78xf9e_large.jpg" 
                 alt="Connectivity" 
                 className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
               />
            </div>
          </div>
        </section>

        {/* Why Apple Section */}
        <section className="py-20 bg-[#f5f5f7]">
          <div className="max-w-[1024px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
              iPad’inizi neden <br/>Apple’dan satın almalısınız?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Ödeme kolaylıkları', desc: 'Taksit seçenekleri.', icon: '💳' },
                { title: 'Eğitime özel', desc: 'Tasarruf edin.', icon: '🎓' },
                { title: 'Ücretsiz kargo', desc: 'Hızlı gönderim.', icon: '🚚' },
                { title: 'Kişiselleştirin', desc: 'Ücretsiz lazer baskı.', icon: '✍️' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;