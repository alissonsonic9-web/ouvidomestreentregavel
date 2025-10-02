'use client';

import { useTransition } from 'react';
import type { Module } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { toggleModuleCompletion as toggleModuleCompletionClient } from '@/lib/firestore'; // Renamed to avoid conflict
import { useToast } from '@/hooks/use-toast';
import { Spinner } from '../shared/Spinner';
import { useUser } from '@/firebase';
import Link from 'next/link';

type ModuleCardProps = {
  module: Module;
  isCompleted: boolean;
};

export function ModuleCard({ module, isCompleted }: ModuleCardProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { user } = useUser();
  
  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Evita que o clique no checkbox acione o link do card
    if (!user) {
      toast({
        title: 'Erro',
        description: 'Você precisa estar logado para alterar o status do módulo.',
        variant: 'destructive',
      });
      return;
    }
    
    startTransition(async () => {
      try {
        await toggleModuleCompletionClient(user.uid, module.id, isCompleted);
        // A UI agora será atualizada automaticamente pelo listener onSnapshot.
      } catch (error) {
        toast({
          title: 'Erro',
          description: 'Não foi possível atualizar o status do módulo.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <Link href={`/dashboard/module/${module.id}`} className="group block">
        <Card className={cn(
            "transition-all group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col aspect-[9/16] md:aspect-auto h-full", 
            isCompleted && "bg-card/60 border-primary/30"
        )}>
        <CardHeader className="flex-row items-start gap-4 space-y-0">
            <div className="flex-shrink-0">
            <module.Icon className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
            <CardTitle className="text-lg">{module.title}</CardTitle>
            <CardDescription className="hidden md:block">{module.description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="mt-auto">
            <div 
              className="flex items-center space-x-2 rounded-md border p-3 hover:bg-accent"
              onClick={(e) => e.stopPropagation()} // Impede que cliques na área do checkbox propaguem para o Link
            >
            <Checkbox
                id={`complete-${module.id}`}
                checked={isCompleted}
                onClick={onToggle}
                disabled={isPending}
                aria-label={`Marcar ${module.title} como concluído`}
            />
            <label
                htmlFor={`complete-${module.id}`}
                className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {isCompleted ? 'Concluído' : 'Concluir'}
            </label>
            {isPending && <Spinner size="sm" />}
            </div>
        </CardContent>
        </Card>
    </Link>
  );
}
