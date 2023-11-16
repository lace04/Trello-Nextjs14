'use client';

import Image from 'next/image';
import { CreditCard } from 'lucide-react';
import { useOrganization } from '@clerk/nextjs';
import { Skeleton } from '@/components/ui/skeleton';

function Info() {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) return <Info.Skeleton />;

  return (
    <div className='flex items-center gap-x-4'>
      <div className='w-[60px] h-[60px] relative'>
        <Image
          fill
          src={organization?.imageUrl || ''}
          alt={organization?.name!}
          className='rounded-md object-cover'
        />
      </div>
      <div className='space-y-1'>
        <p className='font-semibold text-xl'>{organization?.name}</p>
        <div className='flex items-center text-xs text-muted-foreground'>
          <CreditCard className='w-3 h-3 mr-1' />
          Gratis
        </div>
      </div>
    </div>
  );
}

export default Info;

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className='flex items-center gap-x-4'>
      <div className='w-[60px] h-[60px] relative'>
        <Skeleton className='w-full h-full absolute' />
      </div>
      <div className='space-y-1'>
        <Skeleton className='w-[200px] h-10' />
        <div className='flex items-center'>
          <Skeleton className='w-4 h-4 mr-2' />
          <Skeleton className='h-4 w-[100px]' />
        </div>
      </div>
    </div>
  );
};
