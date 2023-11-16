import { HelpCircle, User2 } from 'lucide-react';

import { Hint } from '@/components/hint';
import { FormPopover } from '@/components/form/form-popover';

import React from 'react';

function BoardList() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center font-semibold text-lg text-neutral-700'>
        <User2 className='h-6 w-6 mr-2' />
        Mis tableros
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        <FormPopover sideOffset={10} side='right'>
          <div
            role='button'
            className='aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition'
          >
            <p className='text-sm'>Crear nuevo tablero</p>
            <span className='text-xs'>5 restantes</span>
            <Hint
              sideOffset={40}
              description={`
              Los espacios de trabajo gratuitos pueden tener hasta 5 tableros abiertos. Para tableros ilimitados, actualice este espacio de trabajo.
              `}
            >
              <HelpCircle className='absolute bottom-2 right-2 h-[14px] w-[14px]' />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
}

export default BoardList;
