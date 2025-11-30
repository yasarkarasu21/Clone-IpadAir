import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'Alışveriş ve Detaylı Bilgi', links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods'] },
    { title: 'Hesap', links: ['Apple Hesabınızı Yönetin', 'Apple Store Hesabı', 'iCloud.com'] },
    { title: 'Apple Store', links: ['Mağaza Bulun', 'Genius Bar', 'Today at Apple', 'Apple Kampı'] },
    { title: 'Kurumsal', links: ['Apple ve İş Dünyası', 'Eğitim İçin Alışveriş'] },
    { title: 'Apple Değerleri', links: ['Erişilebilirlik', 'Çevre', 'Gizlilik'] },
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs py-10 border-t border-gray-200">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes */}
        <div className="border-b border-gray-300 pb-6 mb-6 text-[#86868b] space-y-2">
          <p>1. Apple Intelligence beta sürümündedir.</p>
          <p>2. Ekranlar yuvarlatılmış köşelere sahiptir.</p>
          <p>3. Aksesuarlar ayrı satılır.</p>
        </div>

        {/* Directory */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="pt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500">Telif Hakkı © 2025 Apple Inc. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:underline">Gizlilik Politikası</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Kullanım Şartları</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Satış ve Para İadesi</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Site Haritası</a>
          </div>
          <a href="#" className="text-gray-600 hover:underline">Türkiye</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
