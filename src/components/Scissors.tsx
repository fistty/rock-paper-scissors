import scissorsIcon from "../assets/icon-scissors.svg";

export default function Scissors() {
	return (
		<button className="game-card scissors-card">
			<div className="game-card-image-container">
				<img src={scissorsIcon} alt="scissors icon" />
			</div>
		</button>
	);
}
