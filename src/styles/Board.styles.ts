import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border-radius: 32px;
  background: ${(props) => props.theme.colors.cardBackground};
`;
