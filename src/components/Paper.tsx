import { useRef } from "react";
import paperIcon from "../assets/icon-paper.svg";
import { PropTypes } from "../types";
import { useGameContext } from "../hooks/useGameContext";

export default function Paper({ isParagraph }: PropTypes) {
	const paperRef = useRef<HTMLButtonElement>(null);

	const { playerPick, setPlayerPick, setPlayerPickString } = useGameContext();

	const cardSelection = () => {
		setPlayerPick(true);
		setPlayerPickString("Paper");
		console.log("WHYY");

		const cls = ["paper-card-transform", "picked-card"];
		paperRef.current?.classList.add(...cls);
	};

	return (
		<button
			className="game-card paper-card"
			disabled={playerPick ? true : false}
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
