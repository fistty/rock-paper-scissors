import { useState, useEffect } from "react";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import { GameRules, winnerCalculator } from "../gameLogic";

export interface PropTypes {
	playerPick: string;
	isComputerPick: boolean;
	setComputerPickString: React.Dispatch<
		React.SetStateAction<keyof GameRules | "">
	>;
	isPlaceholder: boolean;
	setIsPlaceholder: React.Dispatch<React.SetStateAction<boolean>>;
	computerPickDisplay: boolean;
	setComputerPickDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ComputerPick({
	playerPick,
	isComputerPick,
	setComputerPickString,
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
				setComputerPickString("Rock");
				setComputerPickClassName("rock-card");
				return "Rock";
				break;

			case 1:
				setImage(paperIcon);
				setComputerPickString("Paper");
				setComputerPickClassName("paper-card");
				return "Paper";

				break;

			case 2:
				setImage(scissorsIcon);
				setComputerPickString("Scissors");
				setComputerPickClassName("scissors-card");
				return "Scissors";
				break;

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
			const result = winnerCalculator(
				playerPick as keyof GameRules,
				computerPickString
			);
			console.log(playerPick, "=>>>", computerPickString);
			console.log(result);
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

	// if (!isComputerPick) {
	// 	return <></>;
	// }
	return (
		<>
			{isPlaceholder && content}
			{/* {loadedContent} */}
			{computerPickDisplay && loadedContent}
		</>
	);
}
