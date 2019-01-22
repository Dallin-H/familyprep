import React, { Component } from 'react';
import axios from 'axios';

class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            recipe: '',
        }
    }
    //methods go here

    handleClick() {

       
       let min = Math.ceil(1000);
       let max = Math.floor(10000);

        let num = Math.floor(Math.random() * (max - min)) + min
        console.log(num)

        axios.get(`https://www.food2fork.com/api/get?key=ecf38fff40f427e457809b2ab74b47dc&rId=${num}`)
            .then(response => {
                console.log(response)
                this.setState({
                    recipe: response.data.recipe.title
                })
            })
    }


    render() {
        return (
            <div style={{
                        height: 'auto', width: '20vw',
                        background: '#e8ea5d', border: '1px black solid',
                        margin: '15px auto', paddingBottom: '10px'
                    }}>
                <h3>
                Inspiration:
                </h3>
                    <button 
                    onClick={() => this.handleClick()}>
                        Click Here
                    </button>
                <div>
                    <h4>results:</h4>
                    {this.state.recipe}
                </div>
            </div>
        )
    }
}

export default Recipe;