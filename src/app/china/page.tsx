'use client';

import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { CheckCircle2, MoveDown } from 'lucide-react';
import { fbq } from '@/lib/fpixel';
import Image from 'next/image';

export default function ChinaPage() {
  
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5516981597577&text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20parceria%20das%20plataformas...';

  const handleButtonClick = () => {
    fbq('track', 'Lead');
    window.open(whatsappLink, '_blank');
  };

  const features = [
    'Pagamentos diários',
    'Saldo Demo para gravar',
    'Aplicativo Exclusivo',
    'Painel Completo Afiliado',
    'Suporte 7x1',
    'Painel 100% transparente',
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-black text-white selection:bg-primary/20">
      <main className="flex-grow flex flex-col items-center p-4 sm:p-6 font-body">
        <div className="w-full max-w-md mx-auto flex flex-col items-center text-center space-y-6">

          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black uppercase">
                <span className="bg-red-600 px-4 rounded-md">BLOGUEIRO/AGENTE</span>
            </h1>
            <p className="text-4xl sm:text-5xl font-black text-white">COOPERAÇÃO <span className="text-green-400">70%</span></p>
            <p className="text-3xl sm:text-4xl font-black text-white">AGENTE <span className="text-green-400">30%</span></p>
          </div>
          
          <div className="w-full max-w-[250px] px-4 transform transition-transform hover:scale-105 duration-300">
            <Image
              src="https://i.ibb.co/67YDFSx4/image-removebg-preview-23.png"
              alt="Mines Game"
              width={250}
              height={188}
              className="rounded-lg shadow-[0_10px_30px_rgba(34,197,94,0.3)] w-full h-auto"
              priority
              data-ai-hint="game interface"
            />
          </div>

          <div className="w-full space-y-1 text-left px-4">
              {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <p className="text-sm font-semibold">{feature}</p>
                  </div>
              ))}
          </div>

          <div className="flex flex-col items-center space-y-4 pt-4 w-full px-4">
            <div className="text-center space-y-2">
                <p className="text-lg font-bold text-white">
                    Fale comigo agora e comece com a 
                    <span className="bg-red-600 px-2 rounded-md ml-1">melhor proposta do mercado!</span>
                </p>
                <div className="flex justify-center items-center gap-2">
                    <MoveDown className="w-6 h-6 text-yellow-400 animate-bounce" />
                    <p className="text-xl font-bold text-yellow-400">Fale comigo aqui</p>
                    <MoveDown className="w-6 h-6 text-yellow-400 animate-bounce" />
                </div>
            </div>
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-lg py-7 px-10 rounded-lg shadow-[0_8px_25px_rgba(34,197,94,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(34,197,94,0.6)] hover:scale-105"
            >
              <WhatsappIcon className="mr-3 h-8 w-8" />
              FALE COMIGO
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
