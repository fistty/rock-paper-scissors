import { useEffect, useRef } from "react";
import scissorsIcon from "../assets/icon-scissors.svg";

export default function Scissors() {
	const scissorsRef = useRef<HTMLButtonElement>(null);
	const animatePosition = () => {
		scissorsRef.current?.classList.toggle("scissors-card-animation");
	};

	useEffect(() => {
		scissorsRef.current?.classList.remove("scissors-card-amination");
	}, []);

	return (
		<button
			className="game-card scissors-card"
			onClick={animatePosition}
			ref={scissorsRef}
		>
			<div className="game-card-image-container">
				<img src={scissorsIcon} alt="scissors icon" />
			</div>
		</button>
	);
}
