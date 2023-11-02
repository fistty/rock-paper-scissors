import { useRef } from "react";
import rockIcon from "../assets/icon-rock.svg";
import { PropTypes } from "../types";
import { useGameContext } from "../hooks/useGameContext";

export default function Rock({ isParagraph }: PropTypes) {
	const rockRef = useRef<HTMLButtonElement>(null);

	const { playerPick, setPlayerPick, setPlayerPickString } = useGameContext();

	const cardSelection = () => {
		setPlayerPick(true);
		setPlayerPickString("Rock");
		const cls = ["rock-card-transform", "picked-card"];
		rockRef.current?.classList.add(...cls);
	};
	return (
		<button
			className={"game-card rock-card"}
			disabled={playerPick ? true : false}
			onClick={cardSelection}
			ref={rockRef}
		>
			<div className="game-card-image-container">
				<img src={rockIcon} alt="rock icon" />
			</div>
			{isParagraph && <span>You picked </span>}
		</button>
	);
}
