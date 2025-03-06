import styled from 'styled-components';

export const ColumnContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: ${({ theme }) => theme.borderRadius.extraLarge};
  padding: ${({ theme }) => theme.spacing.small};
  padding-right: ${({ theme }) => theme.spacing.card};
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  width: ${({ theme }) => theme.sizes.cardWidth};
  height: ${({ theme }) => theme.sizes.cardHeight};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const EditableInput = styled.input`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: none;
  outline: none;
  width: ${({ theme }) => theme.sizes.full};
`;

export const SpacingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const Circle = styled.div<{ color: string }>`
  padding: ${({ theme }) => theme.spacing.headerCircle};
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
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transform: scale(1.2);
`;

export const SizedImage = styled.img`
  width: ${({ theme }) => theme.sizes.imageSize};
  height: ${({ theme }) => theme.sizes.imageSize};
  cursor: pointer;
`;
