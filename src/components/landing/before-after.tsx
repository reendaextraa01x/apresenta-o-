import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function BeforeAfter() {
  const beforeImage = PlaceHolderImages.find((img) => img.id === 'before-website');
  const afterImage = PlaceHolderImages.find((img) => img.id === 'after-website');

  return (
    <section id="before-after" className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background via-transparent to-background"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center scroll-animate">
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
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12">
          <Card className="scroll-animate from-left bg-background/50 border-border/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="font-headline text-center text-2xl">Antes</CardTitle>
            </CardHeader>
            <CardContent>
              {beforeImage && (
                <Image
                  src={beforeImage.imageUrl}
                  alt="Website antigo"
                  width={600}
                  height={400}
                  data-ai-hint={beforeImage.imageHint}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full opacity-70"
                />
              )}
            </CardContent>
          </Card>
          <Card className="scroll-animate from-right border-2 border-primary shadow-lg shadow-primary/20 bg-background/50 shine-effect transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="font-headline text-center text-2xl text-primary">Depois</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {afterImage && (
                <Image
                  src={afterImage.imageUrl}
                  alt="Website moderno"
                  width={600}
                  height={400}
                  data-ai-hint={afterImage.imageHint}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
