import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
export default function GameResult() {
	return (
		<button className="game-card rock-card">
			<div className="game-card-image-container">
				<img src={rockIcon} alt="rock icon" />
			</div>
		</button>
	);
}
