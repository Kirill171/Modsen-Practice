import styled from 'styled-components';

import {
  Priority,
  priorityBackgroundColors,
  priorityColors
} from '@/types/priorityTypes';

export const TaskContainer = styled.div<{ $isDraggingOver?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  max-width: ${({ theme }) => theme.sizes.cardWidth};
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lightsmall};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: ${({ theme }) => theme.border.border};
  ${(props) =>
    props.$isDraggingOver &&
    `
    border: 2px dashed #666;
    background-color: #f0f0f0;
  `}
`;

export const TaskPriority = styled.span<{ $priority: Priority }>`
  display: ${({ $priority }) =>
    $priority !== 'No priority' && $priority ? 'flex' : 'none'};
  background: ${({ $priority }) =>
    $priority ? priorityBackgroundColors[$priority] : 'none'};
  color: ${({ $priority }) => ($priority ? priorityColors[$priority] : 'none')};
  border: none;
  padding: ${({ theme }) => theme.spacing.button};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: fit-content;
  text-align: center;
`;

export const TaskTitle = styled.h4`
  margin: 0;
`;

export const TaskDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.description};
  width: ${({ theme }) => theme.sizes.full};
`;

export const EditButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.minilarge};
  background: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const TaskRemoveButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.card};
  background: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const EditableInput = styled.input`
  width: ${({ theme }) => theme.sizes.full};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: ${({ theme }) => theme.spacing.ultrasmall};
`;

export const EditableTextarea = styled.textarea`
  width: ${({ theme }) => theme.sizes.full};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.ultrasmall};
  resize: none;
`;

export const PrioritySelect = styled.select`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.ultrasmall};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
