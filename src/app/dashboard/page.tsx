'use client';
import { useMemo } from 'react';
import { doc, getFirestore } from 'firebase/firestore';
import { useUser, useDoc } from '@/firebase';
import { modules } from '@/lib/modules';
import { ModuleCard } from '@/components/dashboard/ModuleCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { Spinner } from '@/components/shared/Spinner';

export default function DashboardPage() {
  const { user } = useUser();
  const isMobile = useIsMobile();
  const db = getFirestore();

  // Memoize the document reference to prevent re-renders
  const userDocRef = useMemo(() => {
    if (user) {
      return doc(db, 'users', user.uid);
    }
    return null;
  }, [user, db]);

  // Use the real-time hook to get user data
  const { data: userData, isLoading: isUserDocLoading } = useDoc(userDocRef);

  const completedModules = useMemo(() => {
    return userData?.completedModules || [];
  }, [userData]);

  if (isUserDocLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div
      className="flex-1 animate-in pb-20 md:pb-0"
      style={{ '--index': 1 } as React.CSSProperties}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Painel de Controle</h1>
        <p className="text-muted-foreground">
          Bem-vindo(a) de volta! Continue seu progresso.
        </p>
      </div>
      {isMobile ? (
        <div className="grid grid-cols-1 gap-4">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isCompleted={completedModules.includes(module.id)}
            />
          ))}
        </div>
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
