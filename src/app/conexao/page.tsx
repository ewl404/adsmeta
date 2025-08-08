'use client';

import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { BadgeCheck } from 'lucide-react';

export default function ConexaoPage() {
  const whatsappLink = 'https://wallacebasso.com.br/zap-raspa.html';

  const handleButtonClick = () => {
    window.location.href = whatsappLink;
  };

  const features = [
    'Pague após a entrega',
    '0% de GGR',
    'Suporte Completo',
    'Painel de afiliado',
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-black">
      <main className="flex-grow flex items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-accent animate-fade-in-down">
                  Deixe de ser afiliado e seja Dono!
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto">
                  Tenha seu próprio sistema de raspadinhas, com sua marca, seu suporte e seus próprios afiliados.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-lg bg-gray-900/50">
                    <BadgeCheck className="h-7 w-7 text-primary" />
                    <span className="text-lg font-semibold text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center space-y-2">
                <Button
                  onClick={handleButtonClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-8 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <WhatsappIcon className="mr-3 h-8 w-8" />
                  Quero ser Dono
                </Button>
                <p className="text-xs text-muted-foreground">Toque no botão acima para falar com um especialista</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Scratch2Cash. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
