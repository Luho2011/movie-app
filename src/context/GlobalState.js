import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer";

//initial state ok
const initialState = {
    watchlist: []
};

//create context
export const GlobalContext = createContext(initialState);

//proiver components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    return (
        <GlobalContext.Provider value={{watchlist: state.watchlist, addMovieToWatchlist}}> 
            {props.children}
        </GlobalContext.Provider>
    )
};