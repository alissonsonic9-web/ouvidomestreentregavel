import { Logo } from '@/components/shared/Logo';
import { UserNav } from '@/components/dashboard/UserNav';

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <Logo />
      <div className="ml-auto">
        <UserNav />
      </div>
    </header>
  );
}
