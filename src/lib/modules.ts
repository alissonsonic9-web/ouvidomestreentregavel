import type { Module } from '@/types';
import { Ear, Music, VideoIcon } from 'lucide-react';

export const modules: Module[] = [
  {
    id: 'tocar-de-ouvido',
    title: 'Tocar de Ouvido',
    description: 'Aprenda a tocar qualquer música de ouvido.',
    Icon: Ear,
    contentUrl: 'https://drive.google.com/file/d/12xxI-Hxf3ohBREP00ygDoNGC6W-eqClt/preview',
    contentType: 'pdf',
  },
  {
    id: 'tocar-de-ouvido-simplificado',
    title: 'Tocar de Ouvido (Simplificado)',
    description: 'Uma versão simplificada para facilitar a interpretação.',
    Icon: Music,
    contentUrl: 'https://drive.google.com/file/d/1TRQjntll_2NtAOQXVoaV-A2vNYD4GkBt/preview',
    contentType: 'pdf',
  },
  {
    id: 'video-aulas',
    title: 'Videoaulas',
    description: 'Aulas em vídeo para aprofundar seu conhecimento.',
    Icon: VideoIcon,
    contentUrl: 'https://www.dropbox.com/scl/fi/pdne8ygivt41eyy9rle0i/COMO-TOCAR-DE-OUVIDO-01.mp4?rlkey=2f06md03mhqhbhaz13n7lg0rf&raw=1',
    contentType: 'video',
  },
];
