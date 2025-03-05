import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

export const Main = styled.main`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;
