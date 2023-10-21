import styled from 'styled-components';

export const Wrapper = styled.button`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-color: ${(props) => props.theme.border.color[props.bordercolor]};
  border-width: 1px;
  border-style: ${(props) => (props.bordercolor ? 'solid' : null)};
  border-radius: 5px;

  padding: ${(props) => (props.padding ? props.padding : '10px')};

  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : props.theme.primary};
`;

export const Content = styled.span`
  color: ${(props) =>
    props.fontcolor ? props.fontcolor : props.theme.font.color.white};
`;
