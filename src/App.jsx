import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { SearchInput } from './components/SearchInput'
import { CountryList } from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")
  const [togglebtn, setTogglebtn] = useState(false)
  const [weather, setWeather] = useState([])

 

  let lat1 = 0
  let lon1 = 0

 


 
  
  

 
  const key = "bec3ab759388944a94e6c8a6f15a50dc"
  const apiKey = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid"
 




  useEffect(() => {

    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => {
      
      setCountries(response.data)
      
    }, [countries])

  }, [])

  useEffect(() => {
    const getData = setTimeout(() => {

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lon1}&lon=${lat1}&appid=bec3ab759388944a94e6c8a6f15a50dc`)
    .then((response) => {
      
      setWeather(response.data)
    })

    return () => clearTimeout(getData)

    }, 2000)
  }, [])

  

  const filteredCountry = countries.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()))

 


  

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
                  <p><strong>Temprature {weather.main.temp} Celcius</strong></p>

                  <div>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    <strong>{weather.weather[0].description}</strong>
                    <p><strong>Wind {weather.wind.speed} m/s</strong></p>
                  </div>

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