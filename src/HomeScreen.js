import React from 'react'
import { useEffect, useState } from 'react';
import "./HomeScreen.css"
import MovieList from './componnents/MovieList';
import Header from './componnents/Header';
import AddWatchlist from './componnents/AddWatchlist';
import WatchList from './componnents/WatchList';

function HomeScreen() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
  
    const getMovieRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=93fe1299`;
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };
  
    useEffect (() => {
      getMovieRequest(searchValue);
    }, [searchValue]);


  return (
    <div className="HomeScreen">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
    <div className='movie__row'>
        <MovieList movies={movies} watchlistComponent={AddWatchlist}/>
    </div>
  </div>
  );
}

export default HomeScreen