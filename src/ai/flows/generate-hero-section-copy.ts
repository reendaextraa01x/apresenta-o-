
// src/ai/flows/generate-hero-section-copy.ts
'use server';

/**
 * @fileOverview Generates compelling headline and body copy options, and a hero image for the hero section of a landing page.
 *
 * - generateHeroSectionCopy - A function that generates hero section copy.
 * - GenerateHeroSectionCopyInput - The input type for the generateHeroSectionCopy function.
 * - GenerateHeroSectionCopyOutput - The return type for the generateHeroSectionCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroSectionCopyInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A brief description of the business or service.'),
});
export type GenerateHeroSectionCopyInput = z.infer<typeof GenerateHeroSectionCopyInputSchema>;

const GenerateHeroSectionCopyOutputSchema = z.object({
  headlineOptions: z
    .array(z.string())
    .describe('An array of compelling headline options.'),
  bodyCopyOptions: z
    .array(z.string())
    .describe('An array of persuasive body copy options.'),
  imagePrompt: z
    .string()
    .describe('A detailed and creative prompt for an image generation AI to create a relevant hero image.'),
});
export type GenerateHeroSectionCopyOutput = z.infer<typeof GenerateHeroSectionCopyOutputSchema>;

export async function generateHeroSectionCopy(
  input: GenerateHeroSectionCopyInput
): Promise<GenerateHeroSectionCopyOutput> {
  return generateHeroSectionCopyFlow(input);
}

const copyPrompt = ai.definePrompt({
  name: 'generateHeroSectionCopyPrompt',
  input: {schema: GenerateHeroSectionCopyInputSchema},
  output: {
    schema: z.object({
      headlineOptions: z
        .array(z.string())
        .describe('An array of compelling headline options.'),
      bodyCopyOptions: z
        .array(z.string())
        .describe('An array of persuasive body copy options.'),
      imagePrompt: z
        .string()
        .describe('A detailed and creative prompt for an image generation AI to create a relevant hero image. The prompt should be in English to be compatible with most AI image generators. It should describe a visually stunning, professional, and relevant image for the business.')
    }),
  },
  prompt: `You are a marketing expert and a creative director specializing in creating high-converting landing pages.

  Based on the following business description, generate multiple options for both the headline and body copy of a hero section. The goal is to be attention-grabbing and persuade visitors to learn more. Return 3 headline options and 3 body copy options.

  Also, provide one detailed and creative prompt that can be used with an AI image generator (like Midjourney or DALL-E) to create a stunning, professional, and relevant hero image for the business. This prompt must be in English.

Business Description: {{{businessDescription}}}
`,
});

const generateHeroSectionCopyFlow = ai.defineFlow(
  {
    name: 'generateHeroSectionCopyFlow',
    inputSchema: GenerateHeroSectionCopyInputSchema,
    outputSchema: GenerateHeroSectionCopyOutputSchema,
  },
  async input => {
    const { output } = await copyPrompt(input);
    return output!;
  }
);
