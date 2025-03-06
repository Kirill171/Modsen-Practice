import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import CrosshairIcon from '@/assets/DarkCrosshair.png';
import * as S from '@/components/Header/styled';
import { TEXTS } from '@/constants/texts';
import { addColumn } from '@/store/boardSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getRandomHexColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;

  const handleAddColumn = () => {
    const newColumn = {
      id: uuidv4(),
      title: TEXTS.header.newColumnTitle,
      color: getRandomHexColor(),
      tasks: []
    };
    dispatch(addColumn(newColumn));
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.HeaderRow>
      <S.HeaderContainer>
        <S.HeaderTitle>{TEXTS.header.title}</S.HeaderTitle>
        <S.BurgerMenu onClick={toggleMenu}>
          <S.BurgerIcon className={isMenuOpen ? 'open' : ''} />
        </S.BurgerMenu>
        <S.AddColumnButton
          title={TEXTS.clue.addColumn}
          onClick={handleAddColumn}
        >
          <img src={CrosshairIcon} alt="crosshair icon" />
        </S.AddColumnButton>

        {isMenuOpen && (
          <>
            <S.MenuOverlay onClick={toggleMenu} />
            <S.MobileMenu>
              <button onClick={handleAddColumn}>{TEXTS.clue.addColumn}</button>
            </S.MobileMenu>
          </>
        )}
      </S.HeaderContainer>
    </S.HeaderRow>
  );
};

export default Header;
