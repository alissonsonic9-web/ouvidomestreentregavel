'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <div className="flex-1 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
      <Card>
        <CardHeader>
          <CardTitle>Configurações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Gerencie as configurações da sua conta.</p>
          {/* O conteúdo da página virá aqui */}
        </CardContent>
      </Card>
    </div>
  );
}
