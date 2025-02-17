import styled from 'styled-components';

export const TaskContainer = styled.div`
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
