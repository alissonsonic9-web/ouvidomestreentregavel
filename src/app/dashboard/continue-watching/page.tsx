'use client';

import { useMemo } from 'react';
import { doc, getFirestore } from 'firebase/firestore';
import { useUser, useDoc } from '@/firebase';
import { modules } from '@/lib/modules';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { Spinner } from '@/components/shared/Spinner';

export default function ContinueWatchingPage() {
  const { user } = useUser();
  const db = getFirestore();

  const userDocRef = useMemo(() => {
    if (user) {
      return doc(db, 'users', user.uid);
    }
    return null;
  }, [user, db]);

  const { data: userData, isLoading } = useDoc(userDocRef);

  const lastAccessedModuleId = userData?.lastAccessedModuleId;
  const lastModule = useMemo(() => {
    return modules.find(m => m.id === lastAccessedModuleId);
  }, [lastAccessedModuleId]);

  return (
    <div className="flex-1 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
      <Card>
        <CardHeader>
          <CardTitle>Continuar Assistindo</CardTitle>
          <CardDescription>Volte para o último módulo que você acessou.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex justify-center items-center h-40">
              <Spinner />
            </div>
          )}
          {!isLoading && lastModule && (
            <Card className="overflow-hidden">
                <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                        <div className="hidden sm:block">
                            <PlayCircle className="w-16 h-16 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Continue de onde parou</p>
                            <h3 className="text-xl font-bold mb-1">{lastModule.title}</h3>
                            <p className="text-muted-foreground line-clamp-2 mb-4">{lastModule.description}</p>
                            <Button asChild>
                                <Link href={`/dashboard/module/${lastModule.id}`}>
                                    Continuar Agora <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
          )}
          {!isLoading && !lastModule && (
            <div className="text-center py-10 px-4 border-2 border-dashed rounded-lg">
              <PlayCircle className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">Nenhum módulo acessado recentemente</h3>
              <p className="mt-1 text-sm text-muted-foreground">Comece a explorar um módulo e ele aparecerá aqui.</p>
              <Button asChild className="mt-4">
                <Link href="/dashboard">Explorar Módulos</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
