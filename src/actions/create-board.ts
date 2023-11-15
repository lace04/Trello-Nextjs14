'use server';

import { z } from 'zod';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: 'Se requiere una longitud mínima de 3 letras',
  }),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields.',
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: 'Database Error Occurred.',
    };
  }

  revalidatePath('/organization/org_2YBpPxxFMAjNt952p5PzuThxS9J');
  redirect('/organization/org_2YBpPxxFMAjNt952p5PzuThxS9J');
}
