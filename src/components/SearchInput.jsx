import React from 'react'

export const SearchInput = ({query, setQuery}) => {
  return (
    <div>
        <label htmlFor="">find countries</label>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  )
}
