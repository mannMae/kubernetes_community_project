import { Button } from 'components/Elements';
import { Wrapper } from './SideMenu.style';
import { logout } from 'features/auth';
import { useNavigate } from 'react-router-dom';

export const SideMenu = () => {
  const navigate = useNavigate();
  const handleClickLogout = async () => {
    await logout();
    navigate('/');
  };
  return (
    <Wrapper>
      <Button onClick={() => handleClickLogout()}>로그아웃</Button>
    </Wrapper>
  );
};
