import type { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '@/components/button';
import { H1 } from '@/components/heading';
import { P } from '@/components/paragraph';
import { Section } from '@/components/section';

import { CrazyThing } from '../components/crazy-thing';

const CrazyPage: NextPage = () => {
  return (
    <>
      <Section color="primary" noBorder>
        <H1>Insane Page!!!</H1>

        <P>This is code from a git submodule.</P>
      </Section>

      <Section>
        <CrazyThing title="ABC"></CrazyThing>
      </Section>
    </>
  );
};

export default CrazyPage;
