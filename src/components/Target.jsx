import { Target as TargetIcon } from 'lucide-react';

const Target = ({ position, size, onClick }) => {
  return (
    <div
      className="absolute bg-gradient-to-br from-red-500 to-pink-600 rounded-full cursor-pointer transform transition-all hover:scale-110 active:scale-95 shadow-2xl z-10"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        transitionDuration: '150ms'
      }}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center">
        <TargetIcon className="text-white" size={size / 3} />
      </div>
      <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
    </div>
  );
};

export default Target;