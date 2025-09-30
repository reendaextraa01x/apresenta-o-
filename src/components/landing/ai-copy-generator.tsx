// src/components/landing/ai-copy-generator.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  generateHeroSectionCopy,
  GenerateHeroSectionCopyOutput,
} from '@/ai/flows/generate-hero-section-copy';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Copy, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export function AiCopyGenerator() {
  const [businessDescription, setBusinessDescription] = useState('');
  const [generatedCopy, setGeneratedCopy] =
    useState<GenerateHeroSectionCopyOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateCopy = async () => {
    if (!businessDescription.trim()) {
      toast({
        title: 'Descrição vazia',
        description: 'Por favor, descreva seu negócio antes de gerar o texto.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setGeneratedCopy(null);
    try {
      const result = await generateHeroSectionCopy({ businessDescription });
      setGeneratedCopy(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar conteúdo',
        description:
          'Não foi possível gerar o conteúdo. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copiado!',
      description: 'O texto foi copiado para a área de transferência.',
    });
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
            Experimente nossa IA
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Gere conteúdo para seu site em segundos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Descreva seu negócio e nossa inteligência artificial criará
            sugestões de títulos, textos e até uma imagem para a seção
            principal do seu site.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-6 scroll-animate delay-200">
          <Card className="bg-background/50 border-border/50">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center gap-2">
                <Wand2 className="text-primary" />
                Descreva seu negócio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Ex: Uma barbearia moderna no centro da cidade que oferece cortes de cabelo e barba com um toque clássico, usando produtos de alta qualidade e com um ambiente descontraído."
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                className="min-h-[120px] text-base"
                disabled={isLoading}
              />
              <Button
                onClick={handleGenerateCopy}
                disabled={isLoading}
                size="lg"
                className="w-full font-bold"
              >
                {isLoading ? 'Gerando...' : 'Gerar Conteúdo Mágico'}
              </Button>
            </CardContent>
          </Card>

          {isLoading && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      Sugestões de Títulos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-5/6" />
                    <Skeleton className="h-8 w-full" />
                  </CardContent>
                </Card>
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      Sugestões de Textos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-5/6" />
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    Sugestão de Imagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Skeleton className="aspect-video w-full" />
                </CardContent>
              </Card>
            </div>
          )}

          {generatedCopy && (
            <div className="grid md:grid-cols-2 gap-6 fade-in">
              <div className="space-y-6">
                <Card className="bg-background/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">
                      Sugestões de Títulos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {generatedCopy.headlineOptions.map((headline, index) => (
                      <div
                        key={index}
                        className="group relative rounded-lg bg-secondary/50 p-3"
                      >
                        <p>{headline}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleCopy(headline)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">
                      Sugestões de Textos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {generatedCopy.bodyCopyOptions.map((body, index) => (
                      <div
                        key={index}
                        className="group relative rounded-lg bg-secondary/50 p-3"
                      >
                        <p className="text-muted-foreground">{body}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleCopy(body)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary flex items-center gap-2">
                    <ImageIcon />
                    Sugestão de Imagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={generatedCopy.heroImage}
                    alt="Imagem gerada por IA para a seção hero"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg aspect-video object-cover"
                    unoptimized
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
