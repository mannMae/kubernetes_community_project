import { SideMenu } from '.';
import { ContentSection, Wrapper } from './MainLayout.style';
import { Navigation } from './Navigation';

export const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <ContentSection>{children}</ContentSection>
      <SideMenu />
    </Wrapper>
  );
};
