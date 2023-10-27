import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import "./game.css";

export default function GameComponent() {
	return (
		<main className="main-game">
			<Paper />
			<Scissors />
			<Rock />
		</main>
	);
}
