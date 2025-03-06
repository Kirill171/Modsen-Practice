import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask, moveColumn, moveTask } from '@/store/boardSlice';
import { RootState } from '@/store/store';
import { Priority } from '@/types/priorityTypes';

interface UseBoardDragDropReturn {
  columns: ReturnType<
    typeof useSelector<RootState, RootState['board']['columns']>
  >;
  cardRefs: React.RefObject<Map<string, HTMLDivElement>>;
  activeColumnId: string | null;
  setActiveColumnId: React.Dispatch<React.SetStateAction<string | null>>;
  handleSaveTask: (
    columnId: string,
    taskData: { title: string; description: string; priority: Priority }
  ) => void;
  handleColumnDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    columnId: string
  ) => void;
  handleColumnDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleColumnDrop: (
    e: React.DragEvent<HTMLDivElement>,
    columnId: string
  ) => void;
}

export const useBoardDragDrop = (): UseBoardDragDropReturn => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.board.columns);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const handleSaveTask = (
    columnId: string,
    taskData: { title: string; description: string; priority: Priority }
  ) => {
    if (!taskData.title.trim()) return;

    dispatch(
      addTask({
        columnId,
        task: { id: Date.now().toString(), ...taskData }
      })
    );
    setActiveColumnId(null);
  };

  const handleColumnDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    columnId: string
  ) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.className.includes('task-container')
    ) {
      return;
    }

    e.dataTransfer.clearData();
    e.dataTransfer.setData('columnId', columnId);
    e.dataTransfer.setData(
      'fromIndex',
      columns.findIndex((col) => col.id === columnId).toString()
    );
    e.dataTransfer.setData('isColumnDrag', 'true');
  };

  const handleColumnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleColumnDrop = (
    e: React.DragEvent<HTMLDivElement>,
    columnId: string
  ) => {
    e.preventDefault();

    const draggedColumnId = e.dataTransfer.getData('columnId');
    const isColumnDrag = e.dataTransfer.getData('isColumnDrag');
    const taskId = e.dataTransfer.getData('taskId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');
    const fromIndex = parseInt(e.dataTransfer.getData('fromIndex'));

    const toColumn = columns.find((col) => col.id === columnId);
    if (!toColumn) return;

    if (draggedColumnId && isColumnDrag === 'true') {
      const toIndex = columns.findIndex((col) => col.id === columnId);
      if (fromIndex === toIndex) return;

      dispatch(
        moveColumn({
          fromIndex,
          toIndex
        })
      );
    } else if (taskId && fromColumnId && fromColumnId !== columnId) {
      const cardRef = cardRefs.current.get(columnId);
      if (!cardRef) return;

      const tasks = toColumn.tasks;
      const cardRect = cardRef.getBoundingClientRect();
      const cursorY = e.clientY - cardRect.top;
      let toIndex = tasks.length;

      const taskElements = cardRef.querySelectorAll('.task-container');
      for (let i = 0; i < taskElements.length; i++) {
        const taskElement = taskElements[i] as HTMLElement;
        const rect = taskElement.getBoundingClientRect();
        const taskTop = rect.top - cardRect.top;
        const taskBottom = rect.bottom - cardRect.top;
        const gap = 16;

        if (cursorY < taskTop + rect.height / 2) {
          toIndex = i;
          break;
        } else if (cursorY >= taskBottom && cursorY < taskBottom + gap) {
          toIndex = i + 1;
          break;
        }
      }

      dispatch(
        moveTask({
          fromColumnId,
          toColumnId: columnId,
          fromIndex,
          toIndex
        })
      );
    }

    e.dataTransfer.clearData();
  };

  return {
    columns,
    cardRefs,
    activeColumnId,
    setActiveColumnId,
    handleSaveTask,
    handleColumnDragStart,
    handleColumnDragOver,
    handleColumnDrop
  };
};
