import { useRef, useEffect } from "react";
import rockIcon from "../assets/icon-rock.svg";

export default function Rock() {
	const rockRef = useRef<HTMLButtonElement>(null);

	const animatePosition = () => {
		rockRef.current?.classList.toggle("rock-card-transform");
	};

	useEffect(() => {
		rockRef.current?.classList.remove("rock-card-amination");
	}, []);

	return (
		<button
			className="game-card rock-card"
			onClick={animatePosition}
			ref={rockRef}
		>
			<div className="game-card-image-container">
				<img src={rockIcon} alt="rock icon" />
			</div>
		</button>
	);
}
