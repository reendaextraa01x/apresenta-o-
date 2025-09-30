
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
  heroImage: z
    .string()
    .describe('A URL of a relevant hero image for the website from Unsplash.'),
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
      imageSearchQuery: z.string().describe('A 1-2 word search query for Unsplash to find a relevant background image.')
    }),
  },
  prompt: `You are a marketing expert specializing in creating high-converting landing page copy.

  Based on the following business description, generate multiple options for both the headline and body copy of a hero section. The goal is to be attention-grabbing and persuade visitors to learn more. Return 3 headline options and 3 body copy options.

  Also, provide a 1-2 word search query for Unsplash to find a relevant background image for the business.

Business Description: {{{businessDescription}}}
`,
});

async function fetchUnsplashImage(query: string): Promise<string> {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (!accessKey) {
        console.warn("Unsplash Access Key not found. Using placeholder image.");
        return 'https://picsum.photos/seed/1/1200/800';
    }
    
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`, {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        });
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }
    } catch (error) {
        console.error("Error fetching image from Unsplash:", error);
    }

    // Fallback to placeholder if Unsplash fails
    return `https://picsum.photos/seed/${query.replace(/\s+/g, '-')}/1200/800`;
}


const generateHeroSectionCopyFlow = ai.defineFlow(
  {
    name: 'generateHeroSectionCopyFlow',
    inputSchema: GenerateHeroSectionCopyInputSchema,
    outputSchema: GenerateHeroSectionCopyOutputSchema,
  },
  async input => {
    const copyResult = await copyPrompt(input);
    const copyOutput = copyResult.output!;

    const imageUrl = await fetchUnsplashImage(copyOutput.imageSearchQuery);

    return {
      headlineOptions: copyOutput.headlineOptions,
      bodyCopyOptions: copyOutput.bodyCopyOptions,
      heroImage: imageUrl,
    };
  }
);
