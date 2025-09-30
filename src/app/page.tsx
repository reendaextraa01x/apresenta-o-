import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Benefits } from '@/components/landing/benefits';
import { BeforeAfter } from '@/components/landing/before-after';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Benefits />
        <BeforeAfter />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
