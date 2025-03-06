import { useState, useCallback } from 'react';

import * as S from '@/components/PriorityDropdown/styled';
import { priorities, Priority } from '@/types/priorityTypes';

interface Props {
  value: Priority;
  onChange: (priority: Priority) => void;
}

const PriorityDropdown: React.FC<Props> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelectPriority = useCallback(
    (priority: Priority) => () => {
      onChange(priority);
      setIsOpen(false);
    },
    [onChange]
  );

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown} $priority={value}>
        {value ?? 'Priority'}
      </S.DropdownButton>

      {isOpen && (
        <S.DropdownList>
          {priorities.map((priority) => (
            <S.DropdownItem
              key={priority}
              onClick={handleSelectPriority(priority)}
            >
              {priority}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default PriorityDropdown;
