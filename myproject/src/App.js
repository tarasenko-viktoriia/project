import React from "react";
import Home from "./components/Home"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "./redux/Store";

const App = () => {
	return (
		<Provider store ={store}>
			<Home/>
		</Provider>
	);
};

export default App;
