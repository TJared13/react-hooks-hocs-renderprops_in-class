import React, {useState, useEffect} from 'react';

const MovieList = props => {
    const [movies, setMovies] = useState(['Interstellar', 'Inception', 'Fury', 'Inglorious Bastards']);
    const [userMovie, setUserMovie] = useState('');

    function addMovie(){
        const newList = [userMovie, ...movies];

        setMovies(newList);
        setUserMovie('');
    }

    useEffect(() => { // acts as componentDidUpdate
        console.log('useEffect in MovieList fired!')
    }, [userMovie, movies])

    return (
        <div>
            {
                movies.map(movieStr => <h2>{movieStr}</h2>)
            }
            <input 
            onChange={e => setUserMovie(e.target.value)}
            placeholder='Enter a movie'
            value={userMovie}
             />

             <button onClick={addMovie}>Add your Movie</button>
        </div>
    )
};

export default MovieList;