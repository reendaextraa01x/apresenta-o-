import { XCircle, Search, TrendingUp } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section id="problem" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4 fade-in">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Você está perdendo clientes sem um site?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              No mundo digital de hoje, não ter uma presença online profissional é como ter uma loja com as portas fechadas.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4 fade-in fade-in-delay-1">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline">Clientes não te encontram</h3>
                <p className="text-muted-foreground">
                  Mais de 80% dos consumidores pesquisam online antes de fazer uma compra. Se você não está no Google, você não existe para eles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 fade-in fade-in-delay-2">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <XCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline">Seu negócio parece amador</h3>
                <p className="text-muted-foreground">
                  Um negócio sem site (ou com um site ruim) transmite desconfiança e afasta clientes que buscam profissionalismo e credibilidade.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 fade-in fade-in-delay-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
               <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline text-primary">A Solução: Um Vendedor 24/7</h3>
                <p className="text-muted-foreground">
                  Nossa solução é um site rápido, profissional e otimizado que atrai e converte clientes para você, 24 horas por dia, 7 dias por semana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
