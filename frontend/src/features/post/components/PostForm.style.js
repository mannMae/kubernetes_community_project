import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  border: ${(props) => `1px solid ${props.theme.border.color.lightGray}`};
  padding: 20px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.background.color.lightGray};
`;

export const FormInner = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 5px;
`;

export const PostImageWrapper = styled.div`
  width: 300px;
  position: relative;
`;

export const PostImage = styled.img`
  height: 200px;
  width: 300px;

  border-radius: 10px;

  object-fit: cover;
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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GrapicButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.warning};
`;
