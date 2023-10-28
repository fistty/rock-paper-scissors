import { useRef, useEffect } from "react";
import rockIcon from "../assets/icon-rock.svg";

export default function Rock() {
	const scissorsRef = useRef<HTMLButtonElement>(null);
	const animatePosition = () => {
		scissorsRef.current?.classList.toggle("rock-card-animation");
	};

	useEffect(() => {
		scissorsRef.current?.classList.remove("rock-card-amination");
	}, []);
	return (
		<button
			className="game-card rock-card"
			onClick={animatePosition}
			ref={scissorsRef}
		>
			<div className="game-card-image-container">
				<img src={rockIcon} alt="rock icon" />
			</div>
		</button>
	);
}
