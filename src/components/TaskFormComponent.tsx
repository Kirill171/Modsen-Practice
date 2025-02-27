import React, { useState } from 'react';

import PriorityDropdown from '@/components/PriorityDropdown';
import {
  ButtonsDiv,
  CancelButton,
  SaveButton,
  TaskForm,
  TaskInput,
  TaskTextarea} from '@/styles/TaskFormComponent.styles';
import { Priority } from '@/types/priorityTypes';

interface TaskFormProps {
  columnId: string;
  onSave: (
    columnId: string,
    taskData: { title: string; description: string; priority: Priority }
  ) => void;
  onCancel: () => void;
  initialTitle?: string;
  initialDescription?: string;
  initialPriority?: Priority;
  taskId?: string;
}

const TaskFormComponent: React.FC<TaskFormProps> = ({
  columnId,
  onSave,
  onCancel,
  initialTitle = '',
  initialDescription = '',
  initialPriority = null
}) => {
  const [taskData, setTaskData] = useState({
    title: initialTitle,
    description: initialDescription,
    priority: initialPriority
  });

  const handleChange = (
    field: keyof typeof taskData,
    value: string | Priority
  ) => {
    setTaskData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <TaskForm>
      <PriorityDropdown
        value={taskData.priority}
        onChange={(value) => handleChange('priority', value)}
      />
      <TaskInput
        type="text"
        placeholder="Task title"
        value={taskData.title}
        onChange={(e) => handleChange('title', e.target.value)}
      />
      <TaskTextarea
        placeholder="Task description"
        value={taskData.description}
        onChange={(e) => handleChange('description', e.target.value)}
      />
      <ButtonsDiv>
        <SaveButton onClick={() => onSave(columnId, taskData)}>Save</SaveButton>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </ButtonsDiv>
    </TaskForm>
  );
};

export default TaskFormComponent;
