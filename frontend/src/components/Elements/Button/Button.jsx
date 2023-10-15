import { Content, Wrapper } from './Button.style';

export const Button = ({
  onClick,
  children,
  startIcon,
  endIcon,
  bordercolor,
  backgroundcolor,
  fontcolor,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
    >
      {startIcon}
      <Content fontcolor={fontcolor}>{children}</Content>
      {endIcon}
    </Wrapper>
  );
};
