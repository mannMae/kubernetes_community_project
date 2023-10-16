import { SideMenu } from '.';
import { Wrapper } from './MainLayout.style';
import { Navigation } from './Navigation';

export const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
      <SideMenu />
    </Wrapper>
  );
};
