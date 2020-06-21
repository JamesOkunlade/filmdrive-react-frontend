import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const MovieCard = (props) => {
    
    const { id, title, year, genres, description_full, medium_cover_image  } = props.movie;
    const genresList = genres.map((genre, index) =>(<li key={index}>{genre}</li>))
    // const handleclick =  props.setClickedMovie(movieId)

    return (
        <div>
            <p>{id}</p>
            <Link to={`/movie/${id}`}><h1>{title}</h1></Link>
            <h3>{year}</h3>
            <ul>{genresList}</ul>
            <p>{description_full}</p>
            <Link to={`/movie/${id}`}><img src={medium_cover_image} alt={title} /></Link>
        </div>
    )
}



const mapDispatchToProps = dispatch => {
    return {
        setClickedMovie: () => dispatch()
    }
}

export default connect(null, mapDispatchToProps)(MovieCard);


