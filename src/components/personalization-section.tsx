'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { getPersonalizedCopy } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import type { PersonalizeHeadlineOutput } from '@/ai/flows/personalize-headline';
import { Loader2, Wand2 } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  niche: z.string().min(1, { message: 'Por favor, selecione um nicho.' }),
  followerCount: z
    .number()
    .min(5000, { message: 'O número de seguidores deve ser no mínimo 5.000.' }),
});

type PersonalizationFormValues = z.infer<typeof formSchema>;

interface PersonalizationSectionProps {
  onContentUpdate: (content: PersonalizeHeadlineOutput) => void;
  isPersonalizing: boolean;
  setIsPersonalizing: (isPersonalizing: boolean) => void;
}

export function PersonalizationSection({
  onContentUpdate,
  isPersonalizing,
  setIsPersonalizing,
}: PersonalizationSectionProps) {
  const { toast } = useToast();
  const [followerCount, setFollowerCount] = useState(50000);

  const form = useForm<PersonalizationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      niche: 'games',
      followerCount: 50000,
    },
  });

  async function onSubmit(values: PersonalizationFormValues) {
    setIsPersonalizing(true);
    const result = await getPersonalizedCopy(values);
    setIsPersonalizing(false);

    if (result.success && result.data) {
      onContentUpdate(result.data);
      toast({
        title: 'Mensagem Personalizada!',
        description: 'A headline foi atualizada com base no seu perfil.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Ocorreu um erro',
        description: result.error,
      });
    }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Personalize a Mensagem para Você
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Veja como a nossa proposta se adapta ao seu nicho e tamanho de audiência. Use a IA para gerar uma headline personalizada.
          </p>
        </div>
        <div className="mx-auto max-w-xl mt-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="niche"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu Nicho Principal</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu nicho" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="games">Games</SelectItem>
                        <SelectItem value="fashion">Moda</SelectItem>
                        <SelectItem value="finance">Finanças</SelectItem>
                        <SelectItem value="tech">Tecnologia</SelectItem>
                        <SelectItem value="beauty">Beleza</SelectItem>
                        <SelectItem value="food">Culinária</SelectItem>
                        <SelectItem value="travel">Viagem</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="followerCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Número de Seguidores: {followerCount.toLocaleString('pt-BR')}
                    </FormLabel>
                    <FormControl>
                      <Slider
                        min={5000}
                        max={1000000}
                        step={1000}
                        defaultValue={[field.value]}
                        onValueChange={(value) => {
                          field.onChange(value[0]);
                          setFollowerCount(value[0]);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPersonalizing} className="w-full">
                {isPersonalizing ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Personalizar com IA
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
