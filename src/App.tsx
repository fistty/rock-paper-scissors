import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rules from "./components/Rules";
import GameComponent from "./components/GameComponent";
import "./App.css";

function App() {
	const [isRulesVisible, setIsRulesVisible] = useState<boolean>(false);
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
