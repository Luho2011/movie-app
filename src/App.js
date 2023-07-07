import {Route, Routes} from "react-router-dom"
import HomeScreen from './HomeScreen';
import WatchList from "../src/componnents/WatchList"
import React from 'react'
import { GlobalProvider } from "./context/GlobalState";

function App() {
  
  return (
    <GlobalProvider>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route path="/watchlist" element={<WatchList/>} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
