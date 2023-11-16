'use client';

import { createBoard } from '@/actions/create-board';
import { useFormState } from 'react-dom';
import { useAction } from '@/hooks/use-actions';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'SUCCESS');
    },
    onError: (data) => {
      console.log(data, 'ERROR');
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className='flex flex-col space-y-2'>
        <FormInput label='Título' id='title' errors={fieldErrors} />
      </div>
      <FormSubmit>Crear</FormSubmit>
    </form>
  );
};
