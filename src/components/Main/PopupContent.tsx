import { CheckSquare, Loader2, Square } from 'lucide-react';
import { Character } from '../../types/types';
// import { useState } from 'react';

type PopupContentProps = {
  isOpen: boolean;
  data: Character[];
  isLoading: boolean;
  handleSelect: (char: Character) => void;
  selectedList: Character[] | [];
};

const PopupContent = ({
  isOpen,
  data,
  isLoading,
  handleSelect,
  selectedList,
}: PopupContentProps) => {
  return (
    <div
      className={`absolute bottom-0 left-0 border rounded-2xl translate-y-[103%] w-full max-h-96 min-h-fit flex flex-col overflow-y-auto  ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      {isLoading ? (
        <div className="mx-auto p-5 flex flex-col space-y-2 items-center">
          <Loader2 className="animate-spin " />
          <p className="text-xs">Loading...</p>
        </div>
      ) : (
        data.map((char) => (
          <div
            key={char.id}
            className="px-5 py-2 border-b flex items-center space-x-3 hover:bg-neutral-50 cursor-pointer transition"
            onClick={() => handleSelect(char)}
          >
            {selectedList.some((item) => item.id === char.id) ? (
              <CheckSquare />
            ) : (
              <Square />
            )}

            <img
              src={char.image}
              className="h-12 max-w-12 rounded-xl text-xs"
              alt={char.name}
            />

            <div className="flex flex-col">
              <span>{char.name}</span>
              <span className="text-sm">{char.episode.length} Episodes</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PopupContent;
