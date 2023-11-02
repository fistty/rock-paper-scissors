export interface GameRules {
	Rock: { beats: string };
	Paper: { beats: string };
	Scissors: { beats: string };
}

const gameRules: GameRules = {
	Rock: { beats: "Scissors" },
	Paper: { beats: "Rock" },
	Scissors: { beats: "Paper" },
};

export const winnerCalculator = (
	playerPickString: keyof GameRules,
	computerPickString: string
): "Win" | "Draw" | "Lose" => {
	if (playerPickString === computerPickString) {
		return "Draw";
	}

	if (gameRules[playerPickString].beats === computerPickString) {
		return "Win";
	}

	return "Lose";
};
