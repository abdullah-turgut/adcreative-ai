import { X } from 'lucide-react';
import { Character } from '../../types/types';

const SelectedOption = ({ item }: { item: Character }) => {
  return (
    <div className="rounded-lg bg-gray-200 text-sm py-1 px-2 flex gap-x-1 items-center max-w-fit line-clamp-1">
      {item.name}
      <div className="bg-gray-400 p-1 hover:bg-gray-500 transition rounded-md">
        <X className="w-3 h-3 text-white" />
      </div>
    </div>
  );
};

export default SelectedOption;
