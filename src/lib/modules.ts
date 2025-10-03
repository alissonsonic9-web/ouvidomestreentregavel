import type { Module } from '@/types';
import { Ear, FileText } from 'lucide-react';

export const modules: Module[] = [
  {
    id: 'tocar-de-ouvido',
    title: 'Tocar de Ouvido',
    description: 'Aprenda a tocar qualquer música de ouvido.',
    Icon: Ear,
  },
  {
    id: 'tocar-de-ouvido-simplificado',
    title: 'Tocar de Ouvido (Simplificado)',
    description: 'Uma versão simplificada para facilitar a interpretação.',
    Icon: FileText,
  },
];
