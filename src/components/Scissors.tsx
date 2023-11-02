import { useEffect, useRef } from "react";
import scissorsIcon from "../assets/icon-scissors.svg";
import { PropTypes } from "../types";

export default function Scissors({
	playerPick,
	setPlayerPick,
	isParagraph,
}: PropTypes) {
	const scissorsRef = useRef<HTMLButtonElement>(null);

	const cardSelection = () => {
		const cls = ["scissors-card-transform", "picked-card"];
		scissorsRef.current?.classList.add(...cls);
		if (setPlayerPick) {
			setPlayerPick("Scissors");
		}
	};

	useEffect(() => {
		scissorsRef.current?.classList.remove("scissors-card-amination");
	}, []);

	return (
		<button
			className="game-card scissors-card"
			disabled={playerPick === "" ? false : true}
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
