import React from 'react';

const MovieCard = ({movie}) => {
    const { id, title, year, genres, synopsis, medium_cover_image  } = movie;
    const genresList = genres.map((genre, index) =>(<li key={index}>{genre}</li>))

    return (
        <div>
            <p>{id}</p>
            <h1>{title}</h1>
            <h3>{year}</h3>
            <ul>{genresList}</ul>
            <p>{synopsis}</p>
            <img src={medium_cover_image} alt={`${title}`} />
        </div>
    )
}

export default MovieCard;


