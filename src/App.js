import React, { useState, useEffect } from 'react'
import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core'


function App() {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')


  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }))
          setCountries(countries)
        })
    }

    getCountriesData()
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' value={country}>
            <MenuItem value='worldwide' > Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country}>{country.name} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

    </div>
  );
}

export default App;
