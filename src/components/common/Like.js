import React from 'react';

//input : liked : boolean
//output: onClick event 
const Like = ({ liked, onClick }) => {
    return (
        <i onClick={onClick} style={{ cursor: 'pointer' }} className={getInputClass(liked)} area-hidden="true">
        </i>
    );
}

function getInputClass(liked) {
    let className = "fa fa-heart"
    return className += (!liked) ? "-o" : "";
}

export default Like;