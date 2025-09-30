'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'mockup-desktop-mobile');
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 aurora-background spotlight">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
                <Badge variant="outline" className="font-semibold border-primary/50 text-primary py-1 px-3 fade-in">Oferta por Tempo Limitado!</Badge>
                <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl fade-in delay-100">
                    Tenha um Site que Vende por Você, por Apenas <span className="text-primary text-glow">R$ 297</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl fade-in delay-200">
                    Transforme visitantes em clientes com um site profissional de alta conversão. De <span className="line-through">R$ 997</span> por um valor que você pode pagar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start fade-in delay-300">
                    <Link href="#cta">
                        <Button size="lg" className="w-full sm:w-auto">
                            Quero meu site agora
                            <ArrowRight className="ml-2"/>
                        </Button>
                    </Link>
                     <Link href="#before-after">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            Ver resultados
                        </Button>
                    </Link>
                </div>
                 <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-muted-foreground fade-in delay-400">
                    <div className="flex text-primary">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span>+50 clientes satisfeitos</span>
                </div>
            </div>
            <div className="flex justify-center fade-in delay-500">
                {heroImage && (
                    <Image
                    src={heroImage.imageUrl}
                    alt="Mockup de um laptop e celular exibindo um site moderno"
                    width={500}
                    height={350}
                    data-ai-hint={heroImage.imageHint}
                    className="rounded-xl shadow-2xl shadow-primary/10 transform transition-transform duration-500 hover:scale-105"
                    priority
                    />
                )}
            </div>
        </div>
    </section>
  );
}
