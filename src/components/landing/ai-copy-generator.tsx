// src/components/landing/ai-copy-generator.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  brandArchitect,
  BrandArchitectOutput,
} from '@/ai/flows/brand-architect-flow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Paintbrush } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export function AiCopyGenerator() {
  const [businessDescription, setBusinessDescription] = useState('');
  const [generatedContent, setGeneratedContent] =
    useState<BrandArchitectOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!businessDescription.trim()) {
      toast({
        title: 'Descrição vazia',
        description:
          'Por favor, descreva seu negócio antes de gerar o conteúdo.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setGeneratedContent(null);
    try {
      const result = await brandArchitect({ businessDescription });
      setGeneratedContent(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar conteúdo',
        description:
          'A IA não conseguiu gerar o conteúdo. Isso pode ser um problema temporário. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="ai-generator"
      className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/30 overflow-hidden"
    >
      <div className="absolute inset-0 cta-gradient opacity-20"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
            Arquiteto de Marcas com IA
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Visualize a Identidade da sua Marca em Segundos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Descreva seu negócio e nosso arquiteto de IA criará um conceito de
            marca, textos e uma prévia visual exclusiva para seu site.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 items-start">
          <div className="scroll-animate delay-200">
            <Card className="bg-background/50 border-border/50 h-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2">
                  <Wand2 className="text-primary" />
                  1. Descreva seu negócio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col h-[calc(100%-80px)]">
                <Textarea
                  placeholder="Ex: Uma cafeteria charmosa em São Paulo, especializada em cafés especiais de pequenos produtores, com ambiente aconchegante para trabalho e leitura."
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                  className="min-h-[150px] text-base flex-grow"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  size="lg"
                  className="w-full font-bold"
                >
                  {isLoading ? 'Criando sua marca...' : 'Gerar Identidade Visual'}
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="scroll-animate delay-400">
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2">
                  <Paintbrush className="text-primary" />
                  2. Resultado da IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg bg-secondary/50 flex items-center justify-center border-2 border-dashed border-border/50 overflow-hidden">
                  {isLoading && (
                    <div className="w-full h-full p-4 space-y-2">
                      <Skeleton className="w-1/2 h-6" />
                       <Skeleton className="w-full h-full" />
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        A IA está desenhando seu conceito, aguarde...
                      </p>
                    </div>
                  )}
                  {!isLoading && !generatedContent && (
                    <div className="text-center text-muted-foreground p-4">
                      <p>
                        A pré-visualização da sua identidade visual aparecerá
                        aqui.
                      </p>
                    </div>
                  )}
                  {generatedContent?.heroImage && (
                    <div className="relative w-full h-full fade-in text-white bg-black">
                      <Image
                        src={generatedContent.heroImage}
                        alt="Fundo para mockup de site gerado por IA"
                        fill
                        className="object-cover opacity-50"
                        unoptimized
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4">
                        <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded-md text-xs">
                          <span className="font-bold">Conceito:</span>{' '}
                          {generatedContent.brandConcept}
                        </div>
                        <h3 className="font-headline text-2xl md:text-3xl font-bold text-shadow-lg">
                          {generatedContent.headline}
                        </h3>
                        <p className="text-sm md:text-base text-shadow">
                          {generatedContent.description}
                        </p>
                        <Button className="font-bold" size="lg">
                          {generatedContent.ctaButton}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
