import { useRef, useEffect } from "react";
import rockIcon from "../assets/icon-rock.svg";

export default function Rock() {
	const rockRef = useRef<HTMLButtonElement>(null);

	const animatePosition = () => {
		rockRef.current?.classList.toggle("rock-card-transform");
	};

	const handleMouseLeave = () => {
		rockRef.current?.classList.remove("rock-card-mouse-over");
		console.log(2);
	};

	useEffect(() => {
		rockRef.current?.classList.remove("rock-card-amination");
		if (rockRef.current) {
			rockRef.current.addEventListener("mouseleave", handleMouseLeave);
		}
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
