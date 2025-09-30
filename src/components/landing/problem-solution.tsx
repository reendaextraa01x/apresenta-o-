import { XCircle, Search, TrendingUp } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section id="problem" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
       <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4 scroll-animate from-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Seu negócio está invisível na internet?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Sem um site profissional, você está deixando dinheiro na mesa. Todos os dias. Veja como isso afeta você:
            </p>
          </div>
          <div className="space-y-8 scroll-animate from-right">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline">Clientes não te encontram</h3>
                <p className="text-muted-foreground">
                  Seu público pesquisa no Google. Se você não aparece, é como se sua loja estivesse de portas fechadas para 90% dos seus potenciais clientes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                <XCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline">Sua marca parece amadora</h3>
                <p className="text-muted-foreground">
                  Um site ruim ou a falta dele gera desconfiança. Seus concorrentes com sites profissionais estão roubando seus clientes por parecerem mais confiáveis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20 shine-effect">
               <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline text-primary">A Solução: Seu Vendedor Digital 24/7</h3>
                <p className="text-muted-foreground">
                  Nós criamos um site que não apenas impressiona, mas atua como um vendedor incansável, atraindo, engajando e convertendo clientes para você, mesmo enquanto você dorme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
