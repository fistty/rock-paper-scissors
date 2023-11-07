import rulesSvg from "../assets/image-rules.svg";
import closeSvg from "../assets/icon-close.svg";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type PropsType = {
	setIsRulesVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Rules({ setIsRulesVisible }: PropsType) {
	const closeRulesModal = () => {
		setIsRulesVisible(false);
	};

	// Initialize animation controls
	const controls = useAnimation();

	useEffect(() => {
		// When the component mounts, start the animation
		controls.start({ scale: 1 });
		// controls.start({ transform:});
	}, []);

	return (
		<motion.div
			id="rules"
			initial={{ scale: 0.9 }}
			animate={controls}
			exit={{ scale: 0.7 }}
			transition={{ duration: 0.1 }}
		>
			<div className="rules-container">
				<h2>rules</h2>
				<div className="rules-image-container">
					<img src={rulesSvg} alt="Rules image" />
				</div>
				<div className="rules-close-button-container">
					<button className="rules-close-button" onClick={closeRulesModal}>
						<img src={closeSvg} alt="close icon" />
					</button>
				</div>
			</div>
		</motion.div>
	);
}
