import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList( { countries} ) {

  return (
    <div>
        <h1>CountriesList</h1>

        <ul>
        {countries.map( (country) => {
            return (
                <li key = {country.alpha3Code}>
                    <Link to={'/' + country.alpha3Code}>
                        {country.name.common}
                    </Link>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name} flag`} />
                </li>
            
            )    

            } 
        )  } 
      </ul>


    </div>
  );
}

export default CountriesList