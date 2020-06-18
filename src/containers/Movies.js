import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { fetchMovies, setCategoryFilter } from "../store/actions";
import CategoryFilter from '../components/CategoryFilter';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {    
    const { movies, isFetching } = this.props.movies;
    const handleFilterChange = event => this.props.setCategoryFilter(event.target.value); 
    let moviesList;
    if (isFetching) {
        moviesList = 'Loading...'
    }
    moviesList = movies.map((movie, index) => (<MovieCard key={index} movie={movie} />))
    
    return (
      <div>
        <Header />
        <div className="container movies-container">
            <CategoryFilter handleFilterChange={handleFilterChange} />
            <div style={{ opacity: isFetching ? 0.9 : 1 }}>
            { moviesList }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.mvs,
    // category: state.cat
  };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        setCategoryFilter: category => dispatch(setCategoryFilter(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
