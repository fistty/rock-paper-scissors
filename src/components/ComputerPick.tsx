import { useState, useEffect } from "react";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import { useGameContext } from "../hooks/useGameContext";

export interface ComputerPickPropTypes {
	isPlaceholder: boolean;
	setIsPlaceholder: React.Dispatch<React.SetStateAction<boolean>>;
	computerPickDisplay: boolean;
	setComputerPickDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	gameComponentRef: React.MutableRefObject<HTMLElement | null>;
}

export default function ComputerPick({
	isPlaceholder,
	setIsPlaceholder,
	computerPickDisplay,
	setComputerPickDisplay,
	gameComponentRef,
}: ComputerPickPropTypes) {
	const [image, setImage] = useState<string>("");
	const [computerPickClassName, setComputerPickClassName] = useState<string>("");

	const { computerPick, setComputerPickString, setIsCalculateWinner } =
		useGameContext();
	const randomNumberGenerator = () => {
		const array = new Uint32Array(5);
		window.crypto.getRandomValues(array);
		// Generate a random number between 0 and 2 using modulo;
		const randomNumber = array[0] % 3;

		switch (randomNumber) {
			case 0:
				setImage(rockIcon);
				setComputerPickClassName("rock-card");
				setComputerPickString("Rock");
				break;

			case 1:
				setImage(paperIcon);
				setComputerPickClassName("paper-card");
				setComputerPickString("Paper");
				break;

			case 2:
				setImage(scissorsIcon);
				setComputerPickClassName("scissors-card");
				setComputerPickString("Scissors");
				break;

			default:
				throw new Error("Error in Computer Pick");
		}
	};

	const content = (
		<button
			disabled
			className="game-card computer-pick computer-pick-placeholder"
		></button>
	);

	const loadedContent = (
		<button className={`game-card computer-pick ${computerPickClassName}`}>
			<div className="game-card-image-container">
				<img src={image} alt="computer pick" />
			</div>

			<span>The House picked</span>
		</button>
	);

	useEffect(() => {
		if (computerPick) {
			randomNumberGenerator();
		}
	}, [computerPick]);

	useEffect(() => {
		if (computerPick) {
			setTimeout(() => {
				setIsPlaceholder(true);
			}, 350);

			setTimeout(() => {
				gameComponentRef.current?.classList.add("bigger-width");
				setIsCalculateWinner(true);
				setIsPlaceholder(false);
				setComputerPickDisplay(true);
			}, 1500);
		}
	}, [computerPick]);

	if (!computerPick) {
		return <></>;
	}
	return (
		<>
			{isPlaceholder && content}
			{computerPickDisplay && loadedContent}
		</>
	);
}
