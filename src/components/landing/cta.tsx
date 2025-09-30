import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Calendar, Tag, Users } from 'lucide-react';

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3 fade-in">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Não perca esta oportunidade única!
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Transforme seu negócio com um site profissional por um preço que cabe no seu bolso. A hora é agora.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-6 fade-in fade-in-delay-1">
          <div className="grid grid-cols-1 gap-4 text-left">
            <div className="flex items-center gap-4 rounded-lg bg-secondary/80 p-4 border border-border">
                <Tag className="h-8 w-8 text-primary"/>
                <div className="text-lg">De <span className="line-through">R$ 997</span> por apenas <span className="font-bold text-primary text-xl">R$ 297</span></div>
            </div>
             <div className="flex items-center gap-4 rounded-lg bg-secondary/80 p-4 border border-border">
                <Calendar className="h-8 w-8 text-primary"/>
                <div className="text-lg">Entrega em até <span className="font-bold">3 dias úteis</span></div>
            </div>
             <div className="flex items-center gap-4 rounded-lg bg-secondary/80 p-4 border border-border">
                <Users className="h-8 w-8 text-primary"/>
                <div className="text-lg">Promoção válida para os <span className="font-bold">primeiros 10 clientes</span></div>
            </div>
          </div>
          <Link href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites." target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full animate-button-pulse font-bold text-lg"
            >
              <WhatsAppIcon className="mr-2 h-6 w-6" />
              Garantir meu site por R$ 297 agora!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
