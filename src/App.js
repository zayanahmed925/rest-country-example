import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
  return (
    <div>
      <h2>All Country</h2>
      <h2>Avaible Country: {countries.length}</h2>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}> </Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h2>Country: {props.name}</h2>
      <h5>Population: {props.population}</h5>
    </div>
  )
}

export default App;
