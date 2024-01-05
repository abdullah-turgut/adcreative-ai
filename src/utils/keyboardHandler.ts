import { Dispatch, SetStateAction, useEffect } from 'react';
import { Character } from '../types/types';

export const useKeyboardHandler = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  selectedList: Character[] | [],
  selectRef: React.RefObject<HTMLDivElement>
) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowDown':
        setIsOpen((preval) => !preval);
        break;
      case 'ArrowUp':
        // Yukarı ok tuşuna basıldığında yapılacak işlemler
        break;
      case 'Enter':
        // Enter tuşuna basıldığında yapılacak işlemler
        break;
      case 'Escape':
        // Esc tuşuna basıldığında yapılacak işlemler
        break;
      default:
        // Diğer durumlar
        break;
    }
  };

  useEffect(() => {
    const currentRef = selectRef.current;

    if (currentRef) {
      currentRef.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [setIsOpen, selectedList, selectRef]);
};
