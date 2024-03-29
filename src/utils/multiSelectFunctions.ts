import { Character } from '../types/types';

export const handlePopup = (
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  setIsOpen(!isOpen);
  setHighlightedIndex(0);
};

export const handleQuery = (
  e: React.ChangeEvent<HTMLInputElement>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  data: Character[],
  setFilteredData: React.Dispatch<React.SetStateAction<Character[]>>,
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  setIsLoading(true);
  setHighlightedIndex(0);
  const q = e.target.value.toLowerCase();

  setIsOpen(true);
  setQuery(q);
  const x = data.filter((char: Character) =>
    char.name.toLowerCase().includes(q)
  );
  setFilteredData(x);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);
};

export const handleSelect = (
  char: Character,
  selectedList: Character[],
  setSelectedList: React.Dispatch<React.SetStateAction<Character[]>>
) => {
  if (selectedList.some((item: Character) => item.id === char.id)) {
    setSelectedList(
      selectedList.filter((item: Character) => item.id !== char.id)
    );
  } else {
    setSelectedList([...selectedList, char]);
  }
};
