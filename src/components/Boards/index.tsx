import TaskFormComponent from '@components/TaskForm';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  AddTaskButton,
  AddTaskContainer,
  BoardContainer,
  Card
} from '@/components/Boards/styled';
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
    return <div>Loading...</div>;
  }

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Card
          key={column.id}
          ref={(el) => {
            if (el) cardRefs.current.set(column.id, el);
            else cardRefs.current.delete(column.id);
          }}
          draggable
          onDragStart={(e) => handleColumnDragStart(e, column.id)}
          onDragOver={handleColumnDragOver}
          onDrop={(e) => handleColumnDrop(e, column.id)}
        >
          <CardHeader
            column={column}
            removeColumn={() => dispatch(removeColumn(column.id))}
            isRemovable={!['todo', 'in-progress', 'done'].includes(column.id)}
            openTaskForm={() => setActiveColumnId(column.id)}
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
            <div>No tasks</div>
          )}
          {activeColumnId === column.id ? (
            <AddTaskContainer>
              <TaskFormComponent
                columnId={column.id}
                onSave={handleSaveTask}
                onCancel={() => setActiveColumnId(null)}
              />
            </AddTaskContainer>
          ) : (
            <AddTaskContainer>
              <AddTaskButton
                title={TEXTS.clue.addTask}
                color={column.color}
                onClick={() => setActiveColumnId(column.id)}
              >
                {TEXTS.buttons.add}
              </AddTaskButton>
            </AddTaskContainer>
          )}
        </Card>
      ))}
    </BoardContainer>
  );
};

export default Board;
