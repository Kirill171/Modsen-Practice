import styled from 'styled-components';

export const TaskContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 12px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const TaskPriority = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const TaskTitle = styled.h4`
  margin: 8px 0;
`;

export const TaskDescription = styled.p`
  font-size: 14px;
  color: #555;
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
