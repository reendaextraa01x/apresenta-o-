'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Palette, Wand2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const themes = [
  {
    name: 'theme-moderno',
    label: 'Moderno',
    description: 'Vibrante e impactante. Ideal para startups e marcas de tecnologia que querem se destacar.',
    image: 'https://picsum.photos/seed/gallery-modern/600/400',
    hint: 'modern website',
  },
  {
    name: 'theme-elegant',
    label: 'Elegante',
    description:
      'Sofisticado e luxuoso. Perfeito para marcas premium, consultorias e serviços de alto padrão.',
    image: 'https://picsum.photos/seed/gallery-elegant/600/400',
    hint: 'elegant website',
  },
  {
    name: 'theme-minimalist',
    label: 'Minimalista',
    description:
      'Limpo e direto ao ponto. Excelente para portfólios, fotógrafos e negócios que prezam pela simplicidade.',
    image: 'https://picsum.photos/seed/gallery-minimalist/600/400',
    hint: 'minimalist website',
  },
  {
    name: 'theme-friendly',
    label: 'Amigável',
    description:
      'Acessível e convidativo. Ótimo para negócios locais, criadores de conteúdo e marcas com foco na comunidade.',
    image: 'https://picsum.photos/seed/gallery-friendly/600/400',
    hint: 'friendly website',
  },
];

export function InspirationalGallery() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="gallery" className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
            <Wand2 className="inline-block w-4 h-4 mr-1" />
            Galeria de Estilos
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Inspire-se e Encontre o Visual Perfeito
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Navegue por nossa galeria de estilos. Com um clique, você pode aplicar o tema e ver a página inteira se transformar.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto scroll-animate delay-200"
        >
          <CarouselContent>
            {themes.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className={cn("overflow-hidden transition-all duration-300 border-2", theme === item.name ? "border-primary shadow-2xl shadow-primary/20" : "border-border/50 hover:border-primary/50")}>
                    <Image
                      src={item.image}
                      alt={`Exemplo de site ${item.label}`}
                      width={600}
                      height={400}
                      data-ai-hint={item.hint}
                      className="w-full aspect-video object-cover"
                    />
                    <CardContent className="p-4 bg-background/50">
                        <h3 className="font-headline text-xl font-bold">{item.label}</h3>
                        <p className="text-sm text-muted-foreground mt-1 mb-4 h-12">{item.description}</p>
                        <Button onClick={() => setTheme(item.name)} className="w-full font-bold" variant={theme === item.name ? 'default' : 'outline'}>
                            {mounted && (theme === item.name ? <Check className="mr-2 h-4 w-4" /> : <Palette className="mr-2 h-4 w-4" />)}
                            {mounted && (theme === item.name ? 'Tema Ativado' : 'Ativar Tema')}
                            {!mounted && <Palette className="mr-2 h-4 w-4" />}
                            {!mounted && 'Ativar Tema'}
                        </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
