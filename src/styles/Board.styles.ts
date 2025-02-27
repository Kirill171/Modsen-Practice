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

export const AddTaskContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 24px;
  padding: 12px;
`;

export const AddTaskButton = styled.button<{ color: string }>`
  border: none;
  padding: 4px 8px;
  border-radius: 1234px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.color};
  background: ${(props) => `${props.color}10`};
`;
