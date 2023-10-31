import { useRef } from "react";
import paperIcon from "../assets/icon-paper.svg";
import { PropTypes } from "../types";

export default function Paper({
	playerPick,
	setPlayerPick,
	isParagraph,
}: PropTypes) {
	const paperRef = useRef<HTMLButtonElement>(null);

	const cardSelection = () => {
		const cls = ["paper-card-transform", "picked-card"];
		paperRef.current?.classList.add(...cls);
		if (setPlayerPick) {
			setPlayerPick("Paper");
		}
	};

	return (
		<button
			className="game-card paper-card"
			disabled={playerPick === "" ? false : true}
			onClick={cardSelection}
			ref={paperRef}
		>
			<div className="game-card-image-container">
				<img src={paperIcon} alt="paper icon" />
			</div>
			{isParagraph && <span>You picked </span>}
		</button>
	);
}
