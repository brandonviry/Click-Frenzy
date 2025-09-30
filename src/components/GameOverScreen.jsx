import { Award, Zap, Flame } from 'lucide-react';

const GameOverScreen = ({ score, highScore, maxStreak, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40">
      <div className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl p-8 text-center max-w-md mx-4">
        <h2 className="text-3xl font-bold text-white mb-4">Partie terminée!</h2>

        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Zap className="text-blue-400" size={24} />
            <p className="text-xl text-blue-200">Score: <span className="font-bold text-white">{score}</span></p>
          </div>

          {maxStreak > 0 && (
            <div className="flex items-center justify-center gap-3">
              <Flame className="text-orange-400" size={24} />
              <p className="text-xl text-orange-200">Meilleure série: <span className="font-bold text-white">{maxStreak}</span></p>
            </div>
          )}
        </div>

        {score === highScore && score > 0 && (
          <div className="mb-4 p-4 bg-yellow-500/20 rounded-lg border-2 border-yellow-400 animate-pulse">
            <Award className="text-yellow-400 mx-auto mb-2" size={32} />
            <p className="text-yellow-400 font-bold text-lg">🎉 Nouveau record! 🎉</p>
          </div>
        )}

        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105"
        >
          Rejouer
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;