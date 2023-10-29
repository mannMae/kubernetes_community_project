import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 20vw;
  border-left: ${(props) => `1px solid ${props.theme.border.color.lightGray}`};
  padding: 10px;
`;
