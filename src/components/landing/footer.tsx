import { Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <p className="text-lg font-bold font-headline">SiteSpark</p>
        </div>
        <p className="text-sm text-primary-foreground/70">
          © {currentYear} SiteSpark. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
