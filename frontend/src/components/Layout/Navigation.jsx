import { Button } from 'components/Elements';
import {
  Email,
  Footer,
  Header,
  Infomation,
  ListItem,
  Logo,
  Message,
  NavigationInner,
  NavigationList,
  Nickname,
  ProfileImage,
  Wrapper,
} from './Navigation.style';
import { useNavigate } from 'react-router-dom';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BiSearch, BiSolidSearch } from 'react-icons/bi';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import k8s_logo from 'assets/images/k8s_logo.png';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const navigate = useNavigate();
  const auth = useSelector(({ auth }) => auth);
  const [navigationList, setNavigationList] = useState(guestNavigationList);

  useEffect(() => {
    if (auth?.credential) {
      setNavigationList(memberNavigationList);
    } else {
      setNavigationList(guestNavigationList);
    }
  }, [auth?.credential]);

  return (
    <Wrapper>
      <NavigationInner>
        <Header>
          <Logo src={k8s_logo} onClick={() => navigate('/')} />
        </Header>
        <NavigationList>
          {navigationList.map((item, index) => {
            let isSelected = window.location.pathname === item.path;
            return (
              <ListItem key={index}>
                <Button
                  startIcon={
                    isSelected ? item.startIcons[1] : item.startIcons[0]
                  }
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
      </NavigationInner>
      <Footer>
        {auth?.credential ? (
          <>
            <ProfileImage src={auth.credential.user.photoURL} />
            <Infomation>
              <Nickname>{auth?.credential.user.displayName}</Nickname>
              <Email>{auth?.credential.user.email}</Email>
            </Infomation>
          </>
        ) : (
          <Message>로그인 정보가 없습니다</Message>
        )}
      </Footer>
    </Wrapper>
  );
};

const memberNavigationList = [
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
  {
    value: 'search',
    content: '검색',
    startIcons: [<BiSearch />, <BiSolidSearch />],
    path: '/search',
  },
];

const guestNavigationList = [
  {
    value: 'home',
    content: '홈',
    startIcons: [<AiOutlineHome />, <AiFillHome />],
    path: '/',
  },
  {
    value: 'search',
    content: '검색',
    startIcons: [<BiSearch />, <BiSolidSearch />],
    path: '/search',
  },
];
