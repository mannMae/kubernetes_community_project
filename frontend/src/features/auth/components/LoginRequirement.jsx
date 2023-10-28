import { Button } from 'components/Elements';
import { Describtion, Wrapper } from './LoginRequirement.style';

export const LoginRequirement = ({ describtion }) => {
  return (
    <Wrapper>
      <Describtion>
        {describtion ? describtion : '로그인이 필요합니다'}
      </Describtion>
      <Button>로그인하기</Button>
    </Wrapper>
  );
};
