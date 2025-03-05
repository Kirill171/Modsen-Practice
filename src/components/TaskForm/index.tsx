import React, { useState } from 'react';

import PriorityDropdown from '@/components/PriorityDropdown';
import {
  ButtonsDiv,
  CancelButton,
  SaveButton,
  TaskFormView,
  TaskInput,
  TaskTextarea
} from '@/components/TaskForm/styled';
import { TEXTS } from '@/constants/texts';
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

const TaskForm: React.FC<TaskFormProps> = ({
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
    <TaskFormView>
      <PriorityDropdown
        value={taskData.priority}
        onChange={(value) => handleChange('priority', value)}
      />
      <TaskInput
        type="text"
        placeholder={TEXTS.clue.taskTitle}
        value={taskData.title}
        onChange={(e) => handleChange('title', e.target.value)}
      />
      <TaskTextarea
        placeholder={TEXTS.clue.taskDescription}
        value={taskData.description}
        onChange={(e) => handleChange('description', e.target.value)}
      />
      <ButtonsDiv>
        <SaveButton onClick={() => onSave(columnId, taskData)}>
          {TEXTS.buttons.save}
        </SaveButton>
        <CancelButton onClick={onCancel}>{TEXTS.buttons.cancel}</CancelButton>
      </ButtonsDiv>
    </TaskFormView>
  );
};

export default TaskForm;
