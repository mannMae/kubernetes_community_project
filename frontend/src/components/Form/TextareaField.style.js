import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: ${(props) => (props.width ? props.width : '300px')};
  border: none;
  outline: none;

  background-color: transparent;

  resize: none;
`;
