import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  border-bottom: ${(props) =>
    `1px solid ${props.theme.border.color.lightGray}`};
  padding: 20px;
`;

export const Describtion = styled.p`
  font-size: 18px;
`;
