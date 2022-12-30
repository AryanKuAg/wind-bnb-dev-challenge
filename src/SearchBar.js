import React from 'react'

function SearchBar() {
  return (
    <div className='flex items-center'>
        {/* input for location */}
        <input type={"text"} className="border-2 border-[#F2F2F2] h-14 pl-6  rounded-l-full placeholder: font-semibold" placeholder='Add Location'/>
        {/* input for guests */}
        <input type={"text"} className="border-2 border-l-0 border-[#F2F2F2] pl-6 h-14 placeholder: font-semibold" placeholder='Add Guest'/>
        {/* search button */}
        <button  className="border-2 border-[#F2F2F2] h-14  rounded-r-full border-l-0 pl-2 pr-3"><img src="/search.svg" className='h-6 w-6'/></button>
    </div>
  )
}

export default SearchBar