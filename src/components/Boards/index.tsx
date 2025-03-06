import TaskFormComponent from '@components/TaskForm';
import { useDispatch } from 'react-redux';

import * as S from '@/components/Boards/styled';
import CardHeader from '@/components/CardHeader';
import Task from '@/components/Task';
import { TEXTS } from '@/constants/texts';
import { useBoardDragDrop } from '@/hooks/useBoardDragDrop';
import { removeColumn } from '@/store/boardSlice';

const Board = () => {
  const dispatch = useDispatch();
  const {
    columns,
    cardRefs,
    activeColumnId,
    setActiveColumnId,
    handleSaveTask,
    handleColumnDragStart,
    handleColumnDragOver,
    handleColumnDrop
  } = useBoardDragDrop();

  if (!columns || !Array.isArray(columns)) {
    console.error('Columns is undefined or not an array:', columns);
    return <div>{TEXTS.errorMessage.loading}</div>;
  }

  const handleRemoveColumn = (columnId: string) => () => {
    dispatch(removeColumn(columnId));
  };

  const handleOpenTaskForm = (columnId: string) => () => {
    setActiveColumnId(columnId);
  };

  const handleCloseTaskForm = () => {
    setActiveColumnId(null);
  };

  const setCardRef = (columnId: string) => (el: HTMLDivElement | null) => {
    if (el) {
      cardRefs.current.set(columnId, el);
    } else {
      cardRefs.current.delete(columnId);
    }
  };

  return (
    <S.BoardContainer>
      {columns.map((column) => (
        <S.Card
          key={column.id}
          ref={setCardRef(column.id)}
          draggable
          onDragStart={(e) => handleColumnDragStart(e, column.id)}
          onDragOver={handleColumnDragOver}
          onDrop={(e) => handleColumnDrop(e, column.id)}
        >
          <CardHeader
            column={column}
            removeColumn={handleRemoveColumn(column.id)}
            isRemovable={!['todo', 'in-progress', 'done'].includes(column.id)}
            openTaskForm={handleOpenTaskForm(column.id)}
          />
          {column.tasks && Array.isArray(column.tasks) ? (
            column.tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                columnId={column.id}
                index={index}
              />
            ))
          ) : (
            <div>{TEXTS.errorMessage.empty}</div>
          )}
          {activeColumnId === column.id ? (
            <S.AddTaskContainer>
              <TaskFormComponent
                columnId={column.id}
                onSave={handleSaveTask}
                onCancel={handleCloseTaskForm}
              />
            </S.AddTaskContainer>
          ) : (
            <S.AddTaskContainer>
              <S.AddTaskButton
                title={TEXTS.clue.addTask}
                color={column.color}
                onClick={handleOpenTaskForm(column.id)}
              >
                {TEXTS.buttons.add}
              </S.AddTaskButton>
            </S.AddTaskContainer>
          )}
        </S.Card>
      ))}
    </S.BoardContainer>
  );
};

export default Board;
