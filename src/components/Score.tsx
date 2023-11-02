import { useGameContext } from "../context/hooks/useGameContext";

export default function Score() {
	const { gameScore } = useGameContext();

	return (
		<div className="score-div">
			<p className="score-description">Score</p>
			<p className="score-count"> {gameScore} </p>
		</div>
	);
}
