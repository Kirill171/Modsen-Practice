import { useRef,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeTask, swapTasks,updateTask } from '@/store/boardSlice';
import { TaskType } from '@/store/boardSlice';
import { RootState } from '@/store/store';
import { Priority } from '@/types/priorityTypes';

interface UseTaskDragDropProps {
  task: TaskType;
  columnId: string;
  index: number;
}

interface UseTaskDragDropReturn {
  isEditing: boolean;
  isDraggingOver: boolean;
  taskRef: React.RefObject<HTMLDivElement | null>;
  handleSave: (
    columnId: string,
    taskData: { title: string; description: string; priority: Priority }
  ) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>, toColumnId: string) => void;
  handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  handleEdit: () => void;
  handleRemove: () => void;
}

export const useTaskDragDrop = ({
  task,
  columnId,
  index
}: UseTaskDragDropProps): UseTaskDragDropReturn => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.board.columns);
  const [isEditing, setIsEditing] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const taskRef = useRef<HTMLDivElement>(null);

  const handleSave = (
    columnId: string,
    taskData: { title: string; description: string; priority: Priority }
  ) => {
    dispatch(updateTask({ columnId, taskId: task.id, ...taskData }));
    setIsEditing(false);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.clearData();
    e.dataTransfer.setData('taskId', task.id);
    e.dataTransfer.setData('fromColumnId', columnId);
    e.dataTransfer.setData('fromIndex', index.toString());
    e.dataTransfer.setData('isColumnDrag', 'false');
    e.stopPropagation();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    toColumnId: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const taskId = e.dataTransfer.getData('taskId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');
    const fromIndex = parseInt(e.dataTransfer.getData('fromIndex'));
    const isColumnDrag = e.dataTransfer.getData('isColumnDrag');

    if (isColumnDrag === 'true') return;
    if (!taskId || !fromColumnId || taskId === task.id) return;

    const fromColumn = columns.find((col) => col?.id === fromColumnId);
    const toColumn = columns.find((col) => col?.id === toColumnId);
    if (!fromColumn || !toColumn) return;

    if (fromColumnId === toColumnId) {
      const toIndex = index;
      if (fromIndex === toIndex) return;

      dispatch(
        swapTasks({
          columnId: toColumnId,
          fromIndex,
          toIndex
        })
      );
    } else {
      return;
    }

    setIsDraggingOver(false);
    e.dataTransfer.clearData();
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingOver(false);
    e.dataTransfer.clearData();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleRemove = () => {
    dispatch(removeTask({ columnId, taskId: task.id }));
  };

  return {
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
  };
};
