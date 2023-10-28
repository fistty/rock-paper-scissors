// type GameRules = {
// 	rock: { beats: string };
// 	paper: { beats: string };
// 	scissors: { beats: string };
// };

// const gameRules: GameRules = {
// 	rock: { beats: "scissors" },
// 	paper: { beats: "rock" },
// 	scissors: { beats: "paper" },
// };

export interface PropTypes {
	playerPick: string;
	setPlayerPick: React.Dispatch<React.SetStateAction<string>>;
}
