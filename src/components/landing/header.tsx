import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">SiteSpark</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#cta">
            <Button>Quero meu site</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
