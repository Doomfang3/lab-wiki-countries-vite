import { useEffect, useState } from "react";
import "./App.css";
// import countriesJson from "./countries.json";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountriesDetails from "./components/CountriesDetails";
import axios from "axios";

function App() {
	const [countriesSt, setCountriesSt] = useState([]);

	useEffect(() => {
		axios
			.get("https://ih-countries-api.herokuapp.com/countries")
			.then((res) => {
				setCountriesSt(res.data);
			});
	}, []);

	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<div className="row">
					<CountriesList countries={countriesSt} />
					<Routes>
						<Route path="/" element={null} />
						<Route
							path="/:id"
							element={<CountriesDetails countries={countriesSt} />}
						/>
						<Route path="*" element={<h2>NOT FOUND</h2>} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
