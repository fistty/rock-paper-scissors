import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rules from "./components/Rules";
import "./App.css";
import GameComponent from "./components/GameComponent";

function App() {
	const [isRulesVisible, setIsRulesVisible] = useState<boolean>(false);
	const [isResult, setIsResult] = useState<boolean>(false);
	const prom = () => {
		// const new Promise.all
	};
	return (
		<div className="app">
			{!isRulesVisible && <Header />}
			{!isRulesVisible && <GameComponent />}
			{!isRulesVisible && <Footer setIsRulesVisible={setIsRulesVisible} />}
			{isRulesVisible && <Rules setIsRulesVisible={setIsRulesVisible} />}
		</div>
	);
}

export default App;
