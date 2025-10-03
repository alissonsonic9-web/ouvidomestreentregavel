import type { Module } from '@/types';
import { Ear, Music } from 'lucide-react';

export const modules: Module[] = [
  {
    id: 'tocar-de-ouvido',
    title: 'Tocar de Ouvido',
    description: 'Aprenda a tocar qualquer música de ouvido.',
    Icon: Ear,
    contentUrl: 'https://drive.google.com/file/d/12xxI-Hxf3ohBREP00ygDoNGC6W-eqClt/preview',
  },
  {
    id: 'tocar-de-ouvido-simplificado',
    title: 'Tocar de Ouvido (Simplificado)',
    description: 'Uma versão simplificada para facilitar a interpretação.',
    Icon: Music,
    contentUrl: 'https://drive.google.com/file/d/1TRQjntll_2NtAOQXVoaV-A2vNYD4GkBt/preview',
  },
];
