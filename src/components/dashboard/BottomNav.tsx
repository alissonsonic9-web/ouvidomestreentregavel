'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Play, BookOpen, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Principal', Icon: Home },
  { href: '/continue-watching', label: 'Continuar assistindo', Icon: Play },
  { href: '/more-content', label: 'Mais conteúdos', Icon: BookOpen },
  { href: '/settings', label: 'Configurações', Icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map(({ href, label, Icon }) => (
          <Link
            key={label}
            href={href}
            className={cn(
              'flex flex-col items-center justify-center gap-1 text-xs font-medium',
              pathname === href ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
