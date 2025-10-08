import type { LucideIcon } from 'lucide-react';

export type ModuleContent = {
  title: string;
  url: string;
  type: 'pdf' | 'video' | 'youtube';
};

export type Module = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  content: ModuleContent[];
};
