import { Button } from 'components/Elements';
import { Wrapper } from './SideMenu.style';
import { authSlice, logout } from 'features/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const SideMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  const handleClickLogout = async () => {
    await logout()
      .then((res) => {
        dispatch(authSlice.actions.updateUser());
      })
      .then((res) => navigate('/'))
      .catch((error) => console.error(error));
  };

  if (auth?.credential) {
    return (
      <Wrapper>
        <Button onClick={() => handleClickLogout()}>로그아웃</Button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Button onClick={() => navigate('/auth/login')}>로그인하기</Button>
    </Wrapper>
  );
};
