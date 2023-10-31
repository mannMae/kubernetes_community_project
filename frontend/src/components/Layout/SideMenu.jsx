import { Button } from 'components/Elements';
import { Wrapper } from './SideMenu.style';
import { authSlice, logout } from 'features/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const SideMenu = () => {
  const auth = useSelector(({ auth }) => auth);

  if (auth?.credential) {
    return <Wrapper></Wrapper>;
  }
  return <Wrapper></Wrapper>;
};
