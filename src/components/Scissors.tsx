import { useRef } from "react";
import scissorsIcon from "../assets/icon-scissors.svg";
import { PropTypes } from "../types";
import { useGameContext } from "../hooks/useGameContext";

export default function Scissors({ isParagraph }: PropTypes) {
	const scissorsRef = useRef<HTMLButtonElement>(null);

	const { playerPick, setPlayerPick, setPlayerPickString } = useGameContext();

	const cardSelection = () => {
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
