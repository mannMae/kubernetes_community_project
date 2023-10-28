import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 20px;
  background-color: ${(props) => props.theme.background.color.lightGray};
`;

export const Describtion = styled.p`
  font-size: 18px;
`;
