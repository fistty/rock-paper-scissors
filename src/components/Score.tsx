type countType = { count: number };

export default function Score({ count }: countType) {
	return (
		<div className="score-div">
			<p className="score-description">Score</p>
			<p className="score-count">{count} </p>
		</div>
	);
}
