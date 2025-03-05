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
  max-width: 289px;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${(props) => props.theme.colors.border};
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
  padding: 4px 8px;
  border-radius: 1234px;
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
  color: #555;
  width: 100%;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 16px;
  right: 28px;
  background: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const TaskRemoveButton = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;
  background: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const EditableInput = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: ${({ theme }) => theme.spacing.ultrasmall};
`;

export const EditableTextarea = styled.textarea`
  width: 100%;
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
