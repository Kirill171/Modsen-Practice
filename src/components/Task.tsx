import React from 'react';
import { TaskType } from '@/store/boardSlice';
import {
  TaskContainer,
  TaskPriority,
  TaskTitle,
  TaskDescription
} from '@/styles/Task.styles';

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <TaskContainer>
      <TaskPriority>{task.priority}</TaskPriority>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskContainer>
  );
};

export default Task;
