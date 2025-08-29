
'use client';

import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { BadgeCheck, Zap, ArrowDown } from 'lucide-react';
import { fbq } from '@/lib/fpixel';

export default function LpGruposPage() {
  
  const whatsappLink = 'https://wallacebasso.com.br/zap-raspa.html';

  const handleButtonClick = () => {
    fbq('trackCustom', 'entrounogrupo');
    window.location.href = whatsappLink;
  };

  return (
    <div className="flex flex-col min-h-dvh bg-black text-white selection:bg-primary/20">
      <div className="bg-yellow-400 text-black text-sm font-bold p-2 text-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center justify-center">
            <Zap className="w-4 h-4 mr-2 fill-current" />
            <span>ÚLTIMAS VAGAS PARA O GRUPO! APROVEITE ANTES QUE ACABE!</span>
            <Zap className="w-4 h-4 ml-2 fill-current" />
        </div>
      </div>
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 font-body">
        <div className="w-full max-w-md mx-auto flex flex-col items-center text-center space-y-6">
          
          <h1 className="text-2xl sm:text-3xl font-black text-accent uppercase tracking-wider">
            ENTRE PARA O GRUPO E RECEBA ACESSO AO APP HACK DO MINES!
          </h1>
          
          <div className="w-full max-w-[280px] px-4 transform transition-transform hover:scale-105 duration-300">
            <Image
              src="https://i.ibb.co/mC9kQFYP/Captura-de-tela-2025-08-26-170003.png"
              alt="Mines Game"
              width={320}
              height={400}
              className="rounded-lg shadow-[0_10px_30px_rgba(34,197,94,0.3)] w-full h-auto"
              priority
            />
          </div>

          <div className="flex flex-col items-center space-y-2 pt-4 w-full px-4">
            <p className="text-sm sm:text-base font-semibold text-foreground/90">
                Clique no botão abaixo para entrar no grupo exclusivo e receber seu acesso.
            </p>
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-lg py-8 px-10 rounded-lg shadow-[0_8px_25px_rgba(34,197,94,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(34,197,94,0.6)]"
            >
              <WhatsappIcon className="mr-3 h-8 w-8" />
              ENTRAR NO GRUPO AGORA
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                <BadgeCheck className="w-4 h-4 text-primary" />
                <span>Acesso Imediato</span>
                <BadgeCheck className="w-4 h-4 text-primary" />
                <span>100% Gratuito</span>
            </div>
          </div>

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
