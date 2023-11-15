import { z } from 'zod';
import { Board } from '@prisma/client';

import { ActionState } from '@/lib/create-safe-action';
import { createBoardSchema } from './schema';

export type InputType = z.infer<typeof createBoardSchema>; // { title: string }
export type ReturnType = ActionState<InputType, Board>; // { fieldErrors?: { title?: string[] }, error?: string | null, data?: Board }
