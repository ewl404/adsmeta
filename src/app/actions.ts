'use server';

import {
  personalizeHeadline,
  type PersonalizeHeadlineInput,
} from '@/ai/flows/personalize-headline';

export async function getPersonalizedCopy(data: PersonalizeHeadlineInput) {
  try {
    const result = await personalizeHeadline(data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error personalizing headline:', error);
    return {
      success: false,
      error: 'Não foi possível personalizar a mensagem. Tente novamente.',
    };
  }
}
