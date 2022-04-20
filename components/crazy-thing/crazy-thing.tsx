import { Button } from '@/components/button';

import * as S from './styles';

interface Props {
  title: string;
}

export const CrazyThing = ({ title }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <Button
        onClick={() => {
          alert('Hello!');
        }}
      >
        Click Me
      </Button>
    </S.Wrapper>
  );
};
