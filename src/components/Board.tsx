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
  TaskForm,
  TaskInput,
  TaskTextarea,
  SaveButton,
  PrioritySelect,
  ButtonsDiv,
  CancelButton
} from '@/styles/Board.styles';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.board.columns);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<
    'Low' | 'Medium' | 'High'
  >('Medium');
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);

  const handleAddTask = (columnId: string) => {
    if (!newTaskTitle.trim()) return;

    dispatch(
      addTask({
        columnId,
        task: {
          id: Date.now().toString(),
          title: newTaskTitle,
          description: newTaskDescription,
          priority: newTaskPriority
        }
      })
    );

    setNewTaskTitle('');
    setNewTaskDescription('');
    setNewTaskPriority('Medium');
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
            <TaskForm>
              <PrioritySelect
                value={newTaskPriority}
                onChange={(e) =>
                  setNewTaskPriority(
                    e.target.value as 'Low' | 'Medium' | 'High'
                  )
                }
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </PrioritySelect>
              <TaskInput
                type="text"
                placeholder="Task title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <TaskTextarea
                placeholder="Task description"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              />
              <ButtonsDiv>
                <SaveButton onClick={() => handleAddTask(column.id)}>
                  Save
                </SaveButton>
                <CancelButton onClick={() => setActiveColumnId(null)}>
                  Cancel
                </CancelButton>
              </ButtonsDiv>
            </TaskForm>
          ) : (
            <AddTaskButton onClick={() => setActiveColumnId(column.id)}>
              Add task...
            </AddTaskButton>
          )}
        </Card>
      ))}
    </BoardContainer>
  );
};

export default Board;
