import { FieldWrapper } from './FieldWrapper';
import { Input } from './InputField.style';

export const InputField = ({
  type = 'text',
  label,
  registration,
  error,
  placeholder,
  width,
  defaultvalue,
}) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Input
        type={type}
        {...registration}
        placeholder={placeholder}
        width={width}
        defaultValue={defaultvalue}
      />
    </FieldWrapper>
  );
};
