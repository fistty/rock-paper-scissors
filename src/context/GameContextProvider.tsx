import {
	useState,
	useEffect,
	createContext,
	useContext,
	ReactElement,
} from "react";

type GameContextType = {
	gameScore: number;
	setGameScore: (value: number) => void;
	playerPick: boolean;
	setPlayerPick: (value: boolean) => void;
	playerPickString: string;
	setPlayerPickString: (value: string) => void;

	computerPick: boolean;
	setComputerPick: (value: boolean) => void;
};

export const initialGameContext: GameContextType = {
	gameScore: 0,
	setGameScore: () => {},
	playerPick: false,
	setPlayerPick: () => {},
	playerPickString: "",
	setPlayerPickString: () => {},
	computerPick: false,
	setComputerPick: () => {},
};

export const GameContext = createContext(initialGameContext);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export function GameContextProvider({ children }: ChildrenType) {
	const [gameScore, setGameScore] = useState<number>(0);
	const [playerPick, setPlayerPick] = useState(false);
	const [playerPickString, setPlayerPickString] = useState("");
	const [computerPick, setComputerPick] = useState(false);
	const [computerPickString, setComputerPickString] = useState("");

	useEffect(() => {
		const score: string = localStorage.getItem("score") || "0";
		setGameScore(parseInt(score));
	}, []);

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
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
