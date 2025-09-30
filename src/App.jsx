import React from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import Header from './components/Header';
import Target from './components/Target';
import ClickEffect from './components/ClickEffect';
import ComboIndicator from './components/ComboIndicator';
import GameOverScreen from './components/GameOverScreen';
import StartScreen from './components/StartScreen';
import Instructions from './components/Instructions';
import Particle from './components/Particle';

const App = () => {
  const {
    score,
    highScore,
    timeLeft,
    gameActive,
    targetPosition,
    targetSize,
    clicks,
    combo,
    multiplier,
    particles,
    streak,
    maxStreak,
    startGame,
    handleTargetClick,
    removeParticle
  } = useGameLogic();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* Effets de clic */}
      {clicks.map(click => (
        <ClickEffect key={click.id} click={click} />
      ))}

      {/* Particules */}
      {particles.map(particle => (
        <Particle
          key={particle.id}
          id={particle.id}
          x={particle.x}
          y={particle.y}
          onComplete={removeParticle}
        />
      ))}

      {/* Interface du jeu */}
      <div className="relative z-10 p-6">
        <Header
          highScore={highScore}
          score={score}
          timeLeft={timeLeft}
          streak={streak}
        />

        {/* Combo indicator */}
        {combo > 0 && <ComboIndicator multiplier={multiplier} />}

        {/* Cible */}
        {gameActive && (
          <Target
            position={targetPosition}
            size={targetSize}
            onClick={handleTargetClick}
          />
        )}

        {/* Écran de fin de jeu */}
        {!gameActive && timeLeft === 0 && (
          <GameOverScreen
            score={score}
            highScore={highScore}
            maxStreak={maxStreak}
            onRestart={startGame}
          />
        )}

        {/* Écran de démarrage */}
        {!gameActive && timeLeft === 30 && (
          <StartScreen highScore={highScore} onStart={startGame} />
        )}
      </div>

      {/* Instructions */}
      <Instructions />
    </div>
  );
};

export default App;