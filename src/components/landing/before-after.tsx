import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { X, CheckCircle } from 'lucide-react';

export function BeforeAfter() {
  const beforeImage = PlaceHolderImages.find(
    (img) => img.id === 'before-website'
  );
  const afterImage = PlaceHolderImages.find(
    (img) => img.id === 'after-website'
  );

  return (
    <section
      id="before-after"
      className="relative w-full overflow-hidden bg-secondary/20 py-12 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-background via-transparent to-background"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex scroll-animate flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Veja a diferença que um site profissional faz!
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A percepção do seu negócio muda quando o cliente vê qualidade e
              profissionalismo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 sm:grid-cols-2 md:gap-12">
          <div className="scroll-animate from-left relative flex flex-col items-center justify-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/20 px-4 py-2 text-lg font-semibold text-destructive">
              <X className="h-5 w-5" />
              <span>Antes</span>
            </div>
            {beforeImage && (
              <Image
                src={beforeImage.imageUrl}
                alt="Website antigo"
                width={600}
                height={400}
                data-ai-hint={beforeImage.imageHint}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center opacity-60 grayscale transition-all duration-300 hover:opacity-80 sm:w-full"
              />
            )}
          </div>
          <div className="scroll-animate from-right relative flex flex-col items-center justify-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-lg font-semibold text-primary">
              <CheckCircle className="h-5 w-5" />
              <span>Depois</span>
            </div>
            <Card className="w-full overflow-hidden border-2 border-primary bg-background/50 shadow-2xl shadow-primary/20 shine-effect transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                {afterImage && (
                  <Image
                    src={afterImage.imageUrl}
                    alt="Website moderno"
                    width={600}
                    height={400}
                    data-ai-hint={afterImage.imageHint}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full"
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
