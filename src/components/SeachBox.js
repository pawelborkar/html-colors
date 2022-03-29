import React from 'react'

const SeachBox = ({ search, setSearch }) => {
  return (
    <form className='SearchBox' onSubmit={e => e.preventDefault()}>
      <label htmlFor='search'>
        <input
          autoFocus
          id='search'
          type={'text'}
          role='searchbox'
          placeholder='Enter a color name'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}

export default SeachBox