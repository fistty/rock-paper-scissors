import { useEffect, useState } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import "./game.css";
import ComputerPick from "./ComputerPick";

export default function GameComponent() {
	const [playerPick, setPlayerPick] = useState<string>("");
	const [isComputerPick, setIsComputerPick] = useState(false);

	const displayGameCardOnSelection = (
		playerPick: string,
		componentName: string
	) => {
		if (playerPick === "") {
			return true;
		}

		if (playerPick === componentName) {
			return true;
		}
	};

	useEffect(() => {
		console.log(playerPick);

		if (playerPick !== "") {
			setTimeout(() => {
				setIsComputerPick(true);
			}, 2000);
		}
	}, [playerPick]);

	return (
		<main
			className={
				playerPick === "" ? `main-game` : "main-game main-game-no-background"
			}
		>
			{displayGameCardOnSelection(playerPick, Paper.name) && (
				<Paper playerPick={playerPick} setPlayerPick={setPlayerPick} />
			)}
			{displayGameCardOnSelection(playerPick, Scissors.name) && (
				<Scissors playerPick={playerPick} setPlayerPick={setPlayerPick} />
			)}
			{displayGameCardOnSelection(playerPick, Rock.name) && (
				<Rock playerPick={playerPick} setPlayerPick={setPlayerPick} />
			)}
			<ComputerPick isComputerPick={isComputerPick} />
		</main>
	);
}
