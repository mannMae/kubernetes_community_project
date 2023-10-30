import styled from 'styled-components';

export const Wrapper = styled.label`
  display: block;
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : '10px')};

  background-color: ${(props) =>
    props.backgroundcolor
      ? props.backgroundcolor
      : props.theme.background.color.lightGray};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Inner = styled.div``;

export const Error = styled.span``;
