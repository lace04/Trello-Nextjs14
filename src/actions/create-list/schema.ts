import { z } from 'zod';

export const CreateList = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title is required',
    })
    .min(3, {
      message: 'Título demasiado corto.',
    }),
  boardId: z.string(),
});
