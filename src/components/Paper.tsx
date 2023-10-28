import paperIcon from "../assets/icon-paper.svg";
import { PropTypes } from "../types";

export default function Paper({ setPlayerPick }: PropTypes) {
	const cardSelection = () => {
		setPlayerPick("Paper");
	};
	return (
		<button className="game-card paper-card" onClick={cardSelection}>
			<div className="game-card-image-container">
				<img src={paperIcon} alt="paper icon" />
			</div>
		</button>
	);
}
