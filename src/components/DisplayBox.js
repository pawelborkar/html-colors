import React from 'react'
import '../index.css'

const DisplayBox = ({ search }) => {
  return (
    <div className='DisplayBox' style={{ backgroundColor: `${search}`, borderColor: `${search}` }}>
      <p>{search.length ? search : 'Input a color name'}</p>
    </div>
  )
}

export default DisplayBox