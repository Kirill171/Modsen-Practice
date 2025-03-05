import { useEffect,useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateColumnTitle } from '@/store/boardSlice';

interface UseEditableTitleProps {
  initialTitle: string;
  columnId: string;
  isRemovable: boolean;
}

interface UseEditableTitleReturn {
  isEditing: boolean;
  title: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleTitleClick: () => void;
  handleBlur: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const useEditableTitle = ({
  initialTitle,
  columnId,
  isRemovable
}: UseEditableTitleProps): UseEditableTitleReturn => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const handleTitleClick = () => {
    if (isRemovable) {
      setIsEditing(true);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (title.trim() && title !== initialTitle) {
      dispatch(updateColumnTitle({ columnId, newTitle: title }));
    } else {
      setTitle(initialTitle);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    } else if (e.key === 'Escape') {
      setTitle(initialTitle);
      setIsEditing(false);
    }
  };

  return {
    isEditing,
    title,
    inputRef,
    handleTitleClick,
    handleBlur,
    handleKeyDown,
    setTitle
  };
};
