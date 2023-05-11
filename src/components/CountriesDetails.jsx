import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountriesDetails({ countries }) {
	const { id } = useParams();

	const findOneCountry = (id) => {
		return countries.find((country) => country.alpha3Code === id);
	};

	// const getBorderNames = (id) => {
	// 	if (countries.length !== 0) {
	// 		const borders = findOneCountry(id).borders;
	// 		return borders.map((border) => findOneCountry(border).name.common);
	// 	}
	// };

	// const [currCountry, SetCurrCountry] = useState(findOneCountry(id));
	// const [borderNamesSt, setBorderNamesSt] = useState(getBorderNames(id));
	const [currCountry, SetCurrCountry] = useState();
	const [borderNamesSt, setBorderNamesSt] = useState();

	useEffect(() => {
		// SetCurrCountry(findOneCountry(id));
		// setBorderNamesSt(getBorderNames(id));
		axios
			.get("https://ih-countries-api.herokuapp.com/countries/" + id)
			.then((res) => {
				SetCurrCountry(res.data);
				const currBorderNames = res.data.borders.map((border) => {
					const currCountry = findOneCountry(border);
					return currCountry ? currCountry.name.common : "";
				});
				setBorderNamesSt(currBorderNames);
			});
	}, [id, countries]);

	if (currCountry && borderNamesSt) {
		return (
			<div className="col-7">
				<img
					src={`https://flagpedia.net/data/flags/icon/72x54/${currCountry.alpha2Code.toLowerCase()}.png`}
					alt={`${currCountry.name.common} flag`}
					width={120}
				/>
				<h1>{currCountry.name.common}</h1>
				<table className="table">
					<thead></thead>
					<tbody>
						<tr>
							<td style={{ width: "30%" }}>Capital</td>
							<td>{currCountry.capital[0]}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>
								{currCountry.area} km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								<ul>
									{currCountry.borders.map((border, i) => {
										return (
											<li key={border}>
												<Link to={`/${border}`}>{borderNamesSt[i]}</Link>
											</li>
										);
									})}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	} else <div></div>;
}

export default CountriesDetails;
