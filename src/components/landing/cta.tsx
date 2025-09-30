import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Calendar, Tag, Users } from 'lucide-react';

export function Cta() {
  return (
    <section id="cta" className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 cta-gradient opacity-20"></div>
      <div className="container relative grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3 scroll-animate">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Sua chance de ter um site de R$1.000 por apenas R$297
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Esta é uma oferta de lançamento por tempo limitado. Depois que as 10 vagas acabarem, o preço voltará ao normal. Você vai agir agora ou se arrepender depois?
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-6 scroll-animate delay-200">
          <div className="grid grid-cols-1 gap-4 text-left">
            <div className="flex items-center gap-4 rounded-lg bg-secondary/80 p-4 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/50 shine-effect">
                <Tag className="h-8 w-8 text-primary"/>
                <div className="text-lg">De <span className="line-through">R$ 997</span> por apenas <span className="font-bold text-primary text-xl">12x R$ 29</span> ou R$ 297 à vista</div>
            </div>
             <div className="flex items-center gap-4 rounded-lg bg-secondary/80 p-4 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/50 shine-effect">
                <Calendar className="h-8 w-8 text-primary"/>
                <div className="text-lg">Pronto em até <span className="font-bold">3 dias úteis</span></div>
            </div>
             <div className="flex items-center gap-4 rounded-lg bg-secondary/80 p-4 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/50 shine-effect">
                <Users className="h-8 w-8 text-primary"/>
                <div className="text-lg">Restam <span className="font-bold">7 vagas</span> nesta promoção</div>
            </div>
          </div>
          <Link href="https://wa.me/message/TLKNNAL6RZ37E1" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full animate-button-pulse font-bold text-lg"
            >
              <WhatsAppIcon className="mr-2 h-6 w-6" />
              Sim, quero garantir meu site por R$ 297!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
