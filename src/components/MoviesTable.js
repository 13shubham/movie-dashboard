import React from 'react';
import Like from './common/Like';
import Table from './common/Table';
import { Link } from 'react-router-dom';

const MoviesTable = ({ paginatedMovies, onDelete, onLike, onSort, sortColumn }) => {

    const columns = [{ header: 'title', label: 'Title', content: m=> <Link to={`/movies/${m._id}`}>{m.title}</Link>},
    { header: 'genre.name', label: 'Genre' },
    { header: 'numberInStock', label: 'Stock' },
    { header: 'dailyRentalRate', label: 'Rate' },
    { key: 'like', content: m => <Like liked={m.liked} onClick={() => onLike(m)} /> },
    { key: 'delete', content: m => <button onClick={() => onDelete(m)} className="btn btn-danger">Delete</button> },]

    return (
        <Table
            onSort={onSort}
            sortColumn={sortColumn}
            columns={columns}
            data={paginatedMovies} />
    );
}

export default MoviesTable;