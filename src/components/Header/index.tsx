import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import CrosshairIcon from '@/assets/DarkCrosshair.png';
import {
  AddColumnButton,
  BurgerIcon,
  BurgerMenu,
  HeaderContainer,
  HeaderRow,
  HeaderTitle,
  MenuOverlay,
  MobileMenu
} from '@/components/Header/styled';
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
    <HeaderRow>
      <HeaderContainer>
        <HeaderTitle>{TEXTS.header.title}</HeaderTitle>
        <BurgerMenu onClick={toggleMenu}>
          <BurgerIcon className={isMenuOpen ? 'open' : ''} />
        </BurgerMenu>
        <AddColumnButton title={TEXTS.clue.addColumn} onClick={handleAddColumn}>
          <img src={CrosshairIcon} alt="crosshair icon" />
        </AddColumnButton>

        {isMenuOpen && (
          <>
            <MenuOverlay onClick={toggleMenu} />
            <MobileMenu>
              <button onClick={handleAddColumn}>{TEXTS.clue.addColumn}</button>
            </MobileMenu>
          </>
        )}
      </HeaderContainer>
    </HeaderRow>
  );
};

export default Header;
