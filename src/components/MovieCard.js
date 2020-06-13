import React from 'react';



const MovieCard = (props) => {
    const { movie } = props;

    return (
        <div>
            <h1>{movie}</h1>
        </div>
    )
}

export default MovieCard;