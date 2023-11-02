import { useGameContext } from "../hooks/useGameContext";

export interface PropTypes {
	setGameResultDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	gameComponentRef: React.MutableRefObject<HTMLElement | null>;
	setIsComputerPick: React.Dispatch<React.SetStateAction<boolean>>;
	setIsParagraph: React.Dispatch<React.SetStateAction<boolean>>;
	setComputerPickDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	resultString: string;
}

export default function GameResult({
	setGameResultDisplay,
	gameComponentRef,
	setIsComputerPick,
	setIsParagraph,
	setComputerPickDisplay,
	resultString,
}: PropTypes) {
	const { playerPick, setPlayerPick, setPlayerPickString } = useGameContext();

	const handlePlayAgain = () => {
		console.log(playerPick);

		setPlayerPick(false);

		const pickedCard = document.querySelector(".picked-card");

		//Removes the play again button
		setGameResultDisplay(false);

		//Removes the class from the user picked card
		const pickedCardClass = [
			"rock-card-transform",
			"paper-card-transform",
			"scissors-card-transform",
			"picked-card",
		];

		pickedCard?.classList.remove(...pickedCardClass);

		//Resets the UI to the beginning
		setPlayerPickString("");
		setIsParagraph(false);

		//Resets the computer state to the default
		setIsComputerPick(false);
		setComputerPickDisplay(false);
		const gameComponentClass = ["main-game-transform", "main-game-no-background"];
		gameComponentRef.current?.classList.remove(...gameComponentClass);
	};

	return (
		<div className="game-result">
			<div className="result-win-lose">
				<p>{resultString}</p>
			</div>
			<div className="result-button-container">
				<button className="result-button" onClick={handlePlayAgain}>
					Play again
				</button>
			</div>
		</div>
	);
}
