import React, { useState } from 'react';
import { DeviceSize } from '../types';
import { PlusCircle, Cpu, Palette, ScanFace, PenTool, Keyboard, Camera, Wand2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PERFORMANCE_DATA } from '../constants';

export const SizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<DeviceSize>(DeviceSize.Size13);

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-semibold mb-2 tracking-tight">İki farklı boyut.</h2>
        <h2 className="text-4xl md:text-6xl font-semibold text-gradient mb-12 tracking-tight">Sonsuz olasılık.</h2>

        <div className="relative mb-12 h-[300px] md:h-[500px] flex items-end justify-center overflow-hidden">
          {/* Simulated Image Swap with Transition */}
          <div className={`transition-all duration-700 ease-out absolute bottom-0 ${selectedSize === DeviceSize.Size13 ? 'opacity-100 scale-100 translate-x-0 blur-0 z-10' : 'opacity-0 scale-95 translate-x-10 blur-sm z-0'}`}>
             <img src="https://www.apple.com/tr/ipad-air/images/overview/two-sizes/gallery-toggle/spin_static__bdjk0pc0tphe_large.png" alt="13 inch" className="h-[300px] md:h-[500px] object-contain drop-shadow-2xl" />
          </div>
          <div className={`transition-all duration-700 ease-out absolute bottom-0 ${selectedSize === DeviceSize.Size11 ? 'opacity-100 scale-100 translate-x-0 blur-0 z-10' : 'opacity-0 scale-95 -translate-x-10 blur-sm z-0'}`}>
             <img src="https://www.apple.com/tr/ipad-air/images/overview/two-sizes/gallery-toggle/spin_reverse_static__ehmkt90jzu6a_large.png" alt="11 inch" className="h-[250px] md:h-[420px] object-contain drop-shadow-2xl" />
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setSelectedSize(DeviceSize.Size11)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedSize === DeviceSize.Size11 ? 'bg-[#1d1d1f] text-white shadow-lg transform scale-105' : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'}`}
          >
            11 inç model
          </button>
          <button 
            onClick={() => setSelectedSize(DeviceSize.Size13)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedSize === DeviceSize.Size13 ? 'bg-[#1d1d1f] text-white shadow-lg transform scale-105' : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'}`}
          >
            13 inç model
          </button>
        </div>

        <p className="text-[#86868b] font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          İster 11 inç isterseniz 13 inç iPad Air modellerinden birini seçin. Her ikisinin de sahip olduğu göz alıcı, yüksek çözünürlüklü Liquid Retina ekran, yapmayı sevdiğiniz her şeye hayat katıyor.
        </p>
        
        <button className="mt-8 text-[#0066cc] hover:underline flex items-center gap-2 mx-auto font-medium transition-colors hover:text-[#004499]">
          <PlusCircle size={20} />
          <span>Ekran ayrıntılarını inceleyin</span>
        </button>
      </div>
    </section>
  );
};

export const AppleIntelligenceSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-[#fff5f7] to-white opacity-50 pointer-events-none"></div>
      <div className="max-w-[1024px] mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
           <h2 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 mb-3">
             Apple Intelligence
           </h2>
           <h3 className="text-4xl md:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">
             Kişisel, gizli ve güçlü.
           </h3>
           <p className="text-[#86868b] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
             iPad Air, kendinizi ifade etmenize ve işlerinizi kolayca halletmenize yardımcı olan kişisel yapay zeka sistemi Apple Intelligence için tasarlandı.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Writing Tools */}
           <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300">
              <div className="mb-8 h-48 w-full flex items-center justify-center bg-white rounded-2xl shadow-sm overflow-hidden relative group">
                 <img src="https://www.apple.com/v/ipad-air/ae/images/overview/apple-intelligence/writingtools__d5nqlmsxqfiq_large.png" className="w-[90%] transition-transform duration-700 group-hover:scale-110" alt="Yazma Araçları" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Yazma Araçları</h4>
              <p className="text-gray-500">Metinlerinizi düzeltin, özetleyin veya yeniden yazın. Nerede yazarsanız yazın, doğru kelimeleri bulun.</p>
           </div>

           {/* Image Playground */}
           <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300">
              <div className="mb-8 h-48 w-full flex items-center justify-center bg-white rounded-2xl shadow-sm overflow-hidden relative group">
                 <Wand2 size={64} className="text-purple-500 transition-transform duration-500 group-hover:rotate-12" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-transparent pointer-events-none"></div>
              </div>
              <h4 className="text-2xl font-semibold mb-3">Görsel Sihirbazı</h4>
              <p className="text-gray-500">Taslak çizimlerinizi harika görsellere dönüştürün. Image Playground ile tamamen yeni görseller oluşturun.</p>
           </div>

           {/* Privacy */}
           <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300">
              <div className="mb-8 h-48 w-full flex items-center justify-center bg-white rounded-2xl shadow-sm overflow-hidden relative group">
                 <div className="bg-green-50 p-6 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                    <ScanFace size={56} className="text-green-600" />
                 </div>
              </div>
              <h4 className="text-2xl font-semibold mb-3">Özel Bulut Bilişim</h4>
              <p className="text-gray-500">Verileriniz Apple ile paylaşılmaz. Gizliliğiniz, aygıt içi işlemenin ötesine geçerek bulutta da korunur.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export const M3ChipSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#1d1d1f] text-white overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="md:w-2/3">
            <div className="inline-flex items-center gap-3 mb-6 p-2 pr-6 bg-white/10 rounded-full w-fit backdrop-blur-sm">
               <div className="bg-[#2997ff] p-2 rounded-full">
                 <Cpu size={24} className="text-white" />
               </div>
               <span className="font-semibold tracking-wide">M3 ÇİP</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
              M3. <br/><span className="text-gradient-blue">Güçlü bir alkış.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              iPad Air şimdi M3 çipin inanılmaz performansına sahip. 8 çekirdekli CPU, 10 çekirdekli GPU ve Neural Engine ile M1 çipe sahip iPad Air'e kıyasla %50'ye kadar daha hızlı.
            </p>
          </div>
          
          <div className="md:w-1/3 w-full bg-[#2d2d2d] p-6 rounded-2xl border border-white/5">
             <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">M1'e Kıyasla Performans</h3>
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-base font-medium mb-2"><span>CPU</span><span className="text-blue-400">1.5x Daha Hızlı</span></div>
                   <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[80%] rounded-full"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-base font-medium mb-2"><span>GPU</span><span className="text-purple-400">1.6x Daha Hızlı</span></div>
                   <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[85%] rounded-full"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-base font-medium mb-2"><span>Neural Engine</span><span className="text-orange-400">%60 Daha Hızlı</span></div>
                   <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[95%] rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
           <img src="https://www.apple.com/v/ipad-air/ae/images/overview/chip/hero_bottom__bfmqcj7euvf6_large.jpg" alt="Gaming on M3" className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
              <h4 className="text-3xl font-bold mb-3">Grafik canavarı.</h4>
              <p className="text-gray-300 text-lg">Donanım hızlandırmalı ışın izleme ve örgü gölgelendirme teknolojileriyle konsol kalitesinde oyun deneyimi.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export const CameraSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
          Kameralar. <br/><span className="text-gray-500">Hayal ettiğiniz her anı yakalayın.</span>
        </h2>
        <p className="text-[#86868b] text-xl max-w-3xl mx-auto mb-16">
          Gelişmiş ön ve arka kameralar, M3 çipin gücüyle birleşerek fotoğraf, video ve aramalarınızı bir üst seviyeye taşıyor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Front Camera */}
           <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="h-[350px] bg-gray-100 relative overflow-hidden">
                 <img 
                   src="https://www.apple.com/v/ipad-air/ae/images/overview/cameras/modal/front_landscape_camera_screen__djazchpx0w6e_large.jpg" 
                   alt="Center Stage" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full">
                    <Camera size={20} className="text-white" />
                 </div>
              </div>
              <div className="p-10 text-left">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wide">Ön Kamera</span>
                 </div>
                 <h3 className="text-3xl font-semibold mb-3">Yatay 12 MP Ultra Geniş Kamera</h3>
                 <p className="text-gray-500 leading-relaxed mb-6">
                   Artık iPad Air'in uzun kenarında. <strong>Ana Sahne</strong> özelliği, yapay öğrenme teknolojisi sayesinde görüntülü aramalarda siz hareket etseniz bile sizi kadrajın ortasında tutar.
                 </p>
              </div>
           </div>

           {/* Back Camera */}
           <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="h-[350px] bg-gray-100 relative overflow-hidden">
                 <img 
                   src="https://www.apple.com/v/ipad-air/ae/images/overview/cameras/modal/back_camera__ejrz57qieeaa_large.jpg" 
                   alt="Back Camera" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full">
                    <Camera size={20} className="text-white" />
                 </div>
              </div>
              <div className="p-10 text-left">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full uppercase tracking-wide">Arka Kamera</span>
                 </div>
                 <h3 className="text-3xl font-semibold mb-3">12 MP Geniş Kamera</h3>
                 <p className="text-gray-500 leading-relaxed mb-6">
                   Capcanlı fotoğraflar ve <strong>4K videolar</strong> çekin. Belgeleri tarayın ve M3 çipin gücüyle anında işaretleyip gönderin.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const PencilAndKeyboard: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-semibold mb-4 tracking-tight">Aksesuarlar.</h2>
           <h3 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8 tracking-tight">
             Yaratıcılığın uç noktası.
           </h3>
           <p className="text-[#86868b] text-xl max-w-3xl mx-auto">
             Apple Pencil Pro ve Magic Keyboard ile iPad Air'in sınırlarını zorlayın. M3 çipin sağladığı düşük gecikme süresi ve hızlı tepkime ile mükemmel uyum.
           </p>
        </div>

        {/* Pencil Pro Section */}
        <div className="mb-24">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
            <img 
              src="https://www.apple.com/tr/ipad-air/images/overview/apple-pencil-pro/modal/hero__giio85wbt76m_large.jpg" 
              alt="Apple Pencil Art" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute top-8 left-8 md:top-12 md:left-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-md shadow-sm">
               <h4 className="text-2xl font-bold mb-2 flex items-center gap-2">
                 <PenTool size={24} className="text-black" />
                 Apple Pencil Pro
               </h4>
               <p className="text-gray-600 mb-4">Sıkıştırma, döndürme ve dokunsal geri bildirim ile şimdiye kadarki en gelişmiş Apple Pencil deneyimi.</p>
               <ul className="space-y-2 text-sm font-medium text-[#1d1d1f]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Dokunmadan Algılama (Hover)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Çift Dokunuş</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Manyetik Yapışma ve Şarj</li>
               </ul>
            </div>
          </div>
        </div>

        {/* Magic Keyboard Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-[#f5f5f7] rounded-3xl p-8 md:p-16">
          <div className="w-full md:w-1/2">
             <div className="mb-6 inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm">
                <Keyboard size={32} className="text-[#1d1d1f]" />
             </div>
             <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f]">Magic Keyboard</h3>
             <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               Askı modeli tasarımı, arkadan aydınlatmalı tuşlar ve yerleşik trackpad ile iPad Air için mükemmel bir yol arkadaşı. M3 çipin verimliliği sayesinde uzun süreli kullanım sunar.
             </p>
             <button className="text-[#0066cc] font-medium hover:underline text-lg">
                Klavyeler hakkında bilgi edinin &rarr;
             </button>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://www.apple.com/tr/ipad-air/images/overview/keyboard/magic_keyboard_endframe__71lhsq2krsyy_large.png" 
              alt="Magic Keyboard" 
              className="w-full drop-shadow-2xl transform hover:-translate-y-2 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};