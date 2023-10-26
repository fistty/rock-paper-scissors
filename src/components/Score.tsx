type countType = { count: number };

export default function Score({ count }: countType) {
	return (
		<div>
			<p>Score</p> <p>{count} </p>
		</div>
	);
}
