import { Home, Play, BookOpen, Settings } from 'lucide-react';

export const navItems = [
  { href: '/dashboard', label: 'Principal', Icon: Home },
  { href: '/dashboard/continue-watching', label: 'Continuar assistindo', Icon: Play },
  { href: '/dashboard/more-content', label: 'Mais conteúdos', Icon: BookOpen },
  { href: '/dashboard/settings', label: 'Configurações', Icon: Settings },
];
