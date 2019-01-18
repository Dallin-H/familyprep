import React, { Component } from 'react';

const Item = (props) => {
    return (
        <div
            style={{ width: '20vw', height: '100px', background: 'blue' }}>
           <h1><u>{props.name}</u></h1>
           <h5><i>{props.description}</i></h5>
           <p>list id: {props.id}</p>
        </div>
    )
}


export default Item