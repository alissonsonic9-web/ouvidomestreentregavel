'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useUser } from '@/firebase';
import { modules } from '@/lib/modules';
import { setLastAccessedModule } from '@/lib/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ModuleDetailPage() {
  const params = useParams();
  const { user } = useUser();
  const moduleId = params.moduleId as string;
  const module = modules.find((m) => m.id === moduleId);

  useEffect(() => {
    if (user && moduleId) {
      setLastAccessedModule(user.uid, moduleId);
    }
  }, [user, moduleId]);

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

  const renderContent = () => {
    if (module.contentType === 'video') {
      return (
        <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <video
            src={module.contentUrl}
            controls
            className="absolute top-0 left-0 w-full h-full"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      );
    }

    // Default to iframe for PDFs or other content
    return (
      <div className="relative overflow-hidden w-full" style={{ paddingTop: '75%' /* 4:3 aspect ratio */ }}>
        <iframe
          src={module.contentUrl}
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay"
        ></iframe>
      </div>
    );
  };

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
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
}
