import styled from 'styled-components';

import {
  Priority,
  priorityBackgroundColors,
  priorityColors
} from '@/types/priorityTypes';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button<{ $priority: Priority }>`
  background: ${({ $priority, theme }) =>
    $priority ? priorityBackgroundColors[$priority] : theme.colors.lightBlue};
  color: ${({ $priority, theme }) =>
    $priority ? priorityColors[$priority] : theme.colors.black};
  border: none;
  padding: ${({ theme }) => theme.spacing.button};
  border-radius: ${({ theme }) => theme.borderRadius.extraLarge};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: auto;
  text-align: center;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes.full};
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.border.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0px ${({ theme }) => theme.spacing.button};
  ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.dropDownWidth};
  min-width: ${({ theme }) => theme.sizes.dropDownMinWidth};
  z-index: ${({ theme }) => theme.sizes.burgerMenuZIndex};
`;

export const DropdownItem = styled.div`
  padding: ${({ theme }) => theme.spacing.headerCircle};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  &:hover {
    background: ${({ theme }) => theme.colors.cardBackground};
  }
`;
