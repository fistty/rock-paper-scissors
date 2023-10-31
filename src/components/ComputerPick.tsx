import { useEffect } from "react";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import scissorsIcon from "../assets/icon-scissors.svg";

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
	let image = "";

	const randomNumberGenerator = () => {
		const array = new Uint32Array(5);
		window.crypto.getRandomValues(array);
		// Generate a random number between 0 and 2 using modulo;
		const randomNumber = array[0] % 3;

		switch (randomNumber) {
			case 0:
				image = rockIcon;
				return "rock-card";
			case 1:
				image = paperIcon;
				return "paper-card";
			case 2:
				image = scissorsIcon;
				return "scissors-card";
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
		<button className={`game-card computer-pick ${randomNumberGenerator()}`}>
			<div className="game-card-image-container">
				<img src={image} alt="rock icon" />
			</div>

			<span>The House picked</span>
		</button>
	);

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
			{computerPickDisplay && loadedContent}
		</>
	);
}
