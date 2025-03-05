import React from 'react';

import {
  EditButton,
  TaskContainer,
  TaskDescription,
  TaskPriority,
  TaskRemoveButton,
  TaskTitle
} from '@/components/Task/styled';
import TaskFormComponent from '@/components/TaskForm';
import { TEXTS } from '@/constants/texts';
import { useTaskDragDrop } from '@/hooks/useTaskDragDrop';
import { TaskType } from '@/store/boardSlice';

interface TaskProps {
  task: TaskType;
  columnId: string;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, columnId, index }) => {
  const {
    isEditing,
    isDraggingOver,
    taskRef,
    handleSave,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
    setIsEditing,
    handleEdit,
    handleRemove
  } = useTaskDragDrop({ task, columnId, index });

  return (
    <TaskContainer
      ref={taskRef}
      className="task-container"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, columnId)}
      onDragEnd={handleDragEnd}
      $isDraggingOver={isDraggingOver}
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
          <TaskPriority $priority={task.priority} title={TEXTS.clue.priority}>
            {task.priority}
          </TaskPriority>
          <TaskTitle title={TEXTS.clue.taskTitle}>{task.title}</TaskTitle>
          <TaskDescription title={TEXTS.clue.taskDescription}>
            {task.description}
          </TaskDescription>
          <EditButton title={TEXTS.clue.editTask} onClick={handleEdit}>
            ✎
          </EditButton>
          <TaskRemoveButton
            title={TEXTS.clue.removeTask}
            onClick={handleRemove}
          >
            ✖
          </TaskRemoveButton>
        </>
      )}
    </TaskContainer>
  );
};

export default Task;
