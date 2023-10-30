export interface PropTypes {
	playerPick: string;
}

export default function GameResult() {
	const handlePlayAgain = (e: React.MouseEvent) => {
		console.log(e);
	};
	return (
		<div className="game-result">
			<div className="result-win-lose">
				<p>You win</p>
			</div>
			<div className="result-button-container">
				<button onClick={handlePlayAgain}>Play again</button>
			</div>
		</div>
	);
}
