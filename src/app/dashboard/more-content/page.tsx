'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MoreContentPage() {
  return (
    <div className="flex-1 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
      <Card>
        <CardHeader>
          <CardTitle>Mais Conteúdos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Explore mais conteúdos disponíveis na plataforma.</p>
          {/* O conteúdo da página virá aqui */}
        </CardContent>
      </Card>
    </div>
  );
}
