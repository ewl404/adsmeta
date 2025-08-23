'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import Image from 'next/image';
import { fbq } from '@/lib/fpixel';

export default function EsquiloManiaPage() {
  const [headline] = useState('Seja um afiliado Esquilo Mania!');
  const [subheadline] = useState('Receba 70% de comissão sobre o montante que trazer!');

  const whatsappLink = 'https://wallacebasso.com.br/zap-esquilo.html';

  const handleButtonClick = () => {
    fbq('trackCustom', 'chamounozap');
    window.location.href = whatsappLink;
  };

  return (
    <div className="flex flex-col min-h-dvh bg-black">
      <main className="flex-grow flex flex-col items-center justify-center">
        <section className="w-full py-12 text-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <Image 
                src="https://i.ibb.co/GfjYkFYd/logo.png"
                alt="Esquilo Mania Logo"
                width={88}
                height={38}
                className="rounded-lg"
                unoptimized
              />
              <div className="space-y-4 max-w-3xl mx-auto">
                <h1 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl text-accent animate-fade-in-down">
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
              <div className="pt-4 flex flex-col items-center space-y-4">
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
        </section>
      </main>

      <footer className="py-4 px-4 md:px-6 border-t border-gray-800 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
