import rockIcon from "../assets/icon-rock.svg";

export default function Rock() {
	return (
		<button className="game-card rock-card">
			<div className="game-card-image-container">
				<img src={rockIcon} alt="rock icon" />
			</div>
		</button>
	);
}
