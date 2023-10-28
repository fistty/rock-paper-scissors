import { useEffect, useRef } from "react";
import scissorsIcon from "../assets/icon-scissors.svg";

export default function Scissors() {
	const scissorsRef = useRef<HTMLButtonElement>(null);
	const animatePosition = () => {
		scissorsRef.current?.classList.toggle("scissors-card-transform");
	};

	const handleMouseLeave = () => {
		scissorsRef.current?.classList.remove("rock-card-mouse-over");
		console.log(2);
	};

	useEffect(() => {
		scissorsRef.current?.classList.remove("scissors-card-amination");
		if (scissorsRef.current) {
			scissorsRef.current.addEventListener("mouseleave", handleMouseLeave);
		}
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
