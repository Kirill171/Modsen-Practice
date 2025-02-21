import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  align-items: flex-start;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border-radius: 32px;
  background: ${(props) => props.theme.colors.cardBackground};
`;

export const AddTaskButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
  &:hover {
    color: #000;
  }
`;

export const TaskForm = styled.div`
  background: white;
  padding: 12px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const TaskInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

export const TaskTextarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  height: 60px;
  resize: none;
`;

export const PrioritySelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const SaveButton = styled.button`
  flex: 1;
  background: #4caf50;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #45a049;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  background: #af4c4c;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #a04545;
  }
`;
