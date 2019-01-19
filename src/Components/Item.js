import React, { Component } from 'react';

const Item = (props) => {
    return (
        <div className="ListItem"
            style={{ width: '20vw', height: 'auto', background: 'blue' }}>
           <h1><u>{props.name}</u></h1>
           <h5><i>{props.description}</i></h5>

           <button> Edit </button>
           <button> Delete </button>
        </div>
    )
}


export default Item