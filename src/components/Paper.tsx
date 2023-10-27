import paperIcon from "../assets/icon-paper.svg";

export default function Paper() {
	return (
		<button className="game-card paper-card">
			<div className="game-card-image-container">
				<img src={paperIcon} alt="paper icon" />
			</div>
		</button>
	);
}
