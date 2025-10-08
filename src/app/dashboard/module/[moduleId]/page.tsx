'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useUser } from '@/firebase';
import { modules } from '@/lib/modules';
import { setLastAccessedModule } from '@/lib/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { ModuleContent } from '@/types';

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

  const renderContent = (contentItem: ModuleContent, index: number) => {
    switch (contentItem.type) {
      case 'video':
        return (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{contentItem.title}</h3>
            <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
              <video
                src={contentItem.url}
                controls
                preload="metadata"
                className="absolute top-0 left-0 w-full h-full"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        );
      case 'pdf':
      case 'youtube':
        return (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{contentItem.title}</h3>
            <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={contentItem.url}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      default:
        return null;
    }
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
          {module.content.map((item, index) => (
            <React.Fragment key={index}>
              {renderContent(item, index)}
              {index < module.content.length - 1 && <Separator className="my-8" />}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
