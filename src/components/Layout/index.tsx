import React from 'react';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import { Container, Main } from '@/components/Layout/styled';

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
