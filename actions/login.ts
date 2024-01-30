'use server';

import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(data);
  if (!validateFields.success) {
    return { error: 'Invalid fields' };
  }

  return { success: 'Email sent!' };
};
