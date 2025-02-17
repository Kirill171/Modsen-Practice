import React from 'react';
import {
  Circle,
  ColumnContainer,
  RemoveColumnButton,
  SizedImage,
  SpacingDiv
} from '@/styles/Column.styles';
import CrosshairIcon from '@/assets/WhiteCrosshair.png';
import TrashBoxIcon from '@/assets/TrashBox.png';
import { TaskType } from '@/store/boardSlice';

interface ColumnProps {
  column: {
    id: string;
    title: string;
    color: string;
    tasks: TaskType[];
  };
  removeColumn: () => void;
  isRemovable: boolean;
}

const Column: React.FC<ColumnProps> = ({
  column,
  removeColumn,
  isRemovable
}) => {
  return (
    <ColumnContainer color={column.color}>
      <SpacingDiv>
        <Circle color={column.color}>{column.tasks.length}</Circle>
        <p>{column.title}</p>
      </SpacingDiv>

      <SpacingDiv>
        <SizedImage src={CrosshairIcon} alt="white crosshair icon" />
        {isRemovable && (
          <RemoveColumnButton onClick={removeColumn}>
            <SizedImage src={TrashBoxIcon} alt="trash box icon" />
          </RemoveColumnButton>
        )}
      </SpacingDiv>
    </ColumnContainer>
  );
};

export default Column;
