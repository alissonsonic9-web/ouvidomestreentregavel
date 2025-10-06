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
        title: 'Como Tocar de Ouvido - Aula 01',
        url: 'https://www.dropbox.com/scl/fi/pdne8ygivt41eyy9rle0i/COMO-TOCAR-DE-OUVIDO-01.mp4?rlkey=2f06md03mhqhbhaz13n7lg0rf&raw=1',
        type: 'video',
      },
      {
        title: 'Como Tocar de Ouvido - Aula 02',
        url: 'https://www.dropbox.com/scl/fi/h6a3gmxooyrt7wv1t54o5/COMO-TOCAR-DE-OUVIDO-02.mp4?rlkey=z96gqbgx1novzcrr3tbr8y2sh&raw=1',
        type: 'video',
      },
    ],
  },
];
