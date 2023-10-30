import { useEffect, useState } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import ComputerPick from "./ComputerPick";
import "./game.css";

export default function GameComponent() {
	const [playerPick, setPlayerPick] = useState<string>("");
	const [isComputerPick, setIsComputerPick] = useState(false);
	const content = () => {
		switch (playerPick) {
			case "Rock":
				return (
					<>
						{false && <Paper playerPick={playerPick} setPlayerPick={setPlayerPick} />}
						{false && (
							<Scissors playerPick={playerPick} setPlayerPick={setPlayerPick} />
						)}
						{true && <Rock playerPick={playerPick} setPlayerPick={setPlayerPick} />}
					</>
				);

			case "Paper":
				return (
					<>
						{true && <Paper playerPick={playerPick} setPlayerPick={setPlayerPick} />}
						{false && (
							<Scissors playerPick={playerPick} setPlayerPick={setPlayerPick} />
						)}
						{false && <Rock playerPick={playerPick} setPlayerPick={setPlayerPick} />}
					</>
				);

			case "Scissors":
				return (
					<>
						{false && <Paper playerPick={playerPick} setPlayerPick={setPlayerPick} />}
						{true && (
							<Scissors playerPick={playerPick} setPlayerPick={setPlayerPick} />
						)}
						{false && <Rock playerPick={playerPick} setPlayerPick={setPlayerPick} />}
					</>
				);
			default:
				return (
					<>
						{<Paper playerPick={playerPick} setPlayerPick={setPlayerPick} />}
						{<Scissors playerPick={playerPick} setPlayerPick={setPlayerPick} />}
						{<Rock playerPick={playerPick} setPlayerPick={setPlayerPick} />}
					</>
				);
		}
	};

	useEffect(() => {
		if (playerPick !== "") {
			setIsComputerPick(true);
		}
	}, [playerPick]);

	return (
		<main
			className={
				playerPick === "" ? "main-game" : "main-game main-game-no-background"
			}
		>
			{content()}
			<ComputerPick isComputerPick={isComputerPick} />
		</main>
	);
}
