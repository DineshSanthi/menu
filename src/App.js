import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Importing Pages */
import Home from "./pages/home";
import Menu from "./pages/menu";
import CategoryMenu from "./pages/category-menu";
import TvMenu from "./pages/tv-menu"
import Page1 from "./pages/tv-menu/menu1/1.js";
import Page2 from "./pages/tv-menu/menu2/2.js";
import Page3 from "./pages/tv-menu/menu3/3.js";
import Page4 from "./pages/tv-menu/menu4/4.js";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
                    <Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
                    <Route path="/category-menu" element={<CategoryMenu />} />
					<Route path="/tv-menu" element={<TvMenu />} />
                    <Route path="/tv-menu/menu1" element={<Page1 />} />
                    <Route path="/tv-menu/menu2" element={<Page2 />} />
                    <Route path="/tv-menu/menu3" element={<Page3 />} />
                    <Route path="/tv-menu/menu4" element={<Page4 />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer">
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }
