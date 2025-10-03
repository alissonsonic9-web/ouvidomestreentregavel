'use client';

import { useParams } from 'next/navigation';
import { modules } from '@/lib/modules';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ModuleDetailPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <p className="text-lg text-muted-foreground mb-4">Módulo não encontrado.</p>
        <Button asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Painel
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
       <div className="mb-8">
        <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
            </Link>
        </Button>
       </div>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <module.Icon className="h-10 w-10 text-primary" />
            <div>
                <CardTitle className="text-2xl">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-hidden w-full" style={{ paddingTop: '75%' /* 4:3 aspect ratio */ }}>
            <iframe 
              src="https://drive.google.com/file/d/12xxI-Hxf3ohBREP00ygDoNGC6W-eqClt/preview" 
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
