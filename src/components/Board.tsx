import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { removeColumn } from '@/store/boardSlice';
import Column from '@/components/Column';
import { BoardContainer, Card } from '@/styles/Board.styles';
import Task from '@/components/Task';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.board.columns);

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Card key={column.id}>
          <Column
            column={column}
            removeColumn={() => dispatch(removeColumn(column.id))}
            isRemovable={!['todo', 'in-progress', 'done'].includes(column.id)}
          />
          {column.tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </Card>
      ))}
    </BoardContainer>
  );
};

export default Board;
