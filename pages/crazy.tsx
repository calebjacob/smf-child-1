import type { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '@/components/button';
import { H1 } from '@/components/heading';
import { P } from '@/components/paragraph';
import { Section } from '@/components/section';

const CrazyPage: NextPage = () => {
  return (
    <>
      <Section color="primary" noBorder>
        <H1>Crazy Page!!!</H1>

        <P>This is code from a git submodule.</P>

        <Link href="/other" passHref>
          <Button size="large">Click Me</Button>
        </Link>
      </Section>
    </>
  );
};

export default CrazyPage;
