import React, { useState, useRef } from 'react';
import {
  Circle,
  ColumnContainer,
  ColumnTitle,
  RemoveColumnButton,
  SizedImage,
  SpacingDiv,
  EditableInput
} from '@/styles/Column.styles';
import CrosshairIcon from '@/assets/WhiteCrosshair.png';
import TrashBoxIcon from '@/assets/TrashBox.png';
import { TaskType } from '@/store/boardSlice';
import { useDispatch } from 'react-redux';
import { updateColumnTitle } from '@/store/boardSlice';

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

const Column: React.FC<ColumnProps> = ({
  column,
  removeColumn,
  isRemovable,
  openTaskForm
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(column.title);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTitleClick = () => {
    if (isRemovable) {
      setIsEditing(true);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (title.trim() && title !== column.title) {
      dispatch(updateColumnTitle({ columnId: column.id, newTitle: title }));
    } else {
      setTitle(column.title);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    } else if (e.key === 'Escape') {
      setTitle(column.title);
      setIsEditing(false);
    }
  };

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
          <ColumnTitle onClick={handleTitleClick} title="Click to edit">
            {column.title}
          </ColumnTitle>
        )}
      </SpacingDiv>

      <SpacingDiv>
        <SizedImage
          src={CrosshairIcon}
          alt="white crosshair icon"
          onClick={openTaskForm}
        />
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
