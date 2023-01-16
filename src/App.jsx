import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { SearchInput } from './components/SearchInput'
import { CountryList } from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")




  useEffect(() => {

    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => {
      // console.log(response)
      setCountries(response.data)
      
    })

  }, [])

  

  const filteredCountry = countries.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()))
console.log(filteredCountry)
 


  

  return (
    <div className="App">
      <h1>Counties Data</h1>
      <SearchInput query={query} setQuery={setQuery} />
      {filteredCountry.length > 10 ? (
        <span>Too Many matches specify another filter</span>
      )
      : filteredCountry.length === 1 ? (
        <>
          {filteredCountry.map((data,i) =>{
            return (
              <div key={i}>
                <h1>{data.name.common}</h1>
                <div>
                  <strong>Capital {data.capital}</strong>

                </div>
                
                <div>
                  <p>Population {data.area}</p>
                </div>
                <h2>Languages</h2>
                <p>{Object.values(data.languages).map((language, i) => <li key={i}>{language}</li>)}</p>
                <div>
                  <img src={data.flags.png} alt="" />
                </div>
              </div>
            )
          })}
          </>
      )
      :
    
      
      <CountryList countries={countries} filteredCountry={filteredCountry} />
}
    </div>
  )
}

export default App

/**<div>{filteredCountry.length > 10 ? (<span>Too Many matches specify another filter</span>) 
      : 
      
 */
