
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle2, LayoutTemplate, Palette, Smartphone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const beforeFeatures = [
  { text: 'Design amador e ultrapassado', icon: <XCircle className="h-5 w-5 text-red-500" /> },
  { text: 'Não funciona bem no celular', icon: <XCircle className="h-5 w-5 text-red-500" /> },
  { text: 'Lento e difícil de navegar', icon: <XCircle className="h-5 w-5 text-red-500" /> },
  { text: 'Ninguém encontra no Google', icon: <XCircle className="h-5 w-5 text-red-500" /> },
  { text: 'Não passa confiança', icon: <XCircle className="h-5 w-5 text-red-500" /> },
];

const afterFeatures = [
  { text: 'Design profissional e moderno', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
  { text: 'Perfeito em qualquer tela', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
  { text: 'Rápido e otimizado', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
  { text: 'Otimizado para o Google (SEO)', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
  { text: 'Converte visitantes em clientes', icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
];

const BeforeMockup = () => (
    <div className="w-full aspect-video rounded-lg border border-destructive/20 bg-secondary/30 p-4 flex flex-col gap-3">
        <div className="w-full h-8 bg-destructive/20 rounded flex items-center justify-between px-4">
            <div className="w-6 h-6 rounded-full bg-destructive/30"></div>
            <div className="w-1/3 h-4 bg-destructive/30 rounded"></div>
        </div>
        <div className="flex gap-3 h-full">
            <div className="w-1/4 bg-destructive/10 rounded p-2 space-y-2">
                <div className="h-3 w-full bg-destructive/30 rounded"></div>
                <div className="h-3 w-2/3 bg-destructive/30 rounded"></div>
                <div className="h-3 w-full bg-destructive/30 rounded"></div>
            </div>
            <div className="w-3/4 bg-destructive/10 rounded p-4 space-y-3">
                <div className="h-5 w-1/2 bg-destructive/30 rounded"></div>
                <div className="h-3 w-full bg-destructive/30 rounded"></div>
                <div className="h-3 w-full bg-destructive/30 rounded"></div>
                <div className="h-3 w-3/4 bg-destructive/30 rounded"></div>
            </div>
        </div>
    </div>
)

const AfterMockup = () => (
     <div className="w-full aspect-video rounded-lg border border-primary/20 bg-background/50 p-4 flex flex-col gap-3">
        <div className="w-full h-8 bg-primary/10 rounded flex items-center justify-between px-4">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                 <LayoutTemplate className="h-4 w-4 text-primary"/>
            </div>
            <div className="flex gap-2 w-1/3">
                 <div className="w-1/3 h-4 bg-primary/20 rounded"></div>
                 <div className="w-1/3 h-4 bg-primary/20 rounded"></div>
                 <div className="w-1/3 h-4 bg-primary/20 rounded"></div>
            </div>
        </div>
        <div className="h-full bg-primary/5 rounded p-4 space-y-3">
             <div className="h-5 w-1/2 bg-primary/20 rounded"></div>
             <div className="flex gap-3">
                <div className="w-1/2 h-20 bg-primary/10 rounded-lg p-2 flex flex-col items-center justify-center gap-2">
                    <Palette className="h-5 w-5 text-primary/80"/>
                    <div className="h-2 w-10 bg-primary/20 rounded-full"></div>
                </div>
                <div className="w-1/2 h-20 bg-primary/10 rounded-lg p-2 flex flex-col items-center justify-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary/80"/>
                    <div className="h-2 w-10 bg-primary/20 rounded-full"></div>
                </div>
             </div>
        </div>
    </div>
)

export function BeforeAfter() {
  const beforeImage = PlaceHolderImages.find((img) => img.id === 'before-website');
  const afterImage = PlaceHolderImages.find((img) => img.id === 'after-website');

  return (
    <section id="before-after" className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            A Diferença é Clara (e Lucrativa)
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja a transformação de um site comum para uma poderosa ferramenta de vendas construída pela SiteSpark.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-destructive/30 border-2 scroll-animate from-left">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold font-headline text-destructive">Site Amador</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <BeforeMockup />
              <ul className="space-y-3 self-start w-full">
                {beforeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.icon}
                    <span className="text-muted-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-primary/50 border-2 shadow-2xl shadow-primary/10 scroll-animate from-right">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold font-headline text-primary">Site Profissional SiteSpark</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <AfterMockup />
              <ul className="space-y-3 self-start w-full">
                {afterFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.icon}
                    <span className="text-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
