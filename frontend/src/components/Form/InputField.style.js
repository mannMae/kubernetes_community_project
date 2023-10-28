import styled from 'styled-components';

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  border: none;
  outline: none;

  background-color: transparent;
`;
