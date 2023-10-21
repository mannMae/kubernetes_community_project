import { Content, Wrapper } from './Button.style';

export const Button = ({
  onClick,
  children,
  startIcon,
  endIcon,
  bordercolor,
  backgroundcolor,
  fontcolor,
  padding,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
      padding={padding}
    >
      {startIcon && startIcon}
      {children && <Content fontcolor={fontcolor}>{children}</Content>}
      {endIcon && endIcon}
    </Wrapper>
  );
};
