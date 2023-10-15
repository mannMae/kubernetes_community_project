import { Title, Logo, Inner } from './Layout.style';
import { Wrapper } from './Layout.style';

import k8s_logo from 'assets/images/k8s_logo.png';

export const Layout = ({ children, title }) => {
  return (
    <>
      <Wrapper>
        <Logo src={k8s_logo} />
        <Title>{title}</Title>
        <Inner>{children}</Inner>
      </Wrapper>
    </>
  );
};
