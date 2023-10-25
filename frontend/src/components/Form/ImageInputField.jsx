import { FieldWrapper } from './FieldWrapper';
import { Input } from './ImageInputField.style';

import { AiOutlinePicture } from 'react-icons/ai';

export const ImageInputField = ({
  registration,
  error,
  size,
  setImage,
  label,
}) => {
  const handleChangeInput = (e) => {
    console.log(e.target.value);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onloadend = (event) => {
      setImage(event.currentTarget.result);
      registration.onChange(e);
    };
  };
  return (
    <FieldWrapper
      label={label ? label : <AiOutlinePicture size={size} />}
      backgroundcolor="transparent"
      error={error}
      padding="0"
    >
      <Input
        type="file"
        accept="image/*"
        {...registration}
        onChange={handleChangeInput}
      />
    </FieldWrapper>
  );
};
