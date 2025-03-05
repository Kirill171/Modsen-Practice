import React from 'react';

import CrosshairIcon from '@/assets/WhiteCrosshair.png';
import {
  Circle,
  ColumnContainer,
  ColumnTitle,
  EditableInput,
  RemoveColumnButton,
  SizedImage,
  SpacingDiv
} from '@/components/CardHeader/styled';
import { TEXTS } from '@/constants/texts';
import { useEditableTitle } from '@/hooks/useEditableTitle';
import { type TaskType } from '@/store/boardSlice';

interface ColumnProps {
  column: {
    id: string;
    title: string;
    color: string;
    tasks: TaskType[];
  };
  removeColumn: () => void;
  isRemovable: boolean;
  openTaskForm: () => void;
}

const CardHeader: React.FC<ColumnProps> = ({
  column,
  removeColumn,
  isRemovable,
  openTaskForm
}) => {
  const {
    isEditing,
    title,
    inputRef,
    handleTitleClick,
    handleBlur,
    handleKeyDown,
    setTitle
  } = useEditableTitle({
    initialTitle: column.title,
    columnId: column.id,
    isRemovable
  });

  return (
    <ColumnContainer color={column.color}>
      <SpacingDiv>
        <Circle color={column.color}>{column.tasks.length}</Circle>
        {isEditing ? (
          <EditableInput
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <ColumnTitle
            onClick={handleTitleClick}
            title={TEXTS.clue.editColumnTitle}
          >
            {title}
          </ColumnTitle>
        )}
      </SpacingDiv>

      <SpacingDiv>
        <SizedImage
          title={TEXTS.clue.addTask}
          src={CrosshairIcon}
          alt="Add column icon"
          onClick={openTaskForm}
        />
        {isRemovable && (
          <RemoveColumnButton
            title={TEXTS.clue.removeColumn}
            onClick={removeColumn}
          >
            ✖
          </RemoveColumnButton>
        )}
      </SpacingDiv>
    </ColumnContainer>
  );
};

export default CardHeader;
