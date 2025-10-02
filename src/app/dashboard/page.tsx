import type { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { modules } from '@/lib/modules';
import { ModuleCard } from '@/components/dashboard/ModuleCard';
import { getModuleProgress } from '@/lib/firestore';

export default async function DashboardPage() {
  const user = auth.currentUser as User | null;
  const completedModules = user ? await getModuleProgress(user.uid) : [];
  
  return (
    <div 
      className="flex-1 animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Painel de Controle</h1>
        <p className="text-muted-foreground">Bem-vindo(a) de volta! Continue seu progresso.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            isCompleted={completedModules.includes(module.id)}
          />
        ))}
      </div>
    </div>
  );
}
