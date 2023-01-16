import React from 'react'

export const CountryList = ({filteredCountry}) => {
  return (
    <>
        {
        filteredCountry && filteredCountry.map((country, i) => {
          return ( 
            <div>
                <p className="name" key={i}>{country.name.common}</p>
               

            </div>
            
            
          )
        })
      }
    </>
  )
}
