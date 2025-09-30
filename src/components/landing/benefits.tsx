import { CheckCircle2, Award, Smartphone, BarChart, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Site pronto em 1 a 3 dias úteis',
    description: 'Tenha seu novo site no ar em tempo recorde, sem enrolação.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Design moderno e exclusivo',
    description:
      'Criamos um visual único que reflete a identidade da sua marca.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: '100% responsivo',
    description:
      'Seu site perfeito em celulares, tablets e computadores.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Otimização SEO para o Google',
    description:
      'Estrutura otimizada para que seus clientes te encontrem no Google.',
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: 'Foco em conversão e ROI',
    description:
      'Cada elemento do site é pensado para transformar visitantes em clientes.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Benefícios</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Tudo que você precisa para decolar
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Um site profissional não é um custo, é um investimento que se paga rapidamente.
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
