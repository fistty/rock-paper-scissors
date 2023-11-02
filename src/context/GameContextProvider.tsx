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
					setGameScore((prev) => prev + 1);
					setResultString("You win");
					break;
				case "Lose":
					setGameScore((prev) => prev - 1);
					setResultString("You lose");
					break;
				case "Draw":
					setResultString("You draw");
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
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
