import { useEffect, useRef, useState } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import ComputerPick from "./ComputerPick";
import GameResult from "./GameResult";
import "./game.css";
import { useGameContext } from "../hooks/useGameContext";

export default function GameComponent() {
	const [isComputerPick, setIsComputerPick] = useState<boolean>(false);
	const [gameResultDisplay, setGameResultDisplay] = useState<boolean>(false);
	const [isParagraph, setIsParagraph] = useState<boolean>(false);
	const [isPlaceholder, setIsPlaceholder] = useState<boolean>(false);
	const [computerPickDisplay, setComputerPickDisplay] = useState<boolean>(false);
	const [resultString, setResultString] = useState<string>("");

	const { playerPick, setPlayerPick, playerPickString } = useGameContext();

	const gameComponentRef = useRef<HTMLElement | null>(null);

	const content = () => {
		console.log(playerPickString);

		switch (playerPickString) {
			case "Rock":
				return (
					<>
						{true && <Rock isParagraph={isParagraph} />}
						{false && <Paper />}
						{false && <Scissors />}
					</>
				);

			case "Paper":
				return (
					<>
						{false && <Rock />}
						{true && <Paper isParagraph={isParagraph} />}
						{false && <Scissors />}
					</>
				);

			case "Scissors":
				return (
					<>
						{false && <Rock />}
						{false && <Paper />}
						{true && <Scissors isParagraph={isParagraph} />}
					</>
				);
			default:
				return (
					<>
						{<Rock />}
						{<Paper />}
						{<Scissors />}
					</>
				);
		}
	};

	useEffect(() => {
		if (playerPick) {
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
			setTimeout(() => {
				setGameResultDisplay(true);
			}, 2500);
		}
	}, [isComputerPick]);

	return (
		<main
			className={!playerPick ? "main-game" : "main-game main-game-no-background"}
			ref={gameComponentRef}
		>
			{content()}
			<ComputerPick
				isComputerPick={isComputerPick}
				isPlaceholder={isPlaceholder}
				setIsPlaceholder={setIsPlaceholder}
				computerPickDisplay={computerPickDisplay}
				setComputerPickDisplay={setComputerPickDisplay}
			/>
			{gameResultDisplay && (
				<GameResult
					setGameResultDisplay={setGameResultDisplay}
					gameComponentRef={gameComponentRef}
					setIsComputerPick={setIsComputerPick}
					setIsParagraph={setIsParagraph}
					setComputerPickDisplay={setComputerPickDisplay}
					resultString={resultString}
				/>
			)}
		</main>
	);
}
