import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

function Footer() {
  return (
    <footer className='fixed bottom-0 w-full p-4 border-t bg-slate-100'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Button size='sm' variant='ghost'>
            Política de privacidad
          </Button>
          <Button size='sm' variant='ghost'>
            Términos de servicio
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
