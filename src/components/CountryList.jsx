import React from 'react'

export const CountryList = ({filteredCountry}) => {

  const handleView = (country) => {
    return(
      <div>{country.name.common}</div>
    )
  }
  return (
    <>
        {
        filteredCountry && filteredCountry.map((country, i) => {
          return ( 
            <div key={i}>
                <p className="name" key={i}>{country.name.common} <button onClick={() => handleView(country)}>show</button></p>
               

            </div>
            
            
          )
        })
      }
    </>
  )
}
