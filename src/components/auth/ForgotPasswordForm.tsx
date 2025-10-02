'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AuthCard } from './AuthCard';
import { Spinner } from '../shared/Spinner';

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
});

export function ForgotPasswordForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, values.email);
      setEmailSent(true);
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: 'Não foi possível enviar o email. Verifique o endereço e tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (emailSent) {
    return (
      <AuthCard
        title="Email Enviado!"
        description="Verifique sua caixa de entrada para redefinir sua senha."
        footer={
          <Link href="/login" className="text-primary hover:underline">Voltar para o login</Link>
        }
      >
        <p className="text-center text-muted-foreground">Se não encontrar o email, verifique sua pasta de spam.</p>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Esqueceu a senha?"
      description="Insira seu email para receber um link de redefinição."
      footer={
        <Link href="/login" className="text-primary hover:underline">Lembrou a senha? Faça login</Link>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Spinner size="sm" /> : 'Enviar Link'}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
