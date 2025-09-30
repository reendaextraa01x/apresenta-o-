'use server';
/**
 * @fileOverview A brand identity architect AI agent.
 *
 * - brandArchitect - A function that handles the brand identity generation process.
 * - BrandArchitectInput - The input type for the brandArchitect function.
 * - BrandArchitectOutput - The return type for the brandArchitect function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BrandArchitectInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A brief description of the business or service.'),
});
export type BrandArchitectInput = z.infer<typeof BrandArchitectInputSchema>;

const BrandArchitectOutputSchema = z.object({
  brandConcept: z
    .string()
    .describe(
      'A short, descriptive concept for the brand (e.g., "minimalist and tech-focused", "warm and artisanal").'
    ),
  headline: z.string().describe('A compelling headline for the hero section.'),
  description: z
    .string()
    .describe('A short, persuasive description for the hero section.'),
  ctaButton: z.string().describe('A clear call-to-action button text.'),
  heroImage: z
    .string()
    .describe(
      "A generated hero image as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type BrandArchitectOutput = z.infer<typeof BrandArchitectOutputSchema>;

export async function brandArchitect(
  input: BrandArchitectInput
): Promise<BrandArchitectOutput> {
  return brandArchitectFlow(input);
}

const textGenerationPrompt = ai.definePrompt({
  name: 'brandArchitectTextPrompt',
  model: 'googleai/gemini-1.5-flash',
  input: {schema: BrandArchitectInputSchema},
  output: {
    schema: z.object({
      brandConcept: BrandArchitectOutputSchema.shape.brandConcept,
      headline: BrandArchitectOutputSchema.shape.headline,
      description: BrandArchitectOutputSchema.shape.description,
      ctaButton: BrandArchitectOutputSchema.shape.ctaButton,
    }),
  },
  prompt: `Você é um diretor de arte e estrategista de marca sênior. Sua tarefa é criar a identidade verbal para a seção principal (hero section) de um site, com base na descrição de um negócio.

    Primeiro, defina um conceito de marca conciso.
    Depois, crie os seguintes textos alinhados a esse conceito:
    1.  **Headline (Título):** Um título curto, impactante e que chame a atenção.
    2.  **Description (Descrição):** Um parágrafo curto (2-3 frases) que explique o valor do negócio.
    3.  **CTA Button (Botão de Ação):** Um texto claro e direto para o botão de chamada para ação.

    Descrição do negócio: {{{businessDescription}}}
  `,
});

const imageGenerationPrompt = `
    Gere uma imagem de fundo para a seção "hero" de um site.
    A imagem deve ser bonita, profissional e abstrata, evitando qualquer texto ou objeto que distraia.
    O estilo da imagem deve ser diretamente inspirado pelo seguinte conceito de marca: "{{{brandConcept}}}".
    Use cores e formas que reflitam este conceito para criar uma atmosfera visual coesa.
    A imagem deve ser adequada para um fundo de site, com espaço negativo para texto sobreposto.
    Formato da imagem: paisagem (16:9).
`;

const brandArchitectFlow = ai.defineFlow(
  {
    name: 'brandArchitectFlow',
    inputSchema: BrandArchitectInputSchema,
    outputSchema: BrandArchitectOutputSchema,
  },
  async input => {
    const {output: textOutput} = await textGenerationPrompt(input);
    if (!textOutput) {
      throw new Error('Text generation failed.');
    }

    const {media} = await ai.generate({
      model: 'googleai/gemini-1.5-flash',
      prompt: imageGenerationPrompt.replace(
        '{{{brandConcept}}}',
        textOutput.brandConcept
      ),
      config: {
        responseModalities: ['IMAGE'],
      },
    });

    if (!media.url) {
      throw new Error('Image generation failed to return a data URI.');
    }

    return {
      ...textOutput,
      heroImage: media.url,
    };
  }
);
