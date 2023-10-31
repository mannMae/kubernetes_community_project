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
  Profile,
  ProfileImage,
  Wrapper,
} from './Navigation.style';
import { useNavigate } from 'react-router-dom';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BiSearch, BiSolidSearch } from 'react-icons/bi';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import highclef_logo from 'assets/images/highclef_logo.png';
import { useEffect, useState } from 'react';
import { authSlice, logout } from 'features/auth';

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

  const dispatch = useDispatch();
  const handleClickLogout = async () => {
    await logout()
      .then((res) => {
        dispatch(authSlice.actions.updateUser());
      })
      .then((res) => navigate('/'))
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      <NavigationInner>
        <Header>
          <Logo src={highclef_logo} onClick={() => navigate('/')} />
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
            <Profile>
              <ProfileImage src={auth.credential.user.photoURL} />
              <Infomation>
                <Nickname>{auth?.credential.user.displayName}</Nickname>
                <Email>{auth?.credential.user.email}</Email>
              </Infomation>
            </Profile>
            <Button onClick={() => handleClickLogout()}>로그아웃</Button>
          </>
        ) : (
          <>
            <Message>로그인 정보가 없습니다</Message>
            <Button onClick={() => navigate('/auth/login')}>로그인하기</Button>
          </>
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
