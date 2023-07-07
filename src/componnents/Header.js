import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = (props) => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Movies</h1>
        </div>
        <div className='header__mid'>
          <Link to="/watchlist">
            <button className='button'>Watchlist</button>
          </Link>
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