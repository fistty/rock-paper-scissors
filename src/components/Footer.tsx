import { useGameContext } from "../hooks/useGameContext";

type PropsType = {
	setIsRulesVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Footer({ setIsRulesVisible }: PropsType) {
	const openRulesModal = () => {
		setIsRulesVisible(true);
	};

	const { setGameScore, isActiveFooterButtons } = useGameContext();

	const handleScoreReset = () => {
		setGameScore(0);
		localStorage.setItem("score", "0");
	};

	return (
		<footer>
			<button
				className="footer-button new-game-button"
				disabled={isActiveFooterButtons ? false : true}
				onClick={handleScoreReset}
			>
				Reset Score
			</button>
			<button
				className="footer-button rules-button"
				disabled={isActiveFooterButtons ? false : true}
				onClick={openRulesModal}
			>
				Rules
			</button>
		</footer>
	);
}
