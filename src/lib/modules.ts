import type { Module } from '@/types';
import { Ear, Music, VideoIcon } from 'lucide-react';

export const modules: Module[] = [
  {
    id: 'tocar-de-ouvido',
    title: 'Tocar de Ouvido',
    description: 'Aprenda a tocar qualquer música de ouvido.',
    Icon: Ear,
    content: [
      {
        title: 'Tocar de Ouvido - Completo',
        url: 'https://drive.google.com/file/d/12xxI-Hxf3ohBREP00ygDoNGC6W-eqClt/preview',
        type: 'pdf',
      },
    ],
  },
  {
    id: 'tocar-de-ouvido-simplificado',
    title: 'Tocar de Ouvido (Simplificado)',
    description: 'Uma versão simplificada para facilitar a interpretação.',
    Icon: Music,
    content: [
      {
        title: 'Tocar de Ouvido - Simplificado',
        url: 'https://drive.google.com/file/d/1TRQjntll_2NtAOQXVoaV-A2vNYD4GkBt/preview',
        type: 'pdf',
      },
    ],
  },
  {
    id: 'video-aulas',
    title: 'Videoaulas',
    description: 'Aulas em vídeo para aprofundar seu conhecimento.',
    Icon: VideoIcon,
    content: [
      {
        title: 'Videoaula de Harmonia',
        url: 'https://www.youtube.com/embed/txUHZLt4ePo',
        type: 'youtube',
      },
      {
        title: 'Videoaula 2',
        url: 'https://www.youtube.com/embed/DECG5O4c99E',
        type: 'youtube',
      },
      {
        title: 'Videoaula 3',
        url: 'https://www.youtube.com/embed/FQ29ex7Z0Dw',
        type: 'youtube',
      },
    ],
  },
];
