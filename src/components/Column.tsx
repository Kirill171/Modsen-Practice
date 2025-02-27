import React, { useRef,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TrashBoxIcon from '@/assets/TrashBox.png';
import CrosshairIcon from '@/assets/WhiteCrosshair.png';
import { moveTask, TaskType, updateColumnTitle } from '@/store/boardSlice';
import { RootState } from '@/store/store';
import {
  Circle,
  ColumnContainer,
  ColumnTitle,
  EditableInput,
  RemoveColumnButton,
  SizedImage,
  SpacingDiv} from '@/styles/Column.styles';

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
  const columns = useSelector((state: RootState) => state.board.columns);
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

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const taskId = event.dataTransfer.getData('taskId');
    const fromColumnId = event.dataTransfer.getData('fromColumnId');

    if (!taskId || !fromColumnId || fromColumnId === column.id) return;

    const fromColumn = columns.find((col) => col.id === fromColumnId);
    const toColumn = columns.find((col) => col.id === column.id);

    if (!fromColumn || !toColumn) return;

    const fromIndex = fromColumn.tasks.findIndex((task) => task.id === taskId);
    const toIndex = toColumn.tasks.length;

    if (fromIndex === -1) return;

    dispatch(
      moveTask({ fromColumnId, toColumnId: column.id, fromIndex, toIndex })
    );
  };

  return (
    <ColumnContainer
      color={column.color}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
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
          <ColumnTitle onClick={handleTitleClick} title="Click to edit Title">
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
