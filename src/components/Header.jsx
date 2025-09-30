import { Trophy, Zap, Heart, Flame } from 'lucide-react';

const Header = ({ highScore, score, timeLeft, streak }) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
          <Trophy className="text-yellow-400" size={18} />
          <span className="text-white font-bold text-base">{highScore}</span>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
          <Zap className="text-blue-400" size={18} />
          <span className="text-white font-bold text-base">{score}</span>
        </div>
        {streak > 0 && (
          <div className="bg-orange-500/30 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1 animate-pulse">
            <Flame className="text-orange-400" size={18} />
            <span className="text-white font-bold text-base">{streak}</span>
          </div>
        )}
      </div>

      <div className={`backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1 ${
        timeLeft <= 5 ? 'bg-red-500/40 animate-pulse' : 'bg-white/20'
      }`}>
        <Heart className="text-red-400" size={18} />
        <span className="text-white font-bold text-base">{timeLeft}s</span>
      </div>
    </div>
  );
};

export default Header;