import { useState } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import "./game.css";

export default function GameComponent() {
	const [playerPick, setPlayerPick] = useState<string>("");

	const displayGameCardOnSelection = (
		selectedCard: string,
		componentName: string
	) => {
		if (selectedCard === "") {
			return true;
		}

		if (selectedCard === componentName) {
			return true;
		}
	};

	return (
		<main className="main-game">
			{displayGameCardOnSelection(playerPick, Paper.name) && (
				<Paper setPlayerPick={setPlayerPick} />
			)}
			{displayGameCardOnSelection(playerPick, Scissors.name) && (
				<Scissors setPlayerPick={setPlayerPick} />
			)}
			{displayGameCardOnSelection(playerPick, Rock.name) && (
				<Rock setPlayerPick={setPlayerPick} />
			)}
		</main>
	);
}
