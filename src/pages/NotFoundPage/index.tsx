import React from 'react';

import { ROUTES } from '@/constants/routes';
import { TEXTS } from '@/constants/texts';
import {
  Container,
  Content,
  HomeLink,
  Title
} from '@/pages/NotFoundPage/styled';

const NotFoundPage = () => {
  return (
    <Container>
      <Content>
        <Title>{TEXTS.NotFoundPage.title}</Title>
        <HomeLink title={TEXTS.clue.homePage} to={ROUTES.HOME}>
          {TEXTS.NotFoundPage.homeLink}
        </HomeLink>
      </Content>
    </Container>
  );
};

export default NotFoundPage;
