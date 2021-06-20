import React from 'react';
import Like from './common/Like';

const MoviesTable = (props) => {

    const { paginatedMovies, onDelete, onLike, onSort, sortColumn } = props

    const raiseSort = (headings) => {
        const newSortColumn = { ...sortColumn }
        if (newSortColumn.path === headings) {
            newSortColumn.order = newSortColumn.order === 'asc' ? 'desc' : 'asc'
        } else {
            newSortColumn.path = headings;
            newSortColumn.order = 'asc'
        }
        onSort(newSortColumn);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => raiseSort('title')}>Title</th>
                    <th onClick={() => raiseSort('genre.name')}>Genre</th>
                    <th onClick={() => raiseSort('numberInStock')}>Stock</th>
                    <th onClick={() => raiseSort('dailyRentalRate')}>Rate</th>
                </tr>
            </thead>
            <tbody>
                {paginatedMovies.map(m => <tr key={m._id}>
                    <td>{m.title}</td>
                    <td>{m.genre.name}</td>
                    <td>{m.numberInStock}</td>
                    <td>{m.dailyRentalRate}</td>
                    <td><Like liked={m.liked}
                        onClick={() => onLike(m)} /></td>
                    <td><button onClick={() => onDelete(m)} className="btn btn-danger">Delete</button></td>
                </tr>)}

            </tbody>
        </table>
    );
}

export default MoviesTable;