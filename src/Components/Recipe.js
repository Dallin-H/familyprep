import React, { Component } from 'react';
import axios from 'axios';

class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            search: ''
        }
    }
    //methods go here

    handleChangeSearch(value) {
        this.setState({
            search: value
        })
    }

    handleClick(text) {
        axios.get(`https://food2fork.com/api/get?key=edc&q=${text}`)
            .then(response => {
                console.log(response)
                this.setState({
                    recipe: response.data
                })
            })
        this.setState({
            search: ''
        })
    }


    render() {
        return (
            <div>
                <h3
                    style={{
                        height: 'auto', width: '20vw',
                        background: '#e8ea5d', border: '1px black solid',
                        margin: '15px auto', paddingBottom: '10px'
                    }}
                >Recipe Finder:
                    <input
                        onChange={(value) => this.handleChangeSearch(value)}
                        placeholder={'seperate w/ comma'}

                    />
                    <button 
                    style={{}} 
                    onClick={() => this.handleClick()}>
                        Click Here
                    </button>
                </h3>
            </div>
        )
    }
}

export default Recipe;