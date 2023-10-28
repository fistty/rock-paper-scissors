import { useEffect, useRef } from "react";
import scissorsIcon from "../assets/icon-scissors.svg";
import { PropTypes } from "../types";

export default function Scissors({ setPlayerPick }: PropTypes) {
	const scissorsRef = useRef<HTMLButtonElement>(null);
	const cardSelection = () => {
		scissorsRef.current?.classList.toggle("scissors-card-transform");
		setPlayerPick("Scissors");
	};

	useEffect(() => {
		scissorsRef.current?.classList.remove("scissors-card-amination");
	}, []);

	return (
		<button
			className="game-card scissors-card"
			onClick={cardSelection}
			ref={scissorsRef}
		>
			<div className="game-card-image-container">
				<img src={scissorsIcon} alt="scissors icon" />
			</div>
		</button>
	);
}
