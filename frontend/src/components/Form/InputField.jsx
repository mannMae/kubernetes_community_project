import { FieldWrapper } from './FieldWrapper';
import { Input } from './InputField.style';

export const InputField = ({
  type = 'text',
  label,
  registration,
  error,
  placeholder,
}) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Input type={type} {...registration} placeholder={placeholder} />
    </FieldWrapper>
  );
};
