import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { SearchInput } from './components/SearchInput'
import { CountryList } from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")
  const [togglebtn, setTogglebtn] = useState(false)
  const [lon, setLon] = useState([])

  let lat1 = 0
  let lon1 = 0
 
  
  

  // bec3ab759388944a94e6c8a6f15a50dc
  const key = "bec3ab759388944a94e6c8a6f15a50dc"
  const apiKey = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid"
  // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}




  useEffect(() => {

    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => {
      // console.log(response)
      setCountries(response.data)
      
    }, [countries])

  }, [])

  useEffect(() => {
    const getData = setTimeout(() => {

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lon1}&lon=${lat1}&appid=bec3ab759388944a94e6c8a6f15a50dc`)
    .then((response) => {
      console.log("openWeather",response.data)
    })

    return () => clearTimeout(getData)

    }, 5000)
  }, [query])

  

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

         const [first, second] = data.latlng
         lat1 = first
         lon1 = second


            
            console.log("Longitude", first, second)

            
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
                <div>
                  <h1>Weather in {data.capital}</h1>
                  <p>{[...data.latlng]}</p>

                </div>
                
              </div>
            )
          })}
          </>
      )
      :
    
      <div>
      <CountryList countries={countries} filteredCountry={filteredCountry} togglebtn={togglebtn} setTogglebtn={setTogglebtn} />
      </div>

      

}
    </div>
    
  )
}

export default App

/**<div>{filteredCountry.length > 10 ? (<span>Too Many matches specify another filter</span>) setLon([...data.latlng])
      : 
      
 */
//{togglebtn && (country.name.common)}