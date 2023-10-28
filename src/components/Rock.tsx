import { useRef, useEffect } from "react";
import rockIcon from "../assets/icon-rock.svg";
import { PropTypes } from "../typ";

export default function Rock({ setPlayerPick }: PropTypes) {
	const rockRef = useRef<HTMLButtonElement>(null);

	const cardSelection = () => {
		rockRef.current?.classList.toggle("rock-card-transform");
		setPlayerPick("Rock");
	};

	useEffect(() => {
		rockRef.current?.classList.remove("rock-card-amination");
	}, []);

	return (
		<button className="game-card rock-card" onClick={cardSelection} ref={rockRef}>
			<div className="game-card-image-container">
				<img src={rockIcon} alt="rock icon" />
			</div>
		</button>
	);
}
