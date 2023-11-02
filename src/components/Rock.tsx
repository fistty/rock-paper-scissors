import { useRef } from "react";
import { useGameContext } from "../context/hooks/useGameContext";
import { GameCardPropTypes } from "../types";
import rockIcon from "../assets/icon-rock.svg";

export default function Rock({ isParagraph }: GameCardPropTypes) {
	const rockRef = useRef<HTMLButtonElement>(null);

	const { playerPick, setPlayerPick, setPlayerPickString, setScoreReset } =
		useGameContext();

	const cardSelection = () => {
		setPlayerPick(true);
		setPlayerPickString("Rock");
		setScoreReset(false);

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
