type GameRules = {
	rock: { beats: string };
	paper: { beats: string };
	scissors: { beats: string };
};

export const gameRules: GameRules = {
	rock: { beats: "scissors" },
	paper: { beats: "rock" },
	scissors: { beats: "paper" },
};
