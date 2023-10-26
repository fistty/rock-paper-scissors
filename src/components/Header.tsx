import Score from "./Score";

export default function Header() {
	return (
		<header>
			{" "}
			<div className="game-logo"></div> <Score count={34} />{" "}
		</header>
	);
}
