import styled from 'styled-components';

export const BoardContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
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
  padding: ${({ theme }) => theme.spacing.card};
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
  border: ${({ theme }) => theme.border.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.card};
`;

export const AddTaskButton = styled.button<{ color: string }>`
  border: none;
  padding: ${({ theme }) => theme.spacing.button};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${(props) => props.color};
  background: ${(props) => `${props.color}10`};
`;
