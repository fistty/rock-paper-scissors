import { createContext } from "react";

type GameContextType = {
	gameScore: number;
	setGameScore: (value: number) => void;
	playerPick: boolean;
	setPlayerPick: (value: boolean) => void;
	playerPickString: string;
	setPlayerPickString: (value: string) => void;
	computerPick: boolean;
	setComputerPick: (value: boolean) => void;
	computerPickString: string;
	setComputerPickString: (value: string) => void;
	isCalculateWinner: boolean;
	setIsCalculateWinner: (value: boolean) => void;
};

const initialGameContext: GameContextType = {
	gameScore: 0,
	setGameScore: () => {},
	playerPick: false,
	setPlayerPick: () => {},
	playerPickString: "",
	setPlayerPickString: () => {},
	computerPick: false,
	setComputerPick: () => {},
	computerPickString: "",
	setComputerPickString: () => {},
	isCalculateWinner: false,
	setIsCalculateWinner: () => {},
};

export const GameContext = createContext(initialGameContext);
