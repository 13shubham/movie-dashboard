import React from 'react';

/*Interface of this component would be
*array of columns, sortColumn object, onSort event 
*/

const TableHeader = (props) => {
    const { onSort, columns, sortColumn } = props
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

    const renderSortIcon = (column) => {
        if (column.header !== sortColumn.path) return null;

        if (sortColumn.order === 'asc') return <i className="fa fa-sort-up"></i>
        else return <i className="fa fa-sort-down"></i>

    }

    return (
        <thead>
            <tr>
                {columns.map(column => (
                    <th className="clickable" key={column.header || column.key} onClick={() => raiseSort(column.header)}>
                        {column.label}{renderSortIcon(column)}
                    </th>))}
            </tr>
        </thead>
    );
}

export default TableHeader;