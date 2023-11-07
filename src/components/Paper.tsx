import { useRef } from "react";
import { GameCardPropTypes } from "../types";
import { useGameContext } from "../hooks/useGameContext";
import paperIcon from "../assets/icon-paper.svg";

export default function Paper({ isParagraph }: GameCardPropTypes) {
	const paperRef = useRef<HTMLButtonElement>(null);

	const {
		playerPick,
		setPlayerPick,
		setPlayerPickString,
		setIsActiveFooterButtons,
	} = useGameContext();

	const cardSelection = () => {
		setIsActiveFooterButtons(false);
		setPlayerPick(true);
		setPlayerPickString("Paper");

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
				<img src={paperIcon} alt="paper icon" className="paper-image" />
			</div>
			{isParagraph && <span>You picked </span>}
		</button>
	);
}
