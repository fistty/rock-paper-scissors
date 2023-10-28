import { useEffect, useRef } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import "./game.css";

export default function GameComponent() {
	const rockRef = useRef<HTMLButtonElement>(null);

	return (
		<main className="main-game">
			<Paper />
			<Scissors />
			<Rock />
		</main>
	);
}
