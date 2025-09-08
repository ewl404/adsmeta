'use client';

import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { Award, BarChart, Users, Zap } from 'lucide-react';
import { fbq } from '@/lib/fpixel';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ChinaPage() {
  
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5516981597577&text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20parceria%20das%20plataformas...';

  const handleButtonClick = () => {
    fbq('track', 'Lead');
    window.open(whatsappLink, '_blank');
  };

  const features = [
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: '70% de Comissão',
      description: 'Receba a maior fatia do bolo. Sua dedicação vale mais aqui.',
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Plataformas Exclusivas',
      description: 'Acesso a plataformas chinesas de alto desempenho e conversão.',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Suporte Dedicado',
      description: 'Nossa equipe está pronta para te auxiliar a alcançar os melhores resultados.',
    },
     {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Pagamentos Rápidos',
      description: 'Receba suas comissões de forma ágil e sem burocracia.',
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-black text-white selection:bg-primary/20">
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 font-body">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            <Card className="w-full bg-gray-900/50 border-gray-800 shadow-2xl shadow-primary/10">
                <CardHeader className="text-center p-6 sm:p-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-accent uppercase tracking-wide animate-fade-in-down">
                        Parceria de Elite
                    </h1>
                    <CardDescription className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto pt-2">
                        Divulgue plataformas chinesas de alta performance e receba <strong className="text-primary font-bold">70% de comissão</strong> sobre todo o montante que você gerar.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {features.map((feature, index) => (
                        <div key={index} className="flex items-start text-left gap-4 p-4 rounded-lg bg-background/50 transition-colors hover:bg-gray-900">
                            {feature.icon}
                            <div>
                                <h3 className="font-bold text-lg text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center space-y-4 pt-4 w-full max-w-md mx-auto">
                        <Button
                        onClick={handleButtonClick}
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-lg py-8 px-10 rounded-lg shadow-[0_8px_25px_rgba(34,197,94,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(34,197,94,0.6)] hover:scale-105"
                        >
                        <WhatsappIcon className="mr-3 h-8 w-8" />
                        FALE CONOSCO
                        </Button>
                        <p className="text-xs text-muted-foreground">Vagas limitadas. Garanta a sua agora!</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </main>
      <footer className="py-4 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
