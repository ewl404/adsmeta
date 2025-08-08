// src/ai/flows/personalize-headline.ts
'use server';

/**
 * @fileOverview A flow to personalize the headline and subheadline of a landing page based on user profile.
 *
 * - personalizeHeadline - A function that handles the headline personalization process.
 * - PersonalizeHeadlineInput - The input type for the personalizeHeadline function.
 * - PersonalizeHeadlineOutput - The return type for the personalizeHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeHeadlineInputSchema = z.object({
  followerCount: z.number().describe('The number of followers the user has.'),
  niche: z.string().describe('The niche of the user (e.g., gaming, fashion, finance).'),
});
export type PersonalizeHeadlineInput = z.infer<typeof PersonalizeHeadlineInputSchema>;

const PersonalizeHeadlineOutputSchema = z.object({
  headline: z.string().describe('The personalized headline.'),
  subheadline: z.string().describe('The personalized subheadline.'),
});
export type PersonalizeHeadlineOutput = z.infer<typeof PersonalizeHeadlineOutputSchema>;

export async function personalizeHeadline(input: PersonalizeHeadlineInput): Promise<PersonalizeHeadlineOutput> {
  return personalizeHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeHeadlinePrompt',
  input: {schema: PersonalizeHeadlineInputSchema},
  output: {schema: PersonalizeHeadlineOutputSchema},
  prompt: `You are a marketing expert specializing in creating high-converting landing page copy.

  Based on the user's profile (follower count and niche), create a personalized headline and subheadline to maximize engagement and conversions for a landing page promoting online scratch cards with a 70% commission.

  Follower Count: {{{followerCount}}}
  Niche: {{{niche}}}

  Headline should be short, impactful, and in vibrant yellow.
  Subheadline should be concise, reinforcing the opportunity, in white or green.
  The target audience are bloggers and affiliates with over 5,000 followers.

  Output the headline and subheadline in JSON format.
  `,
});

const personalizeHeadlineFlow = ai.defineFlow(
  {
    name: 'personalizeHeadlineFlow',
    inputSchema: PersonalizeHeadlineInputSchema,
    outputSchema: PersonalizeHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
