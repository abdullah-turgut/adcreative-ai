import { Dispatch, SetStateAction, useEffect } from 'react';
import { Character } from '../types/types';

export const useKeyboardHandler = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  selectedList: Character[] | [],
  selectRef: React.RefObject<HTMLDivElement>,
  setHighlightedIndex: Dispatch<SetStateAction<number>>,
  filteredData: Character[] | [],
  setSelectedList: Dispatch<SetStateAction<Character[] | []>>,
  highlightedIndex: number
) => {
  useEffect(() => {
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
          event.preventDefault();
          const currentIndex = highlightedIndex; // eslint-disable-line
          if (
            !selectedList.some(
              (item) => item.id === filteredData[currentIndex].id
            )
          ) {
            setSelectedList([
              ...selectedList,
              ...filteredData.filter((_, index) => index === currentIndex),
            ]);
          }
          break;
        case 'Delete':
          event.preventDefault();
          const currentItem = filteredData[highlightedIndex]; // eslint-disable-line
          setSelectedList((prevList) =>
            prevList.filter((item) => item.id !== currentItem.id)
          );
          break;
        case 'Escape':
          setIsOpen(false);
          break;
        default:
          // Diğer durumlar
          break;
      }
    };

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
    filteredData,
    highlightedIndex,
  ]);
};
