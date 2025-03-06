import { useState, useCallback, useMemo } from 'react';

import PriorityDropdown from '@/components/PriorityDropdown';
import * as S from '@/components/TaskForm/styled';
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

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTaskData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handlePriorityChange = useCallback((priority: Priority) => {
    setTaskData((prev) => ({ ...prev, priority }));
  }, []);

  const handleSave = useCallback(() => {
    onSave(columnId, taskData);
  }, [onSave, columnId, taskData]);

  const memoizedTaskData = useMemo(() => taskData, [taskData]);

  return (
    <S.TaskFormView>
      <PriorityDropdown
        value={memoizedTaskData.priority}
        onChange={handlePriorityChange}
      />
      <S.TaskInput
        type="text"
        name="title"
        placeholder={TEXTS.clue.taskTitle}
        value={memoizedTaskData.title}
        onChange={handleInputChange}
      />
      <S.TaskTextarea
        name="description"
        placeholder={TEXTS.clue.taskDescription}
        value={memoizedTaskData.description}
        onChange={handleInputChange}
      />
      <S.ButtonsDiv>
        <S.SaveButton onClick={handleSave}>{TEXTS.buttons.save}</S.SaveButton>
        <S.CancelButton onClick={onCancel}>
          {TEXTS.buttons.cancel}
        </S.CancelButton>
      </S.ButtonsDiv>
    </S.TaskFormView>
  );
};

export default TaskForm;
