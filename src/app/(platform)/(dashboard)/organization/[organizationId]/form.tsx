'use client';

import { createBoard } from '@/actions/create-board';
import { useFormState } from 'react-dom';
import { FormInput } from './form-input';
import { FormButton } from './form-button';
import { useAction } from '@/hooks/use-actions';

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
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};
