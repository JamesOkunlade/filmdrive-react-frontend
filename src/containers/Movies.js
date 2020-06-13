import React, { Component } from 'react';
import { connect } from 'react-redux';


import MovieCard from '../components/MovieCard';

class Movies extends Component {
    render () {
        return(
            <div>
                {console.log(this.props.movies)}
                <MovieCard movie = 'Movie 1' />
                <MovieCard movie = 'Movie 2' />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        movies: state.mvs.movies
    };
}

export default connect(mapStateToProps)(Movies);