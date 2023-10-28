import { useRef, useState } from 'react';
import { FieldWrapper } from './FieldWrapper';
import { Textarea } from './TextareaField.style';

export const TextareaField = ({
  type = 'text',
  label,
  registration,
  error,
  defaultvalue,
  width,
}) => {
  const textarea = useRef();

  const onChange = (e) => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
    registration.onChange(e);
  };

  const handleref = (e) => {
    registration.ref(e);
    textarea.current = e;
  };
  return (
    <FieldWrapper label={label} error={error}>
      <Textarea
        defaultValue={defaultvalue}
        type={type}
        {...registration}
        onChange={onChange}
        rows={1}
        ref={handleref}
        width={width}
      />
    </FieldWrapper>
  );
};
