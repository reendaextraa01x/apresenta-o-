import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">SiteSpark</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#problem" className="text-muted-foreground transition-colors hover:text-foreground">O Problema</Link>
          <Link href="#benefits" className="text-muted-foreground transition-colors hover:text-foreground">Benefícios</Link>
          <Link href="#live-customizer" className="text-muted-foreground transition-colors hover:text-foreground">Estilos</Link>
          <Link href="#style-quiz" className="text-muted-foreground transition-colors hover:text-foreground">Descubra seu Estilo</Link>
          <Link href="#gallery" className="text-muted-foreground transition-colors hover:text-foreground">Galeria</Link>
          <Link href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">Dúvidas</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#cta">
            <Button>Quero meu site</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
