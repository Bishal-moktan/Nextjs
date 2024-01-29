'use client';

import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import BackButton from './BackButton';
import Header from './Header';
import Socials from './Socials';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  socials?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  socials,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header headerLabel={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {socials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
export default CardWrapper;
