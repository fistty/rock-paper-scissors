export type GameRules = {
	Rock: { beats: string };
	Paper: { beats: string };
	Scissors: { beats: string };
};

export const gameRules: GameRules = {
	Rock: { beats: "Scissors" },
	Paper: { beats: "Rock" },
	Scissors: { beats: "Paper" },
};

export const winnerCalculator = (
	playerPick: keyof GameRules,
	computerPick: string
): string => {
	if (playerPick === computerPick) {
		console.log("Draw");
		return "Draw";
	}

	if (gameRules[playerPick].beats === computerPick) {
		console.log("Win");
		return "Win";
	}

	console.log("Lose");

	return "Lose";
};