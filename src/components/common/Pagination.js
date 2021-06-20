import React from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types'

//page number to display for that // should have array of page number[1,2,3] and based on click should display the list
const Pagination = props => {
    const { itemCount, pageSize, onPageChange, currentPage } = props
    const pagesCount = Math.ceil(itemCount / pageSize)
    //[1 to pagesCount].map() - we can use lodash 
    if (!pagesCount || pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map(p =>
                    <li key={p} className={(p === currentPage) ? "page-item active" : "page-item"}>
                        <a onClick={() => onPageChange(p)} className="page-link">{p}</a></li>
                )}
            </ul>
        </nav>
    );
}
//added propTypes to check the type of each property so that we are passing correct value
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;