import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import CrosshairIcon from '@/assets/DarkCrosshair.png';
import { addColumn } from '@/store/boardSlice';
import {
  AddColumnButton,
  HeaderContainer,
  HeaderRow,
  HeaderTitle
} from '@/styles/Header.styles';

export default function Header() {
  const dispatch = useDispatch();

  const getRandomHexColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;

  const handleAddColumn = () => {
    const newColumn = {
      id: uuidv4(),
      title: 'New Column',
      color: getRandomHexColor(),
      tasks: []
    };
    dispatch(addColumn(newColumn));
  };

  return (
    <HeaderRow>
      <HeaderContainer>
        <HeaderTitle>Kanban Dashboard</HeaderTitle>
        <AddColumnButton onClick={handleAddColumn}>
          <img src={CrosshairIcon} alt="crosshair icon" />
        </AddColumnButton>
      </HeaderContainer>
    </HeaderRow>
  );
}
