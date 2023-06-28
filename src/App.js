import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './componnents/MovieList';
import Header from './componnents/Header';

function App() {
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
    <div className="app">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className='movie__row'>
      <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
