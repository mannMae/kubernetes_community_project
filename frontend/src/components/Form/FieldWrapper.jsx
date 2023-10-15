import { Error, Inner, Label, Wrapper } from './FieldWrapper.style';

export const FieldWrapper = ({ label, error, children }) => {
  return (
    <Wrapper>
      <Label>
        {label}
        <Inner>{children}</Inner>
      </Label>
      {error?.message && <Error>{error?.message}</Error>}
    </Wrapper>
  );
};
