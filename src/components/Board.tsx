import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { removeColumn, addTask } from '@/store/boardSlice';
import Column from '@/components/Column';
import Task from '@/components/Task';
import {
  BoardContainer,
  Card,
  AddTaskButton,
  AddTaskContainer
} from '@/styles/Board.styles';
import { Priority } from '@/types/priorityTypes';
import TaskFormComponent from './TaskFormComponent';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.board.columns);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);

  const handleSaveTask = (
    columnId: string,
    taskData: { title: string; description: string; priority: Priority }
  ) => {
    if (!taskData.title.trim()) return;

    dispatch(
      addTask({
        columnId,
        task: { id: Date.now().toString(), ...taskData }
      })
    );

    setActiveColumnId(null);
  };

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Card key={column.id}>
          <Column
            column={column}
            removeColumn={() => dispatch(removeColumn(column.id))}
            isRemovable={!['todo', 'in-progress', 'done'].includes(column.id)}
            openTaskForm={() => setActiveColumnId(column.id)}
          />
          {column.tasks.map((task) => (
            <Task key={task.id} task={task} columnId={column.id} />
          ))}

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
                color={column.color}
                onClick={() => setActiveColumnId(column.id)}
              >
                Add task...
              </AddTaskButton>
            </AddTaskContainer>
          )}
        </Card>
      ))}
    </BoardContainer>
  );
};

export default Board;
