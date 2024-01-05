import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Character } from '../../types/types';
import PopupContent from './PopupContent';
import SelectedOption from './SelectedOption';
import {
  handlePopup,
  handleQuery,
  handleSelect,
} from '../../utils/multiSelectFunctions';
import { useKeyboardHandler } from '../../utils/keyboardHandler';

const MultiSelect = ({ data }: { data: Character[] }) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Character[] | []>([]);
  const [selectedList, setSelectedList] = useState<Character[] | []>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  useKeyboardHandler(
    isOpen,
    setIsOpen,
    selectedList,
    selectRef,
    setHighlightedIndex,
    filteredData,
    setSelectedList,
    highlightedIndex
  );

  useEffect(() => {
    if (!query) {
      setFilteredData(data);
    }
  }, [query, data]);

  return (
    <div
      tabIndex={0}
      className="w-full max-w-xl border rounded-2xl min-h-12 relative flex"
      ref={selectRef}
    >
      <div className="flex gap-x-3 min-w-0 p-2 max-w-[200px] lg:max-w-[500px]">
        {selectedList.map((item: Character) => (
          <SelectedOption
            key={item.id}
            item={item}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
        ))}
      </div>

      <input
        type="text"
        className="flex-1 px-2 outline-none min-w-32 rounded-xl"
        onChange={(e) =>
          handleQuery(
            e,
            setIsLoading,
            setIsOpen,
            setQuery,
            data,
            setFilteredData,
            setHighlightedIndex
          )
        }
        placeholder="Select..."
      />

      <span
        className="flex items-center justify-center text-black/60 hover:text-black cursor-pointer px-2 transition"
        onClick={() => handlePopup(isOpen, setIsOpen, setHighlightedIndex)}
      >
        <ChevronDown
          className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </span>

      <PopupContent
        isOpen={isOpen}
        data={filteredData}
        isLoading={isLoading}
        handleSelect={(char: Character) =>
          handleSelect(char, selectedList, setSelectedList)
        }
        selectedList={selectedList}
        highlightedIndex={highlightedIndex}
      />
    </div>
  );
};

export default MultiSelect;
