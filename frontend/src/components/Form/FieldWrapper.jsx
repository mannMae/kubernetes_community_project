import { Error, Inner, Label, Wrapper } from './FieldWrapper.style';

export const FieldWrapper = ({
  label,
  error,
  children,
  padding,
  backgroundcolor,
}) => {
  return (
    <Wrapper padding={padding} backgroundcolor={backgroundcolor}>
      <Label>
        {label}
        <Inner>{children}</Inner>
      </Label>
      {error?.message && <Error>{error?.message}</Error>}
    </Wrapper>
  );
};
