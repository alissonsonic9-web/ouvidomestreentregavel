import type { Module } from '@/types';
import { BookOpen, Target, Code, TestTube, TrendingUp } from 'lucide-react';

export const modules: Module[] = [
  {
    id: 'introducao',
    title: 'Módulo 1: Introdução',
    description: 'Comece sua jornada e entenda os fundamentos.',
    Icon: BookOpen,
  },
  {
    id: 'estrategias',
    title: 'Módulo 2: Estratégias',
    description: 'Aprenda as melhores estratégias para o sucesso.',
    Icon: Target,
  },
  {
    id: 'implementacao',
    title: 'Módulo 3: Implementação',
    description: 'Coloque em prática o que você aprendeu.',
    Icon: Code,
  },
  {
    id: 'testes',
    title: 'Módulo 4: Testes',
    description: 'Teste e otimize suas implementações.',
    Icon: TestTube,
  },
  {
    id: 'escala',
    title: 'Módulo 5: Escala',
    description: 'Escale suas operações para o próximo nível.',
    Icon: TrendingUp,
  },
];
