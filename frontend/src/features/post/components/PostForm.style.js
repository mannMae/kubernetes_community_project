import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GrapicButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.warning};
`;
