import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 250px;

  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

export const Inner = styled.div`
  width: 100%;
`;
