import React from 'react';
import _ from 'lodash'

const TableBody = (props) => {
    const {data, columns} = props

    const renderCell = (item, column)=>{
        if(column.content) return column.content(item)
        return _.get(item, column.header)
    }
    const createKey = (item, column)=>{
        return item._id+(column.header||column.content)
    }
    return ( 
        <tbody>
            {data.map(item=> 
            <tr key={item._id}>
                {columns.map(column=>
                    <td key={createKey(item,column)}>{renderCell(item, column)}</td>
                )}
            </tr>
             )}  
            </tbody>
     );
}
 
export default TableBody;