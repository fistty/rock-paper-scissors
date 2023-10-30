export interface PropTypes {
	playerPick: string;
}

export default function GameResult() {
	return (
		<div className="game-result">
			<div className="result-win-lose">
				<p>You win</p>
			</div>
			<div className="result-button-container">
				<button>Play again</button>
			</div>
		</div>
	);
}
