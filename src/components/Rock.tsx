import { useState, useRef, useEffect } from "react";
import rockIcon from "../assets/icon-rock.svg";
import { PropTypes } from "../types";

export default function Rock({ playerPick, setPlayerPick }: PropTypes) {
	const [isParagraph, setIsParagraph] = useState(false);

	const rockRef = useRef<HTMLButtonElement>(null);

	const cardSelection = () => {
		const cls = ["rock-card-transform", "picked-card"];
		rockRef.current?.classList.add(...cls);

		setPlayerPick("Rock");
	};

	useEffect(() => {
		rockRef.current?.classList.remove("rock-card-amination");
	}, []);

	useEffect(() => {
		if (playerPick !== "") {
			setTimeout(() => {
				setIsParagraph(true);
			}, 500);
		}
	}, [playerPick]);

	return (
		<button
			className={"game-card rock-card"}
			disabled={playerPick === "" ? false : true}
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
