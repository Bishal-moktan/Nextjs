import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LoginButton from '@/components/auth/LoginButton';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-600">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
      </div>
      <LoginButton>
        <Button variant={'secondary'} size={'lg'}>
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}