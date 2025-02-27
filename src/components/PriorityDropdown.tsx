import React, { useState } from 'react';

import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList
} from '@/styles/PriorityDropdown.styles';
import { priorities, Priority } from '@/types/priorityTypes';

interface Props {
  value: Priority;
  onChange: (priority: Priority) => void;
}

const PriorityDropdown: React.FC<Props> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)} $priority={value}>
        {value ?? 'Priotity'}
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {priorities.map((priority) => (
            <DropdownItem
              key={priority}
              onClick={() => {
                onChange(priority);
                setIsOpen(false);
              }}
            >
              {priority}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default PriorityDropdown;
