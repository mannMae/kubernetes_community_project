import { useNavigate } from 'react-router-dom';
import { Title, Logo, Inner } from './Layout.style';
import { Wrapper } from './Layout.style';

import highclef_logo_white_vertical from 'assets/images/highclef_logo_vertical.png';

export const Layout = ({ children, title }) => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Logo
          src={highclef_logo_white_vertical}
          onClick={() => navigate('/')}
        />
        <Title>{title}</Title>
        <Inner>{children}</Inner>
      </Wrapper>
    </>
  );
};
