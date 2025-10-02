import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground", className)}>
      <Image 
        src="https://i.postimg.cc/KvhBn5yh/Creative-Color-Brushstroke-Lettering-Logo-2.png" 
        alt="Ouvido Mestre Logo"
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <span className="text-xl font-bold">Ouvido Mestre</span>
    </div>
  );
}
