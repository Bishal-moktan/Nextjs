'use server';

import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { getUserByEmail } from '@/data/user';

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(data);
  if (!validateFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password, name } = validateFields.data;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'User already exists!' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send email verification token

  return { success: 'User created!' };
};
