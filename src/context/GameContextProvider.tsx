import { useState, useEffect, createContext, ReactElement } from "react";
import { GameRules, winnerCalculator } from "../gameLogic";
import { GameContext } from "./GameContext";

type ChildrenType = { children?: ReactElement | ReactElement[] };

export function GameContextProvider({ children }: ChildrenType) {
	const [gameScore, setGameScore] = useState<number>(0);
	const [playerPick, setPlayerPick] = useState(false);
	const [playerPickString, setPlayerPickString] = useState("");
	const [computerPick, setComputerPick] = useState(false);
	const [computerPickString, setComputerPickString] = useState("");
	const [isCalculateWinner, setIsCalculateWinner] = useState(false);

	useEffect(() => {
		const score: string = localStorage.getItem("score") || "0";
		setGameScore(parseInt(score));
	}, []);

	useEffect(() => {
		if (isCalculateWinner) {
			winnerCalculator(playerPickString as keyof GameRules, computerPickString);
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
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
