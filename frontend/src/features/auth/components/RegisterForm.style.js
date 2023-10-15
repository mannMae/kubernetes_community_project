import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.warning};
`;
