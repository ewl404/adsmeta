'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScratchCard } from '@/components/scratch-card';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Hourglass } from 'lucide-react';
import { fbq } from '@/lib/fpixel';

export default function Home() {
  const [headline] = useState('Venha surfar a nova onda das raspadinhas!');
  const [subheadline] = useState('Receba 70% de comissao sobre o montante que trazer!');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const whatsappLink = 'https://wallacebasso.com.br/zap-raspa.html';

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRedirecting && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (isRedirecting && countdown === 0) {
      window.location.href = whatsappLink;
    }
    return () => clearTimeout(timer);
  }, [isRedirecting, countdown, whatsappLink]);

  const handleButtonClick = () => {
    setIsRedirecting(true);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-black">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <ScratchCard />
              <div className="space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-accent animate-fade-in-down">
                  {headline}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-foreground/90">
                  {subheadline}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Button
                  onClick={handleButtonClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-8 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <WhatsappIcon className="mr-3 h-8 w-8" />
                  Fale Conosco
                </Button>
                <p className="text-xs text-muted-foreground">Toque no botão acima para falar conosco</p>
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

      <Dialog open={isRedirecting} onOpenChange={setIsRedirecting}>
        <DialogContent className="sm:max-w-[425px] bg-background text-foreground border-border p-8 rounded-lg">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <Hourglass className="h-16 w-16 text-primary animate-spin" />
            <h3 className="text-2xl font-bold">Redirecionando para o WhatsApp...</h3>
            <p className="text-5xl font-mono font-bold text-accent">{countdown}</p>
            <p className="text-muted-foreground">Você será redirecionado em alguns instantes.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
