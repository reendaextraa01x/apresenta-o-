// src/ai/flows/generate-website-image.ts
'use server';

/**
 * @fileOverview Generates a mockup image of a website's hero section based on a business description.
 *
 * - generateWebsiteImage - A function that handles the image generation.
 * - GenerateWebsiteImageInput - The input type for the generateWebsiteImage function.
 * - GenerateWebsiteImageOutput - The return type for the generateWebsiteImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebsiteImageInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A brief description of the business or service.'),
});
export type GenerateWebsiteImageInput = z.infer<typeof GenerateWebsiteImageInputSchema>;

const GenerateWebsiteImageOutputSchema = z.object({
  imageDataUri: z.string().describe('The generated image as a data URI.'),
});
export type GenerateWebsiteImageOutput = z.infer<
  typeof GenerateWebsiteImageOutputSchema
>;

export async function generateWebsiteImage(
  input: GenerateWebsiteImageInput
): Promise<GenerateWebsiteImageOutput> {
  return generateWebsiteImageFlow(input);
}

const generateWebsiteImageFlow = ai.defineFlow(
  {
    name: 'generateWebsiteImageFlow',
    inputSchema: GenerateWebsiteImageInputSchema,
    outputSchema: GenerateWebsiteImageOutputSchema,
  },
  async ({businessDescription}) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: `Gere uma imagem que seja uma captura de tela da seção principal (hero section) da página inicial de um site moderno, profissional e elegante para o seguinte negócio: "${businessDescription}".

      A imagem deve incluir:
      - Um título (headline) impactante e legível relacionado ao negócio.
      - Um subtítulo ou parágrafo curto.
      - Um botão de chamada para ação (call-to-action) claro, como "Saiba Mais" ou "Compre Agora".
      - Um design limpo, com bom uso de espaços em branco e uma paleta de cores coesa que combine com o setor do negócio.
      - O estilo deve ser de um web design de alta qualidade, como os vistos no Awwwards ou Dribbble.
      - NÃO inclua o cursor do mouse na imagem. A imagem deve ser apenas do layout do site.
      - A imagem deve ter a proporção de 4:3.`,
      config: {
        responseModalities: ['IMAGE'],
      },
    });

    if (!media.url) {
      throw new Error('Image generation failed to produce a result.');
    }

    return {imageDataUri: media.url};
  }
);
