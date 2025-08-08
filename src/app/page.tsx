'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScratchCard } from '@/components/scratch-card';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export default function Home() {
  const [headline] = useState('Venha surfar a nova onda das raspadinhas!');
  const [subheadline] = useState('Receba 70% de comissao sobre o montante que trazer!');

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-center">
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
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-8 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out animate-pulse-shadow"
              >
                <a
                  href="https://wa.me/1234567890?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20parceria%20de%20raspadinhas."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon className="mr-3 h-8 w-8" />
                  Fale Conosco
                </a>
              </Button>
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
