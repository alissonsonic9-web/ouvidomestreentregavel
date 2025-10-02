'use client';
import type { User } from 'firebase/auth';
import { modules } from '@/lib/modules';
import { ModuleCard } from '@/components/dashboard/ModuleCard';
import { getModuleProgress } from '@/lib/firestore';
import { useAuth } from '@/firebase';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function DashboardPage() {
  const auth = useAuth();
  const user = auth.currentUser as User | null;
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    async function fetchProgress() {
      if (user) {
        const progress = await getModuleProgress(user.uid);
        setCompletedModules(progress);
      }
    }
    fetchProgress();
  }, [user]);

  
  return (
    <div 
      className="flex-1 animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Painel de Controle</h1>
        <p className="text-muted-foreground">Bem-vindo(a) de volta! Continue seu progresso.</p>
      </div>
      {isMobile ? (
         <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {modules.map((module) => (
              <CarouselItem key={module.id} className="basis-1/2 pl-4 md:basis-1/3">
                <div className="p-1">
                  <ModuleCard
                    module={module}
                    isCompleted={completedModules.includes(module.id)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isCompleted={completedModules.includes(module.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
