import { z } from 'zod';

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description is required',
      })
      .min(3, {
        message: 'Descripción demasiado corta',
      })
  ),
  title: z.optional(
    z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title is required',
      })
      .min(3, {
        message: 'Título demasiado corto',
      })
  ),
  id: z.string(),
});
