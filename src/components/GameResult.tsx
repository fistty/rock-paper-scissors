export interface PropTypes {
	setGameResultDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	gameComponentRef: React.MutableRefObject<HTMLElement | null>;
	setPlayerPick: React.Dispatch<React.SetStateAction<string>>;
	setIsComputerPick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameResult({
	setGameResultDisplay,
	gameComponentRef,
	setPlayerPick,
	setIsComputerPick,
}: PropTypes) {
	const handlePlayAgain = () => {
		const pickedCard: HTMLButtonElement | null =
			document.querySelector(".picked-card");
		setPlayerPick("");
		setIsComputerPick(false);
		setGameResultDisplay(false);
		const cls = ["main-game-transform", "main-game-no-background"];
		gameComponentRef.current?.classList.remove(...cls);
		const cls2 = [
			"rock-card-transform",
			"paper-card-transform",
			"scissors-card-transform",
			"picked-card",
		];
		pickedCard?.classList.remove(...cls2);
	};
	return (
		<div className="game-result">
			<div className="result-win-lose">
				<p>You win</p>
			</div>
			<div className="result-button-container">
				<button className="result-button" onClick={handlePlayAgain}>
					Play again
				</button>
			</div>
		</div>
	);
}
