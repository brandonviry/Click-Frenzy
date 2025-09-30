const StartScreen = ({ highScore, onStart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl p-8 text-center max-w-md mx-4">
        <h1 className="text-4xl font-bold text-white mb-4">Click Frenzy</h1>
        <p className="text-blue-200 mb-6">
          Cliquez le plus rapidement possible sur les cibles qui apparaissent!
        </p>
        <div className="space-y-2 mb-6">
          <p className="text-sm text-gray-300">• Chaque cible = 10 points</p>
          <p className="text-sm text-gray-300">• Combo de 5+ = multiplicateur</p>
          <p className="text-sm text-gray-300">• 30 secondes pour marquer!</p>
        </div>
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 text-lg"
        >
          Commencer
        </button>
        {highScore > 0 && (
          <p className="text-yellow-400 mt-4">Record: {highScore}</p>
        )}
      </div>
    </div>
  );
};

export default StartScreen;