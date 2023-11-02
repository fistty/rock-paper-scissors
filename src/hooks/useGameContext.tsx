import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const useGameContext = () => {
	return useContext(GameContext);
};

export default GameContext;
