import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovieById } from "../store/actions";

class MovieById extends Component {
    componentDidMount() {
        const { match: { params } } = this.props
        this.props.fetchMovieById(params.movieId)
        console.log(params.movieId)
    }

    render () {
        const { movie, isFetching } = this.props.singleMovie;
        const { id, title, year, rating, genres, description_full, medium_cover_image } = movie;

        // const genresList = genres.map((genre, index) =>(<li key={index}>{genre}</li>))
        return(
            <div>
                <h5>{id}</h5>
                <h3>{title}</h3>
                <p>{year}</p>
                <p>{rating}</p>
                <h3>{genres}</h3>
                <img src={medium_cover_image} alt={title} />
                <p>{description_full}</p>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        singleMovie: state.smv
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovieById: (movieId) => dispatch(fetchMovieById(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieById);