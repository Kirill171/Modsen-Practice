import { ROUTES } from '@/constants/routes';
import { TEXTS } from '@/constants/texts';
import * as S from '@/pages/NotFoundPage/styled';

const NotFoundPage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{TEXTS.NotFoundPage.title}</S.Title>
        <S.HomeLink title={TEXTS.clue.homePage} to={ROUTES.HOME}>
          {TEXTS.NotFoundPage.homeLink}
        </S.HomeLink>
      </S.Content>
    </S.Container>
  );
};

export default NotFoundPage;
