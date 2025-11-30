import { NavLink, HighlightItem, SpecData } from './types';

export const GLOBAL_NAV_LINKS: NavLink[] = [
  { label: 'Store', href: '#' },
  { label: 'Mac', href: '#' },
  { label: 'iPad', href: '#' },
  { label: 'iPhone', href: '#' },
  { label: 'Watch', href: '#' },
  { label: 'AirPods', href: '#' },
  { label: 'TV ve Ev', href: '#' },
  { label: 'Eğlence', href: '#' },
  { label: 'Aksesuarlar', href: '#' },
  { label: 'Destek', href: '#' },
];

export const LOCAL_NAV_LINKS: NavLink[] = [
  { label: 'Genel Bakış', href: '#' },
  { label: 'Teknik Özellikler', href: '#' },
  { label: 'Karşılaştırın', href: '#' },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 1,
    title: 'Yeni iPad Air. Apple M3 çip ile çok güçlü. Tüm görevlere hazır. Apple Intelligence için tasarlandı.',
    image: 'https://www.apple.com/tr/ipad-air/images/overview/highlights/overview__ftbt78x57ueu_large.png',
    type: 'image',
    alt: 'iPad Air Overview',
  },
  {
    id: 2,
    title: 'Dört mükemmel renk. 11 inç ve 13 inç seçeneği. Her iki modelde de göz alıcı Liquid Retina ekran.',
    image: 'https://www.apple.com/tr/ipad-air/images/overview/highlights/sizes__rlelo55046iy_large.png',
    type: 'image',
    alt: 'iPad Air Sizes',
  },
  {
    id: 3,
    title: 'İleri seviye yaratıcılık için Apple Pencil Pro. Ve şimdi 14 tuşlu işlev tuşu sırası ve daha geniş trackpad ile Magic Keyboard.',
    image: 'https://www.apple.com/tr/ipad-air/images/overview/highlights/pencil__fxk4r1ij8tei_large.jpg',
    type: 'image',
    alt: 'Apple Pencil Pro',
  },
  {
    id: 4,
    title: 'iPadOS ve muhteşem uygulamalar, işlerinizi halletmenin sihirli ve kullanıcı dostu yollarını sunuyor.',
    image: 'https://www.apple.com/tr/ipad-air/images/overview/highlights/ipados__cyr733thza0y_large.png',
    type: 'image',
    alt: 'iPadOS',
  },
];

export const PERFORMANCE_DATA: SpecData[] = [
  { label: 'CPU Performance', value: 80, fullMark: 100 },
  { label: 'GPU Performance', value: 90, fullMark: 100 },
  { label: 'Neural Engine', value: 95, fullMark: 100 },
];
