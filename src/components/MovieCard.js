import React from 'react';



const MovieCard = ({movie}) => {
    const { id, title, year, genre, synopsis, medium_cover_image  } = movie;

    return (
        <div>
            <p>{id}</p>
            <h1>{title}</h1>
            <h3>{year}</h3>
            <h3>{genre}</h3>
            <p>{synopsis}</p>
            <img src={medium_cover_image} alt={`${title}`} />
        </div>
    )
}

export default MovieCard;