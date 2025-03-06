import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: ${({ theme }) => theme.sizes.screen};
`;

export const Main = styled.main`
  margin-top: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
`;
