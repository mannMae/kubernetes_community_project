import styled from 'styled-components';

export const Wrapper = styled.div``;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 5px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Contents = styled.div`
  width: 150px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Email = styled.span`
  font-size: 14px;
`;

export const CreatedAt = styled.span`
  font-size: 14px;
`;
