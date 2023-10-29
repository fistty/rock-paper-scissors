import Score from "./Score";
import logo from "../assets/logo.svg";

export default function Header() {
	return (
		<header>
			<div className="header-container">
				<div className="game-logo-container">
					<img className="game-logo" src={logo} alt="Rock Paper Scissors Logo" />
				</div>
				<Score count={1515} />
			</div>
		</header>
	);
}
