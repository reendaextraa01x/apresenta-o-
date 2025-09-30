'use client';
import { useEffect } from 'react';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Benefits } from '@/components/landing/benefits';
import { BeforeAfter } from '@/components/landing/before-after';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { Faq } from '@/components/landing/faq';
import { AiCopyGenerator } from '@/components/landing/ai-copy-generator';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const spotlight = document.querySelector('.spotlight');
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = (spotlight as HTMLElement).getBoundingClientRect();
      (spotlight as HTMLElement).style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
      (spotlight as HTMLElement).style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
    };
    
    spotlight.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      spotlight.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Benefits />
        <BeforeAfter />
        <AiCopyGenerator />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
