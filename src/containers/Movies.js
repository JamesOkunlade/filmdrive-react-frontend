import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

class Movies extends Component {
    render () {
        return(
            <div>
                <MovieCard movie = 'Movie 1' />
                <MovieCard movie = 'Movie 2' />
            </div>
        );
    };
};

export default Movies;