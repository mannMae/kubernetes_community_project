import { useNavigate } from 'react-router-dom';
import { Title, Logo, Inner } from './Layout.style';
import { Wrapper } from './Layout.style';

import k8s_logo from 'assets/images/k8s_logo.png';

export const Layout = ({ children, title }) => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Logo src={k8s_logo} onClick={() => navigate('/')} />
        <Title>{title}</Title>
        <Inner>{children}</Inner>
      </Wrapper>
    </>
  );
};
