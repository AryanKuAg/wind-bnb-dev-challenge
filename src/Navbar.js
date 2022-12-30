import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div className='flex justify-between'>
        <img src="/logo.svg"/>
        <SearchBar/>
    </div>
  )
}

export default Navbar