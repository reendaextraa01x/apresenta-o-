import { Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary/30 border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex items-center gap-2 text-foreground">
            <Sparkles className="h-6 w-6 text-primary" />
            <p className="text-lg font-bold font-headline">SiteSpark</p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} SiteSpark. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
