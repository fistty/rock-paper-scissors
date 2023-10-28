import { useEffect, useState } from "react";
import paperIcon from "../assets/icon-paper.svg";
import { PropTypes } from "../typ";

export default function Paper({ playerPick, setPlayerPick }: PropTypes) {
	const [isParagraph, setIsParagraph] = useState(false);
	const cardSelection = () => {
		setPlayerPick("Paper");
	};

	useEffect(() => {
		if (playerPick) {
			const setParagraph = (playerPick: string) => {
				if (playerPick !== "") {
					console.log(897782);

					setTimeout(() => {
						setIsParagraph(true);
					}, 100);
				} else return false;
			};
			setParagraph(playerPick);
		}
	}, [isParagraph, playerPick]);

	return (
		<button className="game-card paper-card" onClick={cardSelection}>
			<div className="game-card-image-container">
				<img src={paperIcon} alt="paper icon" />
			</div>
			{isParagraph && <span>You picked THIS</span>}
		</button>
	);
}
