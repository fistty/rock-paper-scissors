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
	computerPick: boolean;
	setComputerPick: (value: boolean) => void;
};

const initialGameContext: GameContextType = {
	gameScore: 0,
	setGameScore: () => {},
	computerPick: false,
	setComputerPick: () => {},
};

const GameContext = createContext(initialGameContext);

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
				computerPick,
				setComputerPick,
			}}
		>
			{children}
		</GameContext.Provider>
	);
}

export const useGameContext = () => {
	return useContext(GameContext);
};

export default GameContext;
