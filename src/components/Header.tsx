import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import {
  AddColumnButton,
  HeaderContainer,
  HeaderRow,
  HeaderTitle
} from '@/styles/Header.styles';
import { addColumn } from '@/store/boardSlice';
import CrosshairIcon from '@/assets/DarkCrosshair.png';

export default function Header() {
  const dispatch = useDispatch();

  const handleAddColumn = () => {
    const newColumn = {
      id: uuidv4(),
      title: 'New Column',
      color: '#6B7280',
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
