import { useCallback } from 'react';

import * as S from '@/components/Task/styled';
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

  const handleDropCallback = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      handleDrop(e, columnId);
    },
    [handleDrop, columnId]
  );

  const handleCancelEdit = useCallback(
    () => setIsEditing(false),
    [setIsEditing]
  );

  return (
    <S.TaskContainer
      ref={taskRef}
      className="task-container"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDropCallback}
      onDragEnd={handleDragEnd}
      $isDraggingOver={isDraggingOver}
    >
      {isEditing ? (
        <TaskFormComponent
          columnId={columnId}
          onSave={handleSave}
          onCancel={handleCancelEdit}
          initialTitle={task.title}
          initialDescription={task.description}
          initialPriority={task.priority}
        />
      ) : (
        <>
          <S.TaskPriority $priority={task.priority} title={TEXTS.clue.priority}>
            {task.priority}
          </S.TaskPriority>
          <S.TaskTitle title={TEXTS.clue.taskTitle}>{task.title}</S.TaskTitle>
          <S.TaskDescription title={TEXTS.clue.taskDescription}>
            {task.description}
          </S.TaskDescription>
          <S.EditButton title={TEXTS.clue.editTask} onClick={handleEdit}>
            ✎
          </S.EditButton>
          <S.TaskRemoveButton
            title={TEXTS.clue.removeTask}
            onClick={handleRemove}
          >
            ✖
          </S.TaskRemoveButton>
        </>
      )}
    </S.TaskContainer>
  );
};

export default Task;
