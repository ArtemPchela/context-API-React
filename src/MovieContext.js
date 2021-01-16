import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: "Hurry Potter",
            price: "10$",
            id: 8956
        },
        {
            name: "Game of Throne",
            price: "15$",
            id: 1245
        },
        {
            name: "Train to Pusan",
            price: "7$",
            id: 5678
        }
    ]);

    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]} key={props.id}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
