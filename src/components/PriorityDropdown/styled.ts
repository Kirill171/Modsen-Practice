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
  padding: 4px 8px;
  border-radius: 1234px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: auto;
  text-align: center;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0px 4px 8px ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  width: 130px;
  min-width: 80px;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 6px 12px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  &:hover {
    background: ${({ theme }) => theme.colors.cardBackground};
  }
`;
