import { useState, useEffect } from "react";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import { GameRules, winnerCalculator } from "../gameLogic";

export interface PropTypes {
	isComputerPick: boolean;
	isPlaceholder: boolean;
	setIsPlaceholder: React.Dispatch<React.SetStateAction<boolean>>;
	computerPickDisplay: boolean;
	setComputerPickDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ComputerPick({
	isComputerPick,
	isPlaceholder,
	setIsPlaceholder,
	computerPickDisplay,
	setComputerPickDisplay,
}: PropTypes) {
	const [image, setImage] = useState<string>("");
	const [computerPickClassName, setComputerPickClassName] = useState<string>("");

	const randomNumberGenerator = () => {
		const array = new Uint32Array(5);
		window.crypto.getRandomValues(array);
		// Generate a random number between 0 and 2 using modulo;
		const randomNumber = array[0] % 3;

		switch (randomNumber) {
			case 0:
				setImage(rockIcon);
				setComputerPickClassName("rock-card");
				return "Rock";

			case 1:
				setImage(paperIcon);
				setComputerPickClassName("paper-card");
				return "Paper";

			case 2:
				setImage(scissorsIcon);
				setComputerPickClassName("scissors-card");
				return "Scissors";

			default:
				throw new Error("Error in Computer Pick");
		}
	};

	let content = (
		<button
			disabled
			className="game-card computer-pick computer-pick-placeholder"
		></button>
	);

	let loadedContent = (
		<button className={`game-card computer-pick ${computerPickClassName}`}>
			<div className="game-card-image-container">
				<img src={image} alt="computer pick" />
			</div>

			<span>The House picked</span>
		</button>
	);

	useEffect(() => {
		if (isComputerPick) {
			const computerPickString = randomNumberGenerator();
			// Winner Calculation

			// 	const result = winnerCalculator(
			// 		playerPick as keyof GameRules,
			// 		computerPickString
			// 	);
			// 	// console.log(playerPick, "=>>>", computerPickString);
			// 	// console.log(result);
			// 	setResultString(result);
		}
	}, [isComputerPick]);

	useEffect(() => {
		if (isComputerPick) {
			setTimeout(() => {
				setIsPlaceholder(true);
			}, 700);
			setTimeout(() => {
				setComputerPickDisplay(true);
				setIsPlaceholder(false);
			}, 2500);
		}
	}, [isComputerPick]);

	if (!isComputerPick) {
		return <></>;
	}
	return (
		<>
			{isPlaceholder && content}
			{/* {loadedContent} */}
			{computerPickDisplay && loadedContent}
		</>
	);
}
