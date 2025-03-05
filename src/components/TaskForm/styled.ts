import styled from 'styled-components';

export const TaskFormView = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const TaskInput = styled.input`
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.large};
  width: 100%;
  &::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const TaskTextarea = styled.textarea`
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.description};
  font-size: ${({ theme }) => theme.fontSizes.large};
  width: 100%;
  height: 30px;
  resize: none;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const SaveButton = styled.button`
  flex: 1;
  color: ${(props) => props.theme.colors.description};
  background: none;
  border: none;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  flex: 1;
  color: ${(props) => props.theme.colors.description};
  background: none;
  border: none;
  cursor: pointer;
`;
