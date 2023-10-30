import { InputField } from 'components/Form';
import { Wrapper } from './SearchForm.style';
import { BiSearch } from 'react-icons/bi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const handleChangeInput = (e) => {
    if (e.target.value === '') {
      return navigate('/');
    }
    navigate(`/search?word=${e.target.value}`);
  };
  return (
    <Wrapper>
      <InputField label={<BiSearch size="16" />} onchange={handleChangeInput} />
    </Wrapper>
  );
};
