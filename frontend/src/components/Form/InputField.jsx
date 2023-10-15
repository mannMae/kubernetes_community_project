import { FieldWrapper } from './FieldWrapper';
import { Input } from './InputField.style';

export const InputField = ({ type = 'text', label, registration, error }) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Input type={type} {...registration} />
    </FieldWrapper>
  );
};
