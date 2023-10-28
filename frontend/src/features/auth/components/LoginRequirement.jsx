import { Button } from 'components/Elements';
import { Describe, Wrapper } from './LoginRequirement.style';

export const LoginRequirement = () => {
  return (
    <Wrapper>
      <Describe>로그인이 필요합니다</Describe>
      <Button>로그인하기</Button>
    </Wrapper>
  );
};
