import styled from 'styled-components';

export const BoardContainer = styled.div`
  margin: 0 auto;
  max-width: 1666px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const Card = styled.div<{ $isDragging?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  background: ${({ theme }) => theme.colors.cardBackground};
  ${(props) =>
    props.$isDragging &&
    `
    opacity: 0.5;
  `}
`;

export const AddTaskContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 12px;
`;

export const AddTaskButton = styled.button<{ color: string }>`
  border: none;
  padding: 4px 8px;
  border-radius: 1234px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${(props) => props.color};
  background: ${(props) => `${props.color}10`};
`;
