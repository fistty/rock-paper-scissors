import { useGameContext } from "../context/hooks/useGameContext";

export interface PropTypes {
	setGameResultDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	gameComponentRef: React.MutableRefObject<HTMLElement | null>;
	setIsParagraph: React.Dispatch<React.SetStateAction<boolean>>;
	setComputerPickDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameResult({
	setGameResultDisplay,
	gameComponentRef,
	setIsParagraph,
	setComputerPickDisplay,
}: PropTypes) {
	const {
		setPlayerPick,
		setPlayerPickString,
		setComputerPick,
		setComputerPickString,
		setIsCalculateWinner,
		resultString,
		setResultString,
		setIsActiveFooterButtons,
	} = useGameContext();

	const handlePlayAgain = () => {
		gameComponentRef.current?.classList.remove("bigger-width");
		setPlayerPick(false);

		const pickedCard = document.querySelector(".picked-card");

		//Removes the class from the user picked card
		const pickedCardClass = [
			"rock-card-transform",
			"paper-card-transform",
			"scissors-card-transform",
			"picked-card",
		];

		pickedCard?.classList.remove(...pickedCardClass);

		//Removes the Play Again button
		setGameResultDisplay(false);

		//Resets the UI to the beginning
		setIsCalculateWinner(false);
		setPlayerPickString("");
		setIsParagraph(false);
		setResultString("");
		setIsActiveFooterButtons(true);

		//Resets the computer pick state to the default
		setComputerPick(false);
		setComputerPickString("");
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
