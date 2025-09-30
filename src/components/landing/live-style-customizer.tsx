'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Paintbrush, Type, Palette, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Poppins, Lora, Open_Sans } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });
const lora = Lora({ subsets: ['latin'], weight: ['700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['700'] });

const themes = [
  {
    name: 'Moderno',
    primary: 'hsl(217.2, 91.2%, 59.8%)',
    background: 'hsl(222.2, 84%, 4.9%)',
    foreground: 'hsl(210, 40%, 98%)',
    accent: 'hsl(217.2, 91.2%, 59.8%)',
  },
  {
    name: 'Elegante',
    primary: 'hsl(350, 67%, 54%)',
    background: 'hsl(240, 10%, 4%)',
    foreground: 'hsl(0, 0%, 95%)',
    accent: 'hsl(350, 67%, 54%)',
  },
  {
    name: 'Minimalista',
    primary: 'hsl(0, 0%, 9%)',
    background: 'hsl(0, 0%, 98%)',
    foreground: 'hsl(0, 0%, 9%)',
    accent: 'hsl(0, 0%, 20%)',
  },
  {
    name: 'Amigável',
    primary: 'hsl(142.1, 76.2%, 36.3%)',
    background: 'hsl(140, 50%, 97%)',
    foreground: 'hsl(140, 5%, 25%)',
    accent: 'hsl(142.1, 76.2%, 36.3%)',
  },
];

const fontStyles = [
  { name: 'Moderno (Poppins)', className: poppins.className, variable: '--font-headline-preview' },
  { name: 'Elegante (Lora)', className: lora.className, variable: '--font-headline-preview' },
  { name: 'Casual (Open Sans)', className: openSans.className, variable: '--font-headline-preview' },
];

export function LiveStyleCustomizer() {
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [activeFont, setActiveFont] = useState(fontStyles[0]);

  const previewStyle = {
    '--background-preview': activeTheme.background,
    '--foreground-preview': activeTheme.foreground,
    '--primary-preview': activeTheme.primary,
    '--accent-preview': activeTheme.accent,
    [activeFont.variable]: activeFont.className,
  } as React.CSSProperties;

  return (
    <section id="live-customizer" className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
            <Paintbrush className="inline-block w-4 h-4 mr-1" />
            Experimente ao Vivo
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Personalize o Estilo do Seu Site
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Selecione uma paleta de cores e um estilo de fonte para ver como a identidade visual do seu site pode mudar instantaneamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-1 bg-background/50 border-border/50 scroll-animate from-left p-4">
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-bold font-headline mb-3 flex items-center"><Palette className="mr-2 text-primary"/> Paletas de Cores</h3>
                <div className="grid grid-cols-2 gap-3">
                  {themes.map(theme => (
                    <button key={theme.name} onClick={() => setActiveTheme(theme)} className={cn('p-2 rounded-lg border-2 transition-all', activeTheme.name === theme.name ? 'border-primary' : 'border-transparent hover:border-primary/50')}>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: theme.background }}></div>
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: theme.foreground }}></div>
                      </div>
                      <p className="text-sm font-medium mt-2 text-left">{theme.name}</p>
                    </button>
                  ))}
                </div>
              </div>
               <div>
                <h3 className="text-lg font-bold font-headline mb-3 flex items-center"><Type className="mr-2 text-primary"/> Estilos de Fonte</h3>
                <div className="flex flex-col gap-2">
                  {fontStyles.map(font => (
                     <button key={font.name} onClick={() => setActiveFont(font)} className={cn('p-3 rounded-lg border text-left transition-all', activeFont.name === font.name ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50')}>
                        <p className={cn('text-lg', font.className)}>{font.name}</p>
                     </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 scroll-animate from-right">
            <Card
              className="w-full transition-colors duration-500 overflow-hidden shadow-2xl"
              style={previewStyle}
            >
              <div className="h-[450px] flex flex-col justify-center items-center p-8 text-center bg-cover bg-center" style={{ backgroundColor: 'var(--background-preview)' }}>
                 <div className="relative z-10 space-y-4">
                    <h1 className={cn('text-4xl font-extrabold tracking-tight lg:text-5xl', activeFont.className)} style={{ color: 'var(--foreground-preview)' }}>
                        Seu Negócio, <span style={{ color: 'var(--primary-preview)' }}>Reimaginado</span>
                    </h1>
                    <p className="max-w-md mx-auto text-lg" style={{ color: 'var(--foreground-preview)', opacity: 0.8 }}>
                        Transforme sua presença online com um design que cativa e converte visitantes em clientes.
                    </p>
                    <Button 
                        size="lg" 
                        className="font-bold" 
                        style={{ backgroundColor: 'var(--primary-preview)', color: 'hsl(var(--primary-foreground))' }}
                    >
                        Comece Agora <ArrowRight className="ml-2"/>
                    </Button>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
