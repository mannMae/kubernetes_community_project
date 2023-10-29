import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  padding: 10px;
  border-bottom: ${(props) =>
    `1px solid ${props.theme.border.color.lightGray}`};
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.background.color.lightGray};
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostInfomation = styled.h4``;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.warning};
`;

export const PostImageWrapper = styled.div`
  width: 300px;
  position: relative;
`;

export const ClearImageButton = styled.button`
  height: 20px;
  position: absolute;
  top: 5%;
  right: 10%;

  border-radius: 50%;
  color: ${(props) => props.theme.font.color.white};
  background-color: rgba(0, 0, 0, 0.3);
`;

export const PostImage = styled.img`
  align-self: center;
  height: 200px;
  width: 300px;

  border-radius: 10px;

  object-fit: cover;
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.p``;
