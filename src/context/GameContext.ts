import { createContext } from "react";

type GameContextType = {
	gameScore: number;
	setGameScore: React.Dispatch<React.SetStateAction<number>>;
	playerPick: boolean;
	setPlayerPick: React.Dispatch<React.SetStateAction<boolean>>;
	playerPickString: string;
	setPlayerPickString: React.Dispatch<React.SetStateAction<string>>;
	computerPick: boolean;
	setComputerPick: React.Dispatch<React.SetStateAction<boolean>>;
	computerPickString: string;
	setComputerPickString: React.Dispatch<React.SetStateAction<string>>;
	isCalculateWinner: boolean;
	setIsCalculateWinner: React.Dispatch<React.SetStateAction<boolean>>;
	resultString: string;
	setResultString: React.Dispatch<React.SetStateAction<string>>;
	isActiveFooterButtons: boolean;
	setIsActiveFooterButtons: React.Dispatch<React.SetStateAction<boolean>>;
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
	resultString: "",
	setResultString: () => {},
	isActiveFooterButtons: true,
	setIsActiveFooterButtons: () => {},
};

export const GameContext = createContext(initialGameContext);
