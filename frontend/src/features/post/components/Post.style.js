import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 10px;
  border: ${(props) => `1px solid ${props.theme.border.color.lightGray}`};
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

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.p``;
