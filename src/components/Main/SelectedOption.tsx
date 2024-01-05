import { X } from 'lucide-react';
import { Character } from '../../types/types';
import { handleSelect } from '../../utils/multiSelectFunctions';

type SelectedOptionProps = {
  item: Character;
  selectedList: Character[];
  setSelectedList: React.Dispatch<React.SetStateAction<Character[]>>;
};

const SelectedOption: React.FC<SelectedOptionProps> = ({
  item,
  selectedList,
  setSelectedList,
}) => {
  return (
    <div className="rounded-lg bg-gray-200 text-sm py-1 px-2 flex gap-x-1 items-center max-w-fit">
      <p className="line-clamp-1">{item.name}</p>
      <div
        className="bg-gray-400 p-1 hover:bg-gray-500 transition rounded-md"
        onClick={() => handleSelect(item, selectedList, setSelectedList)}
      >
        <X className="w-3 h-3 text-white" />
      </div>
    </div>
  );
};

export default SelectedOption;
