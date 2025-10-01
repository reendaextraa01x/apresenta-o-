import { Target, Award, Smartphone, BarChart, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Lançamento Rápido: 3 Dias',
    description: 'Seu novo site no ar em tempo recorde para você começar a vender o quanto antes.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Design de Alto Impacto',
    description: 'Criamos um visual único e memorável que te destaca da concorrência.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Experiência Perfeita em Qualquer Tela',
    description: 'Seu site impecável e fácil de usar em celulares, tablets e desktops.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Encontrado no Google (SEO)',
    description: 'Estrutura otimizada para que seus clientes te encontrem quando mais precisam.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Foco em Vendas e Lucro (ROI)',
    description: 'Cada detalhe é pensado para uma única coisa: transformar visitantes em clientes.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-transparent to-background"></div>
        <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">A Diferença SiteSpark</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Não é apenas um site, é uma máquina de vendas.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Entregamos a ferramenta completa que seu negócio precisa para crescer e lucrar no ambiente digital.
            </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, i) => (
            <div key={benefit.title} className={`scroll-animate flex items-start space-x-4 rounded-lg bg-secondary/50 p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 shine-effect delay-${i * 100}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {benefit.icon}
                </div>
                <div className="space-y-1">
                    <h3 className="font-headline text-lg font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    