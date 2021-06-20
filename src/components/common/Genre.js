import React from 'react';

const Genre = ({ genres, currentGenre, genreClicked, textProperty, valueProperty }) => {
    return (
        <ul className="list-group">
            {genres.map(genre =>
                <li style={{cursor:'pointer'}} onClick={() => genreClicked(genre)}
                 key={genre[textProperty]} className={(genre[valueProperty] === currentGenre.name) ? "list-group-item active" : "list-group-item"}>
                {genre[valueProperty]}</li>
            )}
        </ul>
    );
}

export default Genre;