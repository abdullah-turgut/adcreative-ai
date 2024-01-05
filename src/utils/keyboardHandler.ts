import { Dispatch, SetStateAction, useEffect } from 'react';
import { Character } from '../types/types';

export const useKeyboardHandler = (
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  selectedList: Character[] | [],
  selectRef: React.RefObject<HTMLDivElement>,
  setHighlightedIndex: Dispatch<SetStateAction<number>>,
  filteredData: Character[] | [],
  setSelectedList: Dispatch<SetStateAction<Character[] | []>>,
  highlightedIndex: number
) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowDown':
        event.preventDefault();
        setIsOpen(true);
        setHighlightedIndex((preval) =>
          preval === filteredData.length - 1 ? 0 : preval + 1
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setIsOpen(true);
        setHighlightedIndex((preval) =>
          preval === 0 ? filteredData.length - 1 : preval - 1
        );
        break;
      case 'Enter':
        if (
          !selectedList.some(
            (item) => item.id === filteredData[highlightedIndex].id
          )
        ) {
          setSelectedList([
            ...selectedList,
            ...filteredData.filter((_, index) => index === highlightedIndex),
          ]);
        }

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
  }, [
    setIsOpen,
    selectedList,
    selectRef,
    setHighlightedIndex,
    setSelectedList,
    selectedList,
  ]);
};
