import { z } from 'zod';

export const createBoardSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title is required',
    })
    .min(3, { message: 'El titulo es demasiado corto' }),
});
