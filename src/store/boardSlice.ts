import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
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
    addColumn: (state, action: PayloadAction<ColumnType>) => {
      state.columns.push(action.payload);
    },
    removeColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
    }
  }
});

export const { addTask, addColumn, removeColumn } = boardSlice.actions;

export default boardSlice.reducer;
