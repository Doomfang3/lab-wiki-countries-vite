import React from 'react'
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div >
      <ul className="list-group">
        {countries.map((country) => (
          <li className="list-group-item list-group-item-action" key={country.alpha3Code}>
          <Link to={`/${country.alpha3Code}`}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`Flag of ${country.name}`}
            />
            {country.name}
          </Link>
        </li>

        ))}
      </ul>
    </div>
  )
}

export default CountriesList
