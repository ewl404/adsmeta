'use client';

import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import { ConexaoScratchCard } from '@/components/conexao-scratch-card';
import { fbq } from '@/lib/fpixel';

export default function ConexaoPage() {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5521965332349&text=Tenho%20interesse%20em%20ter%20meu%20proprio%20sistema%20de%20raspadinha%2C%20como%20funciona%3F';
  
  const handleButtonClick = () => {
    fbq('trackCustom', 'chamounozap');
    window.open(whatsappLink, '_blank');
  };

  const features = [
    'Pague após a entrega',
    '0% de GGR',
    'Suporte Completo',
    'Painel de afiliado',
  ];

  return (
    <>
      <Script
        id="fb-pixel-conexao"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2448331412211737');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=2448331412211737&ev=PageView&noscript=1"
        />
      </noscript>
      <div className="flex flex-col min-h-dvh bg-black">
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <section className="w-full max-w-4xl text-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4">
                <ConexaoScratchCard />
                <div className="space-y-2">
                  <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-accent animate-fade-in-down">
                    Deixe de ser afiliado e seja Dono!
                  </h1>
                  <p className="text-sm md:text-base text-foreground/80 max-w-3xl mx-auto">
                    Sua própria plataforma de raspadinhas, com sua marca e suporte.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center sm:justify-start gap-3 p-2 rounded-lg bg-gray-900/50">
                      <BadgeCheck className="h-5 w-5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center space-y-4 pt-2">
                  <Button
                    onClick={handleButtonClick}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-8 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    <WhatsappIcon className="mr-3 h-8 w-8" />
                    Quero ser Dono
                  </Button>
                  <p className="text-xs text-muted-foreground">Toque no botão acima para falar com um especialista</p>
                  <div className="pt-2 flex flex-col items-center space-y-4">
                    <Image 
                      src="https://deuraspa.vip/logoig2.png" 
                      alt="Logo"
                      width={150}
                      height={50}
                      unoptimized
                    />
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Grupo Awp</p>
                        <Image
                            src="http://wallacebasso.com.br/Design%20sem%20nome%20(7).png"
                            alt="Logo Grupo Awp"
                            width={50}
                            height={50}
                            className="mx-auto mt-2"
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="py-4 px-4 md:px-6 border-t border-gray-800 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 - Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}
