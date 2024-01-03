type PopupContentProps = {
  isOpen: boolean;
};

const PopupContent = ({ isOpen }: PopupContentProps) => {
  return (
    <div
      className={`absolute bottom-0 left-0 border rounded-2xl translate-y-[103%] w-full max-h-96 min-h-80 flex flex-col overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    ></div>
  );
};

export default PopupContent;
