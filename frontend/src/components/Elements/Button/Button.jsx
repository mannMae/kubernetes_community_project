import { Content, Wrapper } from './Button.style';

export const Button = ({
  onClick,
  children,
  startIcon,
  endIcon,
  bordercolor,
  backgroundcolor,
  fontsize,
  fontcolor,
  fontweight,
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
      {children && (
        <Content
          fontsize={fontsize}
          fontcolor={fontcolor}
          fontweight={fontweight}
        >
          {children}
        </Content>
      )}
      {endIcon && endIcon}
    </Wrapper>
  );
};
