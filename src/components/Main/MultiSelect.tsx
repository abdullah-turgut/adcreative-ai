import { ChevronDown } from 'lucide-react';
import PopupContent from './PopupContent';
import { useEffect, useState } from 'react';

import { Character } from '../../types/types';
import SelectedOption from './SelectedOption';

const MultiSelect = ({ data }: { data: Character[] }) => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Character[] | []>([]);
  const [selectedList, setSelectedList] = useState<Character[] | []>([]);

  useEffect(() => {
    if (!query) {
      setFilteredData(data);
    }
  }, [query, data]);

  function handlePopup() {
    setIsOpen(!isOpen);
  }

  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setIsLoading(true);

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
  }

  function handleSelect(char: Character) {
    if (selectedList.some((item: Character) => item.id === char.id)) {
      setSelectedList(
        selectedList.filter((item: Character) => item.id !== char.id)
      );
    } else {
      setSelectedList([...selectedList, char]);
    }
  }
  console.log(selectedList);
  return (
    <div
      tabIndex={0}
      className="w-full max-w-xl border rounded-2xl min-h-10 relative flex"
    >
      <div className="flex gap-x-3 min-w-0 p-2 max-w-[200px] lg:max-w-[500px]">
        {selectedList.map((item: Character) => (
          <SelectedOption key={item.id} item={item} />
        ))}
      </div>

      <input
        type="text"
        className="flex-1 px-2 outline-none min-w-32 rounded-xl"
        onChange={handleQuery}
        placeholder="Select..."
      />

      <span
        className="flex items-center justify-center text-black/60 hover:text-black cursor-pointer px-2 transition"
        onClick={handlePopup}
      >
        <ChevronDown
          className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </span>

      <PopupContent
        isOpen={isOpen}
        data={filteredData}
        isLoading={isLoading}
        handleSelect={handleSelect}
        selectedList={selectedList}
      />
    </div>
  );
};

export default MultiSelect;
