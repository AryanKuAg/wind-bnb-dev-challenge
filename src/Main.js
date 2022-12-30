import React from 'react'
import Card from './Card'
import stays from './stays.json'

function Main() {
  return (
    <div>
      <header className='flex justify-between mt-12 mb-4 mx-4'>
        <h1 className='text-2xl font-bold text-[#333333]'>Stays in Finland</h1>
        <p className='text-[#4F4F4F]'>12+ stays</p>
      </header>
      <main className='grid grid-cols-3'>
        {stays.map(stay => <Card {...stay}/>)}
    </main></div>
    
  )
}

export default Main