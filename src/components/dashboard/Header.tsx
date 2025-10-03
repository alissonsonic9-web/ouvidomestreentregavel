'use client';

import { Logo } from '@/components/shared/Logo';
import { UserNav } from '@/components/dashboard/UserNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

export function Header() {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6 justify-between">
      {isMobile ? (
        <>
          <Button variant="outline" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <UserNav />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1">
            {/* Desktop header content can go here if needed */}
          </div>
          <div className="flex items-center gap-4">
            <UserNav />
          </div>
        </>
      )}
    </header>
  );
}
