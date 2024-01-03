import { ChevronDown } from 'lucide-react';
import PopupContent from './PopupContent';
import { useState } from 'react';

const MultiSelect = () => {
  const [query, setQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  function handlePopup() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      tabIndex={0}
      className="w-full max-w-xl border rounded-2xl min-h-10 relative flex"
    >
      <div className="flex gap-x-3 min-w-0 p-2 max-w-[200px] lg:max-w-[500px]">
        <div className="w-20 h-full bg-blue-300 rounded-md">1</div>
        <div className="w-20 h-full bg-blue-300 rounded-md">1</div>
        <div className="w-20 h-full bg-blue-300 rounded-md">1</div>
        <div className="w-20 h-full bg-blue-300 rounded-md">1</div>
      </div>

      <input
        type="text"
        className="border flex-1 px-2 outline-none min-w-0 rounded-xl"
      />

      <span
        className="flex items-center justify-center text-black/60 hover:text-black cursor-pointer px-2 transition"
        onClick={handlePopup}
      >
        <ChevronDown
          className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </span>

      <PopupContent isOpen={isOpen} />
    </div>
  );
};

export default MultiSelect;
