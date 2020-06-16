import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from 'axios';

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../store/actions";

class Movies extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMovies());
  }

  render() {
    // const { movies, isFetching, lastUpdated } = this.props.movies;
    const { movies, isFetching, error, lastUpdated } = this.props.movies;

    return (
      <div>
        <Header />
        <div className="container movies-container">
          <p>
            {new Date(lastUpdated).toLocaleTimeString()}.{""}{" "}
          </p>
          {movies? (
            <div style={{ opacity: isFetching ? 0.1 : 1 }}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          ) : (<div>{console.log(error)}</div>) }
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // movies: state.mvs.movies,
    movies: state.mvs
  };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchMovies: () => dispatch({type: FETCH_MOVIES})
//     }
// }

// const mapDispatchToProps = dispatch => (fetchMovies())

export default connect(mapStateToProps)(Movies);
// export default Movies;
