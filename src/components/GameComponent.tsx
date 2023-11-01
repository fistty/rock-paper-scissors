import { useEffect, useRef, useState } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import ComputerPick from "./ComputerPick";
import GameResult from "./GameResult";
import { GameRules, winnerCalculator } from "../gameLogic";
import "./game.css";

export default function GameComponent() {
	const [playerPick, setPlayerPick] = useState<string>("");
	const [isComputerPick, setIsComputerPick] = useState<boolean>(false);
	const [computerPickString, setComputerPickString] = useState<
		keyof GameRules | null
	>(null);
	const [gameResultDisplay, setGameResultDisplay] = useState<boolean>(false);
	const [isParagraph, setIsParagraph] = useState<boolean>(false);
	const [isPlaceholder, setIsPlaceholder] = useState<boolean>(false);
	const [computerPickDisplay, setComputerPickDisplay] = useState<boolean>(false);

	const gameComponentRef = useRef<HTMLElement | null>(null);

	const content = () => {
		switch (playerPick) {
			case "Rock":
				return (
					<>
						{false && <Paper />}
						{false && <Scissors />}
						{true && (
							<Rock
								playerPick={playerPick}
								setPlayerPick={setPlayerPick}
								isParagraph={isParagraph}
							/>
						)}
					</>
				);

			case "Paper":
				return (
					<>
						{true && (
							<Paper
								playerPick={playerPick}
								setPlayerPick={setPlayerPick}
								isParagraph={isParagraph}
							/>
						)}
						{false && <Scissors />}
						{false && <Rock />}
					</>
				);

			case "Scissors":
				return (
					<>
						{false && <Paper />}
						{true && (
							<Scissors
								playerPick={playerPick}
								setPlayerPick={setPlayerPick}
								isParagraph={isParagraph}
							/>
						)}
						{false && <Rock />}
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
			setTimeout(() => {
				gameComponentRef.current?.classList.add("main-game-transform");
			}, 350);

			setTimeout(() => {
				setIsParagraph(true);
			}, 700);
		}
	}, [playerPick]);

	useEffect(() => {
		if (isComputerPick) {
			let playerPickString = playerPick as keyof GameRules;

			if (computerPickString !== null) {
				console.log(playerPickString, "=>>>", computerPickString);

				const result = winnerCalculator(playerPickString, computerPickString);
				console.log(result);
			}
			setTimeout(() => {
				setGameResultDisplay(true);
			}, 2500);
		}
	}, [isComputerPick]);

	return (
		<main
			className={
				playerPick === "" ? "main-game" : "main-game main-game-no-background"
			}
			ref={gameComponentRef}
		>
			{content()}
			<ComputerPick
				isComputerPick={isComputerPick}
				setComputerPickString={setComputerPickString}
				isPlaceholder={isPlaceholder}
				setIsPlaceholder={setIsPlaceholder}
				computerPickDisplay={computerPickDisplay}
				setComputerPickDisplay={setComputerPickDisplay}
			/>
			{gameResultDisplay && (
				<GameResult
					setGameResultDisplay={setGameResultDisplay}
					gameComponentRef={gameComponentRef}
					setPlayerPick={setPlayerPick}
					setIsComputerPick={setIsComputerPick}
					setComputerPickString={setComputerPickString}
					setIsParagraph={setIsParagraph}
					setComputerPickDisplay={setComputerPickDisplay}
				/>
			)}
		</main>
	);
}
