import {
  priorityColors,
  priorityBackgroundColors,
  Priority
} from '@/types/priorityTypes';
import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 289px;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  padding: 12px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.border};
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
  font-size: 12px;
  font-weight: 600;
  width: fit-content;
  text-align: center;
`;

export const TaskTitle = styled.h4`
  margin: 0;
`;

export const TaskDescription = styled.p`
  font-size: 14px;
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
  font-size: 16px;
  font-weight: bold;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const EditableTextarea = styled.textarea`
  width: 100%;
  font-size: 14px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const PrioritySelect = styled.select`
  font-size: 14px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
