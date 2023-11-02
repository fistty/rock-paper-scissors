import { useGameContext } from "../context/hooks/useGameContext";

type PropsType = {
	setIsRulesVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Footer({ setIsRulesVisible }: PropsType) {
	const openRulesModal = () => {
		console.log("Clickable");

		setIsRulesVisible(true);
	};

	const { playerPick, setGameScore, scoreReset } = useGameContext();

	const handleScoreReset = () => {
		setGameScore(0);
		localStorage.setItem("score", "0");
	};

	return (
		<footer>
			<button
				className="footer-button new-game-button"
				disabled={scoreReset ? false : false}
				onClick={handleScoreReset}
			>
				Reset Score
			</button>
			<button
				className="footer-button rules-button"
				disabled={playerPick ? true : false}
				onClick={openRulesModal}
			>
				Rules
			</button>
		</footer>
	);
}
