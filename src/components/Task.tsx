import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTask, type TaskType, updateTask } from '@/store/boardSlice';
import {
  EditButton,
  TaskContainer,
  TaskDescription,
  TaskPriority,
  TaskRemoveButton,
  TaskTitle} from '@/styles/Task.styles';
import { Priority } from '@/types/priorityTypes';

import TaskFormComponent from './TaskFormComponent';

interface TaskProps {
  task: TaskType;
  columnId: string;
}

const Task: React.FC<TaskProps> = ({ task, columnId }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (
    columnId: string,
    taskData: { title: string; description: string; priority: Priority }
  ) => {
    dispatch(updateTask({ columnId, taskId: task.id, ...taskData }));
    setIsEditing(false);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('taskId', task.id);
    event.dataTransfer.setData('fromColumnId', columnId);
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <TaskContainer
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {isEditing ? (
        <TaskFormComponent
          columnId={columnId}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          initialTitle={task.title}
          initialDescription={task.description}
          initialPriority={task.priority}
        />
      ) : (
        <>
          <TaskPriority $priority={task.priority} title="Priority">
            {task.priority}
          </TaskPriority>
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDescription>{task.description}</TaskDescription>
          <EditButton title="Edit task" onClick={() => setIsEditing(true)}>
            ✎
          </EditButton>
          <TaskRemoveButton
            title="Remove task"
            onClick={() => dispatch(removeTask({ columnId, taskId: task.id }))}
          >
            ✖
          </TaskRemoveButton>
        </>
      )}
    </TaskContainer>
  );
};

export default Task;
