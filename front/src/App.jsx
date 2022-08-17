import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
	const [isLogin, setLogin] = useState(true);
	const states = {
		setLogin,
	};
	const dynamicPart = () => {
		if (isLogin === true) {
			return <Login states={states} />;
		}
	};
	return <div className="App">{dynamicPart()}</div>;
}

export default App;
