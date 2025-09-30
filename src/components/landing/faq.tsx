import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O que está incluso no valor de R$ 297?',
    answer:
      'Está incluso um site de página única (one-page) com até 5 seções, design moderno e responsivo, otimização SEO básica, e integração com redes sociais e WhatsApp.',
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer:
      'Não! O valor de R$ 297 é um pagamento único pelo desenvolvimento do site. Os únicos custos recorrentes são a hospedagem e o domínio, que são pagos diretamente para a empresa de hospedagem (ajudamos você a escolher a melhor opção).',
  },
  {
    question: 'Em quanto tempo meu site fica pronto?',
    answer:
      'Seu site será entregue em até 3 dias úteis após a confirmação do pagamento e o envio de todas as informações necessárias (textos, imagens, etc.).',
  },
  {
    question: 'E se eu precisar de mais páginas ou funcionalidades?',
    answer:
      'O valor promocional é para um site de página única. Se precisar de mais páginas, blog, loja virtual ou outras funcionalidades, podemos fazer um orçamento personalizado para você.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer:
      'Sim, oferecemos 30 dias de suporte gratuito para corrigir qualquer eventual problema técnico no site. Também oferecemos planos de manutenção mensais para atualizações e suporte contínuo.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-secondary/10 to-transparent"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Dúvidas Frequentes
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ainda tem perguntas? Encontre as respostas aqui.
          </p>
        </div>
        <div className="mx-auto max-w-3xl scroll-animate delay-200">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i} className="bg-secondary/20 border-border/50 rounded-lg mb-4 px-4 shine-effect transition-all hover:border-primary/50">
                <AccordionTrigger className="font-headline text-lg text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
