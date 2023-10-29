import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 20vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: ${(props) => `1px solid ${props.theme.border.color.lightGray}`};
`;

export const NavigationInner = styled.div``;

export const Header = styled.header`
  padding: 10px;
`;

export const Logo = styled.img`
  width: 40px;

  cursor: pointer;
`;

export const NavigationList = styled.ul``;

export const ListItem = styled.li``;
export const Footer = styled.footer`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  gap: 10px;

  border-top: ${(props) => `1px solid ${props.theme.border.color.lightGray}`};
  padding: 10px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.background.color.white};
`;

export const Infomation = styled.div`
  height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Nickname = styled.p``;

export const Email = styled.address``;

export const Message = styled.p`
  margin: 0 auto;
`;
