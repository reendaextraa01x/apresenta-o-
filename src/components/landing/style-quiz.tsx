'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Palette, Type, Image as ImageIcon, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const questions = [
  {
    id: 'palette',
    title: 'Qual paleta de cores mais atrai você?',
    options: [
      { id: 'bold', value: 'Moderna e Ousada', label: 'Cores Vibrantes', className: 'from-pink-500 to-yellow-500' },
      { id: 'elegant', value: 'Clássica e Confiável', label: 'Tons Sóbrios', className: 'from-slate-800 to-slate-600' },
      { id: 'minimalist', value: 'Minimalista e Limpa', label: 'Cores Neutras', className: 'from-gray-200 to-white' },
      { id: 'friendly', value: 'Acessível e Amigável', label: 'Tons Pastéis', className: 'from-cyan-200 to-blue-300' },
    ],
  },
  {
    id: 'font',
    title: 'Qual estilo de fonte representa melhor sua marca?',
    options: [
      { id: 'bold', value: 'Moderna e Ousada', label: 'Sans-serif, Forte', className: 'font-bold text-2xl' },
      { id: 'elegant', value: 'Clássica e Confiável', label: 'Serifada, Elegante', className: 'font-serif text-2xl' },
      { id: 'minimalist', value: 'Minimalista e Limpa', label: 'Fina, Leve', className: 'font-light text-2xl' },
      { id: 'friendly', value: 'Acessível e Amigável', label: 'Arredondada, Casual', className: 'font-sans text-2xl rounded-lg' },
    ],
  },
  {
    id: 'image',
    title: 'Que tipo de imagem mais te agrada?',
    options: [
      { id: 'bold', value: 'Moderna e Ousada', label: 'Abstrata e Colorida', imageUrl: 'https://picsum.photos/seed/abstract/200/100' },
      { id: 'elegant', value: 'Clássica e Confiável', label: 'Fotografia Profissional', imageUrl: 'https://picsum.photos/seed/business/200/100' },
      { id: 'minimalist', value: 'Minimalista e Limpa', label: 'Composição Simples', imageUrl: 'https://picsum.photos/seed/minimal/200/100' },
      { id: 'friendly', value: 'Acessível e Amigável', label: 'Pessoas e Sorrisos', imageUrl: 'https://picsum.photos/seed/people/200/100' },
    ],
  },
];

const results: Record<string, { title: string; description: string; mockupImage: string }> = {
    'Moderna e Ousada': {
        title: 'Moderna e Ousada',
        description: 'Sua marca se destaca pela inovação e energia. Um site com design vibrante, fontes marcantes e imagens impactantes é ideal para você.',
        mockupImage: 'https://picsum.photos/seed/modern-site/600/400'
    },
    'Clássica e Confiável': {
        title: 'Clássica e Confiável',
        description: 'Sua marca transmite confiança e tradição. Um site com design elegante, fontes serifadas e fotos profissionais vai reforçar sua credibilidade.',
        mockupImage: 'https://picsum.photos/seed/classic-site/600/400'
    },
    'Minimalista e Limpa': {
        title: 'Minimalista e Limpa',
        description: 'Sua marca preza pela simplicidade e clareza. Um design clean, com muito espaço em branco e foco no essencial, é o seu caminho.',
        mockupImage: 'https://picsum.photos/seed/minimal-site/600/400'
    },
    'Acessível e Amigável': {
        title: 'Acessível e Amigável',
        description: 'Sua marca é acolhedora e próxima dos clientes. Um site com design leve, cores amigáveis e fotos de pessoas vai criar uma conexão imediata.',
        mockupImage: 'https://picsum.photos/seed/friendly-site/600/400'
    }
};

const icons = [<Palette key="palette"/>, <Type key="font"/>, <ImageIcon key="image"/>];

export function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<string, string>) => {
    const counts: Record<string, number> = {};
    Object.values(finalAnswers).forEach(answer => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    const finalResult = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(finalResult);
  };
  
  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  const currentQuestion = questions[step];

  return (
    <section id="style-quiz" className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 cta-gradient opacity-20"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 scroll-animate">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
            Quiz Interativo
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Descubra o Estilo Visual da Sua Marca
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Não tem certeza de como seu site deve se parecer? Responda 3 perguntas rápidas e encontre a direção criativa perfeita para o seu negócio.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-background/50 border-border/50 scroll-animate delay-200">
            <CardContent className="p-6 md:p-8">
                {!result ? (
                    <div className='fade-in'>
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                                    {icons[step]} Pergunta {step + 1} de {questions.length}
                                </h3>
                                <div className="text-sm font-medium text-primary">{step * 33}%</div>
                            </div>
                             <div className="w-full bg-secondary rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
                            </div>
                        </div>
                        <h4 className="text-xl md:text-2xl font-semibold text-center mb-8">{currentQuestion.title}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {currentQuestion.options.map(option => (
                                <button key={option.id} onClick={() => handleAnswer(currentQuestion.id, option.value)} className="text-left group">
                                    <Card className="h-full border-2 border-transparent group-hover:border-primary group-hover:scale-105 transition-all duration-300 shine-effect">
                                        <CardContent className="p-4 flex flex-col items-center justify-center space-y-3 h-full">
                                            {option.className?.includes('from-') ? (
                                                <div className={cn('w-16 h-16 rounded-full bg-gradient-to-br', option.className)}></div>
                                            ) : option.imageUrl ? (
                                                 <Image src={option.imageUrl} alt={option.label} width={200} height={100} className="rounded-md object-cover aspect-video" />
                                            ) : (
                                                 <div className={cn('text-foreground', option.className)}>{option.label.split(',')[0]}</div>
                                            )}
                                            <span className="font-semibold text-center text-sm">{option.label}</span>
                                        </CardContent>
                                    </Card>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center fade-in flex flex-col items-center">
                         <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground mb-4">
                            <Sparkles className="w-4 h-4"/> Seu Resultado
                        </div>
                        <h3 className="font-headline text-3xl font-bold text-primary mb-2">{results[result].title}</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">{results[result].description}</p>
                        
                        <Card className="w-full max-w-2xl overflow-hidden shadow-lg shadow-primary/10">
                            <CardContent className="p-0">
                                <Image src={results[result].mockupImage} alt={`Mockup de site ${results[result].title}`} width={600} height={400} className="w-full" />
                            </CardContent>
                        </Card>

                        <p className='text-xs text-muted-foreground mt-2'>* Esta é uma ilustração para inspirar o design do seu site.</p>
                        
                        <Button onClick={resetQuiz} className="mt-8 font-bold" variant="outline">
                            Fazer o quiz novamente
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>

      </div>
    </section>
  );
}

    