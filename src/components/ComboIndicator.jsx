const ComboIndicator = ({ multiplier }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
      <div className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-xl animate-pulse">
        COMBO x{multiplier}!
      </div>
    </div>
  );
};

export default ComboIndicator;