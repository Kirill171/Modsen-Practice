import styled from 'styled-components';

export const ColumnContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 9999px;
  padding: 8px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  width: 290px;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
`;

export const EditableInput = styled.input`
  color: white;
  font-size: 16px;
  font-weight: bold;
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  outline: none;
  width: 100%;
`;

export const SpacingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Circle = styled.div<{ color: string }>`
  padding: 6px 12px;
  background: white;
  border-radius: 50%;
  color: ${(props) => props.color};
  font-weight: 600;
`;

export const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
`;

export const RemoveColumnButton = styled.button`
  background-color: inherit;
  width: 20px;
  height: 20px;
`;

export const SizedImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
