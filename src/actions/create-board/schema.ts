import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title is required",
  }).min(3, {
    message: "El titulo es demasiado corto."
  }),
  image: z.string({
    required_error: "Image is required",
    invalid_type_error: "Image is required",
  }),
});