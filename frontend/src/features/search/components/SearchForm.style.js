import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: ${(props) =>
    `1px solid ${props.theme.border.color.lightGray}`};
  padding: 20px;
`;
