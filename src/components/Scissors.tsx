import { useRef } from "react";
import { GameCardPropTypes } from "../types";
import { useGameContext } from "../context/hooks/useGameContext";
import scissorsIcon from "../assets/icon-scissors.svg";

export default function Scissors({ isParagraph }: GameCardPropTypes) {
	const scissorsRef = useRef<HTMLButtonElement>(null);

	const {
		playerPick,
		setPlayerPick,
		setPlayerPickString,
		setIsActiveFooterButtons,
	} = useGameContext();

	const cardSelection = () => {
		setIsActiveFooterButtons(false);
		setPlayerPick(true);
		setPlayerPickString("Scissors");

		const cls = ["scissors-card-transform", "picked-card"];
		scissorsRef.current?.classList.add(...cls);
	};

	return (
		<button
			className="game-card scissors-card"
			disabled={playerPick ? true : false}
			onClick={cardSelection}
			ref={scissorsRef}
		>
			<div className="game-card-image-container">
				<img src={scissorsIcon} alt="scissors icon" />
			</div>
			{isParagraph && <span>You picked </span>}
		</button>
	);
}
