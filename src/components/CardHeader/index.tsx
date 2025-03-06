import { useCallback } from 'react';

import CrosshairIcon from '@/assets/WhiteCrosshair.png';
import * as S from '@/components/CardHeader/styled';
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

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    [setTitle]
  );

  return (
    <S.ColumnContainer color={column.color}>
      <S.SpacingDiv>
        <S.Circle color={column.color}>{column.tasks.length}</S.Circle>
        {isEditing ? (
          <S.EditableInput
            ref={inputRef}
            value={title}
            onChange={handleTitleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <S.ColumnTitle
            onClick={handleTitleClick}
            title={TEXTS.clue.editColumnTitle}
          >
            {title}
          </S.ColumnTitle>
        )}
      </S.SpacingDiv>

      <S.SpacingDiv>
        <S.SizedImage
          title={TEXTS.clue.addTask}
          src={CrosshairIcon}
          alt="Add column icon"
          onClick={openTaskForm}
        />
        {isRemovable && (
          <S.RemoveColumnButton
            title={TEXTS.clue.removeColumn}
            onClick={removeColumn}
          >
            ✖
          </S.RemoveColumnButton>
        )}
      </S.SpacingDiv>
    </S.ColumnContainer>
  );
};

export default CardHeader;
