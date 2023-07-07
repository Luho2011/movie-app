import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import "./WatchList.css"

const WatchList = () => {
  const {watchlist} = useContext(GlobalContext);

  return (
    <div className='watchlist'>
    <h2>Watch List</h2>
      {watchlist.map((movie) => (
        <img src={movie.Poster} alt='movie'></img>
      ))}
  </div>
);
}

export default WatchList