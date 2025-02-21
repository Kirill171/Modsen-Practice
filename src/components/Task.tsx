import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { type TaskType, removeTask, updateTask } from '@/store/boardSlice';
import {
  TaskContainer,
  TaskPriority,
  TaskTitle,
  TaskDescription,
  TaskRemoveButton,
  EditableInput,
  EditableTextarea,
  PrioritySelect
} from '@/styles/Task.styles';

interface TaskProps {
  task: TaskType;
  columnId: string;
}

const Task: React.FC<TaskProps> = ({ task, columnId }) => {
  const dispatch = useDispatch();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingPriority, setIsEditingPriority] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);

  const handleSave = () => {
    dispatch(
      updateTask({ columnId, taskId: task.id, title, description, priority })
    );
  };

  const handleBlurTitle = () => {
    setIsEditingTitle(false);
    if (title.trim() !== task.title) handleSave();
  };

  const handleBlurDescription = () => {
    setIsEditingDescription(false);
    if (description.trim() !== task.description) handleSave();
  };

  const handleBlurPriority = () => {
    setIsEditingPriority(false);
    if (priority !== task.priority) handleSave();
  };

  return (
    <TaskContainer>
      {isEditingPriority ? (
        <PrioritySelect
          ref={priorityRef}
          value={priority}
          autoFocus
          onChange={(e) =>
            setPriority(e.target.value as 'Low' | 'Medium' | 'High')
          }
          onBlur={handleBlurPriority}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </PrioritySelect>
      ) : (
        <TaskPriority onClick={() => setIsEditingPriority(true)}>
          {priority}
        </TaskPriority>
      )}

      {isEditingTitle ? (
        <EditableInput
          ref={titleRef}
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlurTitle}
          onKeyDown={(e) => e.key === 'Enter' && handleBlurTitle()}
        />
      ) : (
        <TaskTitle
          onClick={() => setIsEditingTitle(true)}
          title="Click to edit"
        >
          {task.title}
        </TaskTitle>
      )}

      {isEditingDescription ? (
        <EditableTextarea
          ref={descriptionRef}
          value={description}
          autoFocus
          onChange={(e) => setDescription(e.target.value)}
          onBlur={handleBlurDescription}
          onKeyDown={(e) => e.key === 'Enter' && handleBlurDescription()}
        />
      ) : (
        <TaskDescription
          onClick={() => setIsEditingDescription(true)}
          title="Click to edit"
        >
          {task.description}
        </TaskDescription>
      )}

      <TaskRemoveButton
        onClick={() => dispatch(removeTask({ columnId, taskId: task.id }))}
      >
        ✖
      </TaskRemoveButton>
    </TaskContainer>
  );
};

export default Task;
