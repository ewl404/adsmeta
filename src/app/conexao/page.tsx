'use client';

import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { BadgeCheck, Instagram } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import { fbq } from '@/lib/fpixel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

export default function ConexaoPage() {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=5521965332349&text=Vim%20pelo%20anuncio%2C%20tenho%20interesse%20em%20ter%20minha%20plataforma%2C%20me%20manda%20os%20modelos..';
  
  const handleButtonClick = () => {
    fbq('trackCustom', 'chamounozap');
    window.open(whatsappLink, '_blank');
  };

  const features = [
    'Suporte 24/7',
    'Painel de Afiliado',
    '0% de GGR',
    'Entrega em 24h',
    'Pague após a entrega',
  ];

  const testimonials = [
    "https://i.ibb.co/LXjz6sYT/Save-Clip-App-503557195-17845440288510633-752309902551639702-n.jpg",
    "https://i.ibb.co/svFWD6fR/Save-Clip-App-509659307-17845440246510633-5540297225621994374-n.jpg",
    "https://i.ibb.co/Swp8mhbH/Save-Clip-App-503995915-17845440141510633-638668811659484506-n.jpg",
    "https://i.ibb.co/bMmq9nPp/Save-Clip-App-503721929-17845440087510633-4488494506167824388-n.jpg",
    "https://i.ibb.co/svL2VsRs/Save-Clip-App-503526720-17845439775510633-7772770776082006289-n.jpg"
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

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
            fbq('init', '1550609239684984');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1550609239684984&ev=PageView&noscript=1"
        />
      </noscript>
      <div className="flex flex-col min-h-dvh bg-black text-white">
        <main className="flex-grow flex flex-col items-center p-4">
          <section className="w-full max-w-4xl text-center py-12">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6">
                
                <div className="space-y-3">
                  <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-accent animate-fade-in-down">
                    Tenha sua <span className="underline decoration-red-600 underline-offset-8">plataforma em 24h</span> e <span className="underline decoration-red-600 underline-offset-8">pague após a entrega</span>
                  </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-3xl py-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-gray-900/50">
                      <BadgeCheck className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm font-semibold text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center space-y-4 pt-2">
                  <Button
                    onClick={handleButtonClick}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-8 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-primary/40"
                  >
                    <WhatsappIcon className="mr-3 h-8 w-8" />
                    Fale Conosco
                  </Button>
                  <p className="text-xs text-muted-foreground">Toque no botão para falar com um especialista</p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full text-center py-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Clientes Satisfeitos</h2>
            <Carousel 
              className="w-full"
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((src, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Image
                        src={src}
                        alt={`Depoimento de cliente ${index + 1}`}
                        width={300}
                        height={533}
                        className="rounded-lg w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
        
          <div className="text-center pt-8 pb-4">
              <a 
                href="https://www.instagram.com/conexaoigaming2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-white transition-colors"
              >
                  <Instagram className="w-5 h-5" />
                  <span>@conexaoigaming2</span>
              </a>
          </div>

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
