'use client';

import { useRef, useEffect, useState } from 'react';

export function ConexaoScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return;

    const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        drawCover();
    }
    
    const drawCover = () => {
        context.fillStyle = '#bdbdbd'; // A greyish color
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#888888';
        context.font = 'bold 20px Inter, sans-serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        const text = 'RASPE AQUI';
        const lineHeight = 24;
        const centerX = canvas.width / 2;
        const startY = canvas.height / 2 - (lineHeight / 2);

        context.fillText(text, centerX, startY);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);


    let isDrawing = false;

    const getCoords = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e instanceof MouseEvent) {
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
      } else if (e.touches[0]) {
        return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
      }
      return { x: 0, y: 0 };
    };

    const scratch = (x: number, y: number) => {
      if (!context) return;
      context.globalCompositeOperation = 'destination-out';
      context.beginPath();
      context.arc(x, y, 24, 0, 2 * Math.PI);
      context.fill();
    };

    const checkRevealed = () => {
      if (!context) return;
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let transparentPixels = 0;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) {
          transparentPixels++;
        }
      }
      const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100;
      if (percentage > 60) {
        setIsRevealed(true);
      }
    };

    const startDrawing = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      const { x, y } = getCoords(e);
      scratch(x, y);
    };

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault();
      const { x, y } = getCoords(e);
      scratch(x, y);
    };

    const stopDrawing = () => {
      if (isDrawing) {
        isDrawing = false;
        checkRevealed();
      }
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing, { passive: true });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-sm h-32 mx-auto rounded-lg overflow-hidden shadow-lg group"
      data-ai-hint="money prize"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white p-4 text-center">
        <span className="text-4xl font-black tracking-wider">
          0% GGR
        </span>
        <div className="mt-2 bg-red-600 px-3 py-1 rounded">
          <p className="text-xs font-semibold">Pague somente após a entrega, fale conosco!</p>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 ease-in-out ${
          isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
    </div>
  );
}
