import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const NavigationList = styled.ul``;

export const ListItem = styled.li``;
export const Footer = styled.footer`
  display: flex;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.background.color.lightGray};
`;

export const Infomation = styled.div`
  height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Nickname = styled.p``;

export const Email = styled.address``;
