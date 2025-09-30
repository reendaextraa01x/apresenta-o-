'use server';
/**
 * @fileOverview Generates hero section copy for a website based on a business description.
 *
 * - generateHeroSectionCopy - A function that handles the copy generation.
 * - GenerateHeroSectionCopyInput - The input type for the generateHeroSectionCopy function.
 * - GenerateHeroSectionCopyOutput - The return type for the generateHeroSectionCopy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateHeroSectionCopyInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A brief description of the business or service.'),
});
export type GenerateHeroSectionCopyInput = z.infer<
  typeof GenerateHeroSectionCopyInputSchema
>;

const GenerateHeroSectionCopyOutputSchema = z.object({
  headline: z.string().describe('A compelling headline for the hero section.'),
  description: z
    .string()
    .describe('A short, persuasive description for the hero section.'),
  ctaButton: z.string().describe('A clear call-to-action button text.'),
  backgroundImageUrl: z.string().describe('URL for a background image from Unsplash.')
});
export type GenerateHeroSectionCopyOutput = z.infer<
  typeof GenerateHeroSectionCopyOutputSchema
>;

export async function generateHeroSectionCopy(
  input: GenerateHeroSectionCopyInput
): Promise<GenerateHeroSectionCopyOutput> {
  return generateHeroSectionCopyFlow(input);
}

const copyPrompt = ai.definePrompt({
  name: 'generateHeroSectionCopyPrompt',
  input: { schema: GenerateHeroSectionCopyInputSchema },
  output: { schema: z.object({
    headline: GenerateHeroSectionCopyOutputSchema.shape.headline,
    description: GenerateHeroSectionCopyOutputSchema.shape.description,
    ctaButton: GenerateHeroSectionCopyOutputSchema.shape.ctaButton,
  }) },
  prompt: `Você é um especialista em marketing e copywriting. Sua tarefa é criar o texto da seção principal (hero section) de um site, com base na descrição de um negócio.

  Crie os seguintes textos:
  1.  **Headline (Título):** Um título curto, impactante e que chame a atenção. Deve ter no máximo 10 palavras.
  2.  **Description (Descrição):** Um parágrafo curto (2-3 frases) que explique o valor do negócio de forma clara e persuasiva.
  3.  **CTA Button (Botão de Ação):** Um texto claro e direto para o botão de chamada para ação (call-to-action).

  Descrição do negócio: {{{businessDescription}}}
  `,
});

async function fetchUnsplashImage(query: string): Promise<string> {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (!accessKey) {
        console.warn("UNSPLASH_ACCESS_KEY não encontrada. Usando imagem de placeholder.");
        return 'https://picsum.photos/seed/sitespark/1280/720';
    }

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${accessKey}`);
        if (!response.ok) {
            console.error(`Erro ao buscar imagem no Unsplash: ${response.statusText}`);
            return 'https://picsum.photos/seed/sitespark-error/1280/720';
        }
        const data = await response.json();
        return data.urls.regular;
    } catch (error) {
        console.error("Erro na chamada da API do Unsplash: ", error);
        return 'https://picsum.photos/seed/sitespark-fetch-error/1280/720';
    }
}


const generateHeroSectionCopyFlow = ai.defineFlow(
  {
    name: 'generateHeroSectionCopyFlow',
    inputSchema: GenerateHeroSectionCopyInputSchema,
    outputSchema: GenerateHeroSectionCopyOutputSchema,
  },
  async input => {
    const { output: copyResult } = await copyPrompt(input);
    if (!copyResult) {
        throw new Error("A geração de texto falhou.");
    }
    
    const imageUrl = await fetchUnsplashImage(input.businessDescription);

    return {
        ...copyResult,
        backgroundImageUrl: imageUrl,
    };
  }
);
