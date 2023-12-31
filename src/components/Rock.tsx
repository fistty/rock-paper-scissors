import { useRef } from "react";
import { useGameContext } from "../hooks/useGameContext";
import { GameCardPropTypes } from "../types";
import rockIcon from "../assets/icon-rock.svg";

export default function Rock({ isParagraph }: GameCardPropTypes) {
	const rockRef = useRef<HTMLButtonElement>(null);

	const {
		playerPick,
		setPlayerPick,
		setPlayerPickString,
		setIsActiveFooterButtons,
	} = useGameContext();

	const cardSelection = () => {
		setIsActiveFooterButtons(false);
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
				<img src={rockIcon} alt="rock icon" className="rock-image" />
			</div>
			{isParagraph && <span>You picked </span>}
		</button>
	);
}
