import { useState } from 'react';
import GameStats from '../components/GameStats';
import MoveButton from '../components/MoveButton';
import GameResult from '../components/GameResult';

type Move = 'rock' | 'paper' | 'scissors';

const Index = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userMove, setUserMove] = useState<Move | null>(null);
  const [computerMove, setComputerMove] = useState<Move | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const moves: { move: Move; emoji: string }[] = [
    { move: 'rock', emoji: '🪨' },
    { move: 'paper', emoji: '📄' },
    { move: 'scissors', emoji: '✂️' }
  ];

  const playGame = (playerMove: Move) => {
    setIsPlaying(true);
    setUserMove(playerMove);
    
    const allMoves: Move[] = ['rock', 'paper', 'scissors'];
    const compMove = allMoves[Math.floor(Math.random() * allMoves.length)];
    setComputerMove(compMove);

    // Funny comments for different scenarios
    let gameResult: string;
    if (playerMove === compMove) {
      const tieComments = [
        "Great minds think alike! 🧠🎩",
        "Wow, we're telepathically connected! 🔮",
        "Copy cat! Did you read my mind? 😏",
        "Jinx! You owe me a soda! 🥤"
      ];
      gameResult = tieComments[Math.floor(Math.random() * tieComments.length)];
    } else if (playerMove === "rock") {
      if (compMove === "paper") {
        const loseComments = [
          "Paper beats rock! I'm wrapping you up like a burrito! 🌯",
          "Your rock got buried under my paperwork! 📋",
          "I just gift-wrapped your defeat! 🎁"
        ];
        gameResult = loseComments[Math.floor(Math.random() * loseComments.length)];
        setComputerScore(prev => prev + 1);
      } else {
        const winComments = [
          "Rock smashes scissors! You're absolutely crushing it! 💪",
          "BOOM! Your rock just demolished my scissors! 💥",
          "Rock solid victory! You're harder than a diamond! 💎"
        ];
        gameResult = winComments[Math.floor(Math.random() * winComments.length)];
        setUserScore(prev => prev + 1);
      }
    } else if (playerMove === "paper") {
      if (compMove === "scissors") {
        const loseComments = [
          "Snip snap! My scissors just gave your paper a haircut! ✂️",
          "Your paper got shredded! Time to recycle! ♻️",
          "I just turned your masterpiece into confetti! 🎊"
        ];
        gameResult = loseComments[Math.floor(Math.random() * loseComments.length)];
        setComputerScore(prev => prev + 1);
      } else {
        const winComments = [
          "Paper covers rock! You just smothered my hopes and dreams! 😱",
          "Your paper is mightier than my rock! Newspaper headlines tomorrow! 📰",
          "Rock got papered! You're the wrapper champion! 🏆"
        ];
        gameResult = winComments[Math.floor(Math.random() * winComments.length)];
        setUserScore(prev => prev + 1);
      }
    } else if (playerMove === "scissors") {
      if (compMove === "rock") {
        const loseComments = [
          "Rock crushes scissors! Your blades just met their match! 🔨",
          "Ouch! My rock just dulled your scissors permanently! 😵",
          "Your scissors are now modern art - completely abstract! 🎨"
        ];
        gameResult = loseComments[Math.floor(Math.random() * loseComments.length)];
        setComputerScore(prev => prev + 1);
      } else {
        const winComments = [
          "Scissors cut paper! You just crafted a victory! ✨",
          "Snip snip hooray! You're the cutting-edge champion! 🏅",
          "Your scissors are sharper than my wit! Paper shredded! 📃"
        ];
        gameResult = winComments[Math.floor(Math.random() * winComments.length)];
        setUserScore(prev => prev + 1);
      }
    } else {
      gameResult = "Something went wrong! The universe is glitching! 🌌";
    }

    setResult(gameResult);
  };

  // ... keep existing code (resetGame, resetScores functions and return JSX)
  const resetGame = () => {
    setUserMove(null);
    setComputerMove(null);
    setResult(null);
    setIsPlaying(false);
  };

  const resetScores = () => {
    setUserScore(0);
    setComputerScore(0);
    resetGame();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🎮 Rock Paper Scissors
          </h1>
          <p className="text-xl text-gray-600">
            Choose your move and challenge the computer!
          </p>
        </div>

        <GameStats userScore={userScore} computerScore={computerScore} />

        {result ? (
          <GameResult
            userMove={userMove!}
            computerMove={computerMove!}
            result={result}
            onPlayAgain={resetGame}
          />
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Choose Your Move
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moves.map(({ move, emoji }) => (
                <MoveButton
                  key={move}
                  move={move}
                  emoji={emoji}
                  onClick={() => playGame(move)}
                  disabled={isPlaying}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <button
            onClick={resetScores}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Reset Scores
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
