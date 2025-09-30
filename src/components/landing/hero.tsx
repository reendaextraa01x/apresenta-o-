import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'mockup-desktop-mobile');
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 neon-gradient text-primary-foreground">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
                <Badge variant="secondary" className="bg-accent/20 text-accent font-bold">Oferta por Tempo Limitado!</Badge>
                <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
                    Transforme Seu Negócio em 3 Dias com um Site Profissional por Apenas <span className="text-accent">R$ 297</span>
                </h1>
                <p className="text-lg text-primary-foreground/80 md:text-xl">
                    De <span className="line-through">R$ 997</span> por um valor que cabe no seu bolso. Não perca a chance de ter um site que vende por você 24h por dia.
                </p>
                <Link href="#cta">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Quero meu site agora!
                    </Button>
                </Link>
            </div>
            <div className="flex justify-center">
                {heroImage && (
                    <Image
                    src={heroImage.imageUrl}
                    alt="Mockup de um laptop e celular exibindo um site moderno"
                    width={550}
                    height={400}
                    data-ai-hint={heroImage.imageHint}
                    className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                    priority
                    />
                )}
            </div>
        </div>
    </section>
  );
}
