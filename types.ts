export interface NavLink {
  label: string;
  href: string;
}

export interface HighlightItem {
  id: number;
  title: string;
  image: string;
  type: 'image' | 'video';
  alt: string;
}

export enum DeviceSize {
  Size11 = '11',
  Size13 = '13',
}

export interface SpecData {
  label: string;
  value: number;
  fullMark: number;
}
