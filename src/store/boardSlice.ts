import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Priority } from '@/types/priorityTypes';

export type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
};

export type ColumnType = {
  id: string;
  title: string;
  color: string;
  tasks: TaskType[];
};

type BoardState = {
  columns: ColumnType[];
};

const defaultColumns: ColumnType[] = [
  { id: 'todo', title: 'To Do', color: '#5A55FF', tasks: [] },
  { id: 'in-progress', title: 'In Progress', color: '#F5A623', tasks: [] },
  { id: 'done', title: 'Done', color: '#4CAF50', tasks: [] }
];

const loadState = (): BoardState => {
  try {
    const savedState = localStorage.getItem('board');
    return savedState ? JSON.parse(savedState) : { columns: defaultColumns };
  } catch {
    return { columns: defaultColumns };
  }
};

const initialState: BoardState = loadState();

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ columnId: string; task: TaskType }>
    ) => {
      const column = state.columns.find(
        (col) => col.id === action.payload.columnId
      );
      if (column) {
        column.tasks.push(action.payload.task);
      }
    },
    updateTask: (
      state,
      action: PayloadAction<{
        columnId: string;
        taskId: string;
        title: string;
        description: string;
        priority: Priority;
      }>
    ) => {
      const column = state.columns.find(
        (col) => col.id === action.payload.columnId
      );
      if (column) {
        const task = column.tasks.find(
          (task) => task.id === action.payload.taskId
        );
        if (task) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.priority = action.payload.priority;
        }
      }
    },
    removeTask: (
      state,
      action: PayloadAction<{ columnId: string; taskId: string }>
    ) => {
      const column = state.columns.find(
        (col) => col.id === action.payload.columnId
      );
      if (column) {
        column.tasks = column.tasks.filter(
          (task) => task.id !== action.payload.taskId
        );
      }
    },
    addColumn: (state, action: PayloadAction<ColumnType>) => {
      state.columns.push(action.payload);
    },
    updateColumnTitle: (
      state,
      action: PayloadAction<{ columnId: string; newTitle: string }>
    ) => {
      const column = state.columns.find(
        (col) => col.id === action.payload.columnId
      );
      if (column && !['To Do', 'In Progress', 'Done'].includes(column.title)) {
        column.title = action.payload.newTitle;
      }
    },
    removeColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
    },
    moveTask: (
      state,
      action: PayloadAction<{
        fromColumnId: string;
        toColumnId: string;
        fromIndex: number;
        toIndex: number;
      }>
    ) => {
      const { fromColumnId, toColumnId, fromIndex, toIndex } = action.payload;
      const sourceColumn = state.columns.find((col) => col.id === fromColumnId);
      const destinationColumn = state.columns.find(
        (col) => col.id === toColumnId
      );

      if (!sourceColumn || !destinationColumn) return;

      const [movedTask] = sourceColumn.tasks.splice(fromIndex, 1);
      destinationColumn.tasks.splice(toIndex, 0, movedTask);
    }
  }
});

export const {
  addTask,
  updateTask,
  removeTask,
  addColumn,
  updateColumnTitle,
  removeColumn,
  moveTask
} = boardSlice.actions;

export default boardSlice.reducer;
