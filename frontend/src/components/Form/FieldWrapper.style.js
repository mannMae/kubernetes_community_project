import styled from 'styled-components';

export const Wrapper = styled.label`
  display: block;
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : '10px')};

  background-color: ${(props) =>
    props.backgroundcolor
      ? props.backgroundcolor
      : props.theme.background.lightGray};
`;

export const Label = styled.label``;

export const Inner = styled.div``;

export const Error = styled.span``;
