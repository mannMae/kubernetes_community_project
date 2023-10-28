import { Button } from 'components/Elements';
import {
  Email,
  Footer,
  Infomation,
  ListItem,
  NavigationList,
  Nickname,
  ProfileImage,
  Wrapper,
} from './Navigation.style';
import { useNavigate } from 'react-router-dom';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const navigate = useNavigate();
  const auth = useSelector(({ auth }) => auth);

  return (
    <Wrapper>
      <NavigationList>
        {navigationList.map((item, index) => {
          let isSelected = window.location.pathname === item.path;
          return (
            <ListItem key={index}>
              <Button
                startIcon={isSelected ? item.startIcons[1] : item.startIcons[0]}
                fontcolor="#000"
                fontweight={isSelected ? 700 : 400}
                fontsize="16px"
                backgroundcolor="transparent"
                onClick={() => navigate(item.path)}
              >
                {item.content}
              </Button>
            </ListItem>
          );
        })}
      </NavigationList>
      {auth?.credential && (
        <Footer>
          <ProfileImage />
          <Infomation>
            <Nickname>{auth?.credential.user.nickname}</Nickname>
            <Email>{auth?.credential.user.email}</Email>
          </Infomation>
        </Footer>
      )}
    </Wrapper>
  );
};

const navigationList = [
  {
    value: 'home',
    content: '홈',
    startIcons: [<AiOutlineHome />, <AiFillHome />],
    path: '/',
  },
  {
    value: 'profile',
    content: '프로필',
    startIcons: [<FaRegUser />, <FaUser />],
    path: '/app/user/profile',
  },
];
