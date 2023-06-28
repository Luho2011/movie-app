import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Movies</h1>
        </div>
        <div className='header__right'>
            <input
            className='form'
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            placeholder='type to search..'
            >     
            </input>
         </div>
    </div>
     
    
  )
}

export default Header