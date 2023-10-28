export interface PropTypes {
	playerPick: string;
}

export default function GameResult() {
	return (
		<button className={`game-card computer-pick`}>
			<div className="game-card-image-container">
				<img src={""} alt="rock icon" />
			</div>
		</button>
	);
}
