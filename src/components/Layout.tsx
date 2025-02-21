import Header from '@components/Header';
import React from 'react';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Main>{children || <Outlet />}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const Main = styled.main`
  margin-top: 136px;
  background-color: ${(props) => props.theme.colors.background};
`;
