import { Link } from "react-router-dom";

function CountriesList({ countries }) {
	return (
		<div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
			<div className="list-group">
				{countries.map((country) => (
					<Country country={country} key={country.alpha3Code} />
				))}
			</div>
		</div>
	);
}

export default CountriesList;

const Country = ({ country }) => {
	return (
		<Link
			to={`/${country.alpha3Code}`}
			className="list-group-item list-group-item-action"
		>
			<img
				src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
				alt={`${country.name.common} flag`}
				width={50}
			/>
			<p>{country.name.common}</p>
		</Link>
	);
};
