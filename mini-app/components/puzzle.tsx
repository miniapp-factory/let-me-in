"use client";

import { useState } from "react";

export function Puzzle() {
  const [step, setStep] = useState(0);
  const [won, setWon] = useState(false);

  const choices = [
    { id: 1, text: "Enter the left corridor" },
    { id: 2, text: "Take the right tunnel" },
    { id: 3, text: "Follow the glowing path" },
    { id: 4, text: "Ignore the sound and walk straight" },
    { id: 5, text: "Sit down and wait" },
  ];

  const correctChoice = 3; // The path that leads to victory

  const handleChoice = (id: number) => {
    if (id === correctChoice) {
      setWon(true);
    } else {
      setStep(0); // reset to start
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <h2 className="text-xl font-semibold">Maze Puzzle</h2>
      {won ? (
        <div className="flex flex-col items-center gap-2">
          <p className="text-green-600 font-bold">You escaped the maze! 🎉</p>
          <audio controls autoPlay>
            <source src="/victory.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground">
            Choose a path to proceed. If you pick the wrong one, you will start over.
          </p>
          {choices.map((choice) => (
            <button
              key={choice.id}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => handleChoice(choice.id)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
