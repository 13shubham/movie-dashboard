import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/Like';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';
import Genre from './common/Genre';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './MoviesTable';
import _ from 'lodash'

const Movies = () => {
    const [movies, setMovies] = useState(getMovies())
    const [pageSize, setPageSize] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentGenre, setCurrentGenre] = useState([])
    const [genres, setGenres] = useState(getGenres())
    const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc' })

    useEffect(() => {
        const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()]
        setGenres(genres);
    }, [])

    const removeMovie = (movie) => {
        const moviesArr = movies.filter(m => m._id !== movie._id)
        setMovies(moviesArr);
    }
    const handleLike = (movie) => {
        const moviesObj = [...movies]
        const index = moviesObj.indexOf(movie)
        moviesObj[index] = { ...moviesObj[index] }
        moviesObj[index].liked = !moviesObj[index].liked
        setMovies(moviesObj);
    }
    const handlePageChange = (p) => {
        setCurrentPage(p)
    }
    const handleGenre = (genre) => {
        setCurrentGenre(genre)
        setCurrentPage(1)
    }
    const handleSort = (sortColumn) => {
        setSortColumn(sortColumn)
    }

    if ((movies.length === 0)) {
        return <p>There are no movie in the database</p>
    }
    //apply filter genre before pagination
    const filtered = currentGenre && currentGenre._id
        ? movies.filter(m => m.genre._id === currentGenre._id)
        : movies
    //sort filtered data
    const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order)
    //pass filtered movie to pagination
    const paginatedMovies = paginate(sorted, currentPage, pageSize);
    return (
        <div className="row">
            <div className="col-3">
                <Genre
                    genres={genres}
                    currentGenre={currentGenre}
                    genreClicked={handleGenre} />
            </div>
            <div className="col">
                <p>Showing {filtered.length} movies in the database </p>
                <MoviesTable
                    paginatedMovies={paginatedMovies}
                    onDelete={removeMovie}
                    onLike={handleLike}
                    onSort={handleSort}
                    sortColumn={sortColumn} />
                <Pagination
                    itemCount={filtered.length}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage} />
            </div>
        </div>
    )
}

Genre.defaultProps = {
    textProperty: "_id",
    valueProperty: "name"
}
export default Movies