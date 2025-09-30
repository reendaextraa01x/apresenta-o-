// src/ai/flows/generate-hero-section-copy.ts
'use server';

/**
 * @fileOverview Generates compelling headline and body copy options for the hero section of a landing page.
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
});
export type GenerateHeroSectionCopyOutput = z.infer<typeof GenerateHeroSectionCopyOutputSchema>;

export async function generateHeroSectionCopy(
  input: GenerateHeroSectionCopyInput
): Promise<GenerateHeroSectionCopyOutput> {
  return generateHeroSectionCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroSectionCopyPrompt',
  input: {schema: GenerateHeroSectionCopyInputSchema},
  output: {schema: GenerateHeroSectionCopyOutputSchema},
  prompt: `You are a marketing expert specializing in creating high-converting landing page copy.

  Based on the following business description, generate multiple options for both the headline and body copy of a hero section. The goal is to be attention-grabbing and persuade visitors to learn more. Return 3 headline options and 3 body copy options.

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
    const {output} = await prompt(input);
    return output!;
  }
);
