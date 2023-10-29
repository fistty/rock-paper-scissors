import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import scissorsIcon from "../assets/icon-scissors.svg";

export interface PropTypes {
	isComputerPick: boolean;
}

export default function ComputerPick({ isComputerPick }: PropTypes) {
	if (!isComputerPick) {
		return null;
	}

	let image = "";

	const randomNumberGenerator = () => {
		const randomNumber: number = Math.floor(Math.random() * 3);
		console.log(randomNumber);
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
				break;
		}
	};

	return (
		<button className={`game-card computer-pick ${randomNumberGenerator()}`}>
			<div className="game-card-image-container">
				<img src={image} alt="rock icon" />
			</div>
		</button>
	);
}
