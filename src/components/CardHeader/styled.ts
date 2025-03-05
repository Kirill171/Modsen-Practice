import styled from 'styled-components';

export const ColumnContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 9999px;
  padding: ${({ theme }) => theme.spacing.small};
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  width: 290px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const EditableInput = styled.input`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: none;
  outline: none;
  width: 100%;
`;

export const SpacingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const Circle = styled.div<{ color: string }>`
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  color: ${(props) => props.color};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  cursor: pointer;
`;

export const RemoveColumnButton = styled.button`
  background-color: inherit;
  cursor: pointer;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transform: scale(1.2);
`;

export const SizedImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
