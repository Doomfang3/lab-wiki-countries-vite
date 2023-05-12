import './App.css'
import countriesJson from "./countries.json"
import Navbar from "./Components/Navbar"
//import CountryDetails from "./Components/CountryDetails"
import CountriesList from "./Components/CountriesList"
//import {  Route, Switch } from "react-router-dom";

function App() {
  //const [countriesState, setCountriesState] = useState(countriesJson)
  return <div className='App'>
    <Navbar />
    <div className="container">
          <div className="row">
            <div className="col-5">
              <CountriesList countries={countries} />
            </div>
            </div>
            </div>

  </div>
}
export default App