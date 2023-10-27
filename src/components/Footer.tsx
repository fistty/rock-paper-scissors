type PropsType = {
	setIsRulesVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Footer({ setIsRulesVisible }: PropsType) {
	const openRulesModal = () => {
		setIsRulesVisible(true);
	};
	return (
		<footer>
			<button className="footer-button new-game-button">Reset Score</button>
			<button className="footer-button rules-button" onClick={openRulesModal}>
				Rules
			</button>
		</footer>
	);
}
