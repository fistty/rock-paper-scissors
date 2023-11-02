import { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";

export const useGameContext = () => {
	return useContext(GameContext);
};

export default GameContext;
