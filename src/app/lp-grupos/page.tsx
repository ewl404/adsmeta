
'use client';

import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { BadgeCheck, ArrowDown } from 'lucide-react';

export default function LpGruposPage() {
  
  const whatsappLink = 'https://wallacebasso.com.br/zap-raspa.html'; // Você pode alterar este link

  const handleButtonClick = () => {
    // fbq('trackCustom', 'entrounogrupo'); // Descomente para rastrear o evento
    window.location.href = whatsappLink;
  };

  return (
    <div className="flex flex-col min-h-dvh bg-black text-white selection:bg-primary/20">
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center space-y-4 md:space-y-6">
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg -rotate-3">
            <span className="text-lg tracking-wide">ACESSO LIBERADO</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-accent uppercase tracking-wide flex items-center gap-2">
              Você acabou de receber acesso <br /> ao aplicativo oficial do mines
              <BadgeCheck className="w-7 h-7 text-blue-500 fill-current" />
            </h1>
          </div>
          
          <div className="w-full px-4">
            <Image
              src="https://i.ibb.co/mC9kQFYP/Captura-de-tela-2025-08-26-170003.png"
              alt="Mines Game"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl w-full h-auto"
              priority
            />
          </div>

          <div className="flex flex-col items-center space-y-3 pt-2">
             <div className="flex items-center justify-center space-x-4">
                <ArrowDown className="w-8 h-8 text-accent animate-bounce" style={{ transform: 'rotate(-45deg)' }} />
                <p className="text-base sm:text-lg font-semibold text-accent uppercase">
                Clique no botão abaixo e <br/> entre no grupo para receber <br/> seu acesso ao app
                </p>
                <ArrowDown className="w-8 h-8 text-accent animate-bounce" style={{ animationDelay: '0.2s', transform: 'rotate(45deg)'}} />
            </div>

            <Button
              onClick={handleButtonClick}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-xl py-8 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out animate-pulse"
            >
              <WhatsappIcon className="mr-3 h-8 w-8" />
              ENTRE NO GRUPO!
            </Button>
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
