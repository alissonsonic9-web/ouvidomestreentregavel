'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContinueWatchingPage() {
  return (
    <div className="flex-1 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
      <Card>
        <CardHeader>
          <CardTitle>Continuar Assistindo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Aqui você encontrará os vídeos que começou a assistir.</p>
          {/* O conteúdo da página virá aqui */}
        </CardContent>
      </Card>
    </div>
  );
}
