import { useState, useEffect, ReactElement } from "react";
import { GameRules, winnerCalculator } from "../gameLogic";
import { GameContext } from "./GameContext";

type ChildrenType = { children?: ReactElement | ReactElement[] };

export function GameContextProvider({ children }: ChildrenType) {
	const [gameScore, setGameScore] = useState<number>(0);
	const [playerPick, setPlayerPick] = useState<boolean>(false);
	const [playerPickString, setPlayerPickString] = useState<string>("");
	const [computerPick, setComputerPick] = useState<boolean>(false);
	const [computerPickString, setComputerPickString] = useState<string>("");
	const [isCalculateWinner, setIsCalculateWinner] = useState<boolean>(false);
	const [resultString, setResultString] = useState<string>("");
	const [scoreReset, setScoreReset] = useState<boolean>(true);

	const handleScoreSave = (score: number) => {
		const scoreToString = score.toString();
		localStorage.setItem("score", scoreToString);
	};

	useEffect(() => {
		const score: string = localStorage.getItem("score") || "0";
		setGameScore(parseInt(score));
	}, []);

	useEffect(() => {
		if (isCalculateWinner) {
			const result = winnerCalculator(
				playerPickString as keyof GameRules,
				computerPickString
			);

			switch (result) {
				case "Win":
					setGameScore((prev) => {
						const temp = prev + 1;
						// Saves the score to the localStorage
						handleScoreSave(temp);
						return temp;
					});
					setResultString("You win");
					break;
				case "Lose":
					setGameScore((prev) => {
						const temp = prev - 1;
						// Saves the score to the localStorage
						handleScoreSave(temp);
						return temp;
					});
					setResultString("You lose");
					break;
				case "Draw":
					setResultString("draw");
					break;

				default:
					alert("Result not valid");
					throw new Error("Result not valid");
			}
		}
	}, [isCalculateWinner]);

	return (
		<GameContext.Provider
			value={{
				gameScore,
				setGameScore,
				playerPick,
				setPlayerPick,
				playerPickString,
				setPlayerPickString,
				computerPick,
				setComputerPick,
				computerPickString,
				setComputerPickString,
				isCalculateWinner,
				setIsCalculateWinner,
				resultString,
				setResultString,
				scoreReset,
				setScoreReset,
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
