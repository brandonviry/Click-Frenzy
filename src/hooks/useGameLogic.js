import { useState, useEffect, useCallback } from 'react';
import { soundGenerator } from '../utils/sounds';

export const useGameLogic = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('clickFrenzyHighScore') || '0');
  });
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [targetSize, setTargetSize] = useState(96); // Taille initiale (w-24 = 96px)
  const [clicks, setClicks] = useState([]);
  const [combo, setCombo] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [particles, setParticles] = useState([]);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  // Générer une position aléatoire pour la cible
  const generateTargetPosition = useCallback(() => {
    const maxX = window.innerWidth - targetSize;
    const maxY = window.innerHeight - 200;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY) + 100
    };
  }, [targetSize]);

  // Démarrer le jeu
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setCombo(0);
    setMultiplier(1);
    setTargetSize(96);
    setStreak(0);
    setTargetPosition(generateTargetPosition());
  };

  // Cliquer sur la cible
  const handleTargetClick = (e) => {
    if (!gameActive) return;

    const points = 10 * multiplier;
    const newScore = score + points;
    const newCombo = combo + 1;
    const newStreak = streak + 1;

    setScore(newScore);
    setCombo(newCombo);
    setStreak(newStreak);

    if (newStreak > maxStreak) {
      setMaxStreak(newStreak);
    }

    // Sons
    soundGenerator.playClick(multiplier);
    if (newCombo % 5 === 0) {
      soundGenerator.playCombo(newCombo);
    }

    // Vibration mobile
    if (navigator.vibrate) {
      navigator.vibrate(newCombo % 5 === 0 ? [50, 50, 50] : 30);
    }

    // Ajouter un effet de clic
    const newClick = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      points
    };
    setClicks(prev => [...prev, newClick]);

    // Créer des particules
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      x: e.clientX,
      y: e.clientY
    }));
    setParticles(prev => [...prev, ...newParticles]);

    // Supprimer l'effet après 1 seconde
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== newClick.id));
    }, 1000);

    // Augmenter le multiplicateur avec le combo
    if (newCombo > 0 && newCombo % 5 === 0) {
      setMultiplier(prev => Math.min(prev + 0.5, 5));
    }

    // Difficulté progressive : réduire la taille de la cible
    if (newCombo > 5) {
      setTargetSize(prev => Math.max(prev - 2, 48)); // Minimum 48px
    }

    // Nouvelle position de la cible
    setTargetPosition(generateTargetPosition());
  };

  // Supprimer une particule
  const removeParticle = useCallback((id) => {
    setParticles(prev => prev.filter(p => p.id !== id));
  }, []);

  // Timer du jeu
  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameActive) {
      setGameActive(false);

      // Nouveau record
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('clickFrenzyHighScore', score.toString());
        soundGenerator.playNewRecord();
      } else {
        soundGenerator.playGameOver();
      }
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft, score, highScore]);

  // Effet de combo
  useEffect(() => {
    if (combo > 0) {
      const comboTimer = setTimeout(() => {
        setCombo(0);
        setMultiplier(1);
        setStreak(0);
        setTargetSize(96); // Reset la taille
      }, 3000);
      return () => clearTimeout(comboTimer);
    }
  }, [combo]);

  return {
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
  };
};