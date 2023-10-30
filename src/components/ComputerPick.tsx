import { useState, useEffect } from "react";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import scissorsIcon from "../assets/icon-scissors.svg";

export interface PropTypes {
	isComputerPick: boolean;
}

export default function ComputerPick({ isComputerPick }: PropTypes) {
	const [isPlaceholder, setIsPlaceholder] = useState<boolean>(false);
	const [computerPickDisplay, setComputerPickDisplay] = useState<boolean>(false);

	let image = "";

	const randomNumberGenerator = () => {
		const randomNumber: number = Math.floor(Math.random() * 3);
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
			}, 4000);
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
