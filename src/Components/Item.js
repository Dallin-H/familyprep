import React, { Component } from 'react';

class Item extends Component {
    constructor() {
        super();
        this.state = {
            editItem: ''

        }
    }

    render() {
        return (
            <div className="ListItem"
                style={{ width: '20vh', height: 'auto', background: '#1E90FF', postion: 'center', margin: 'auto'}}>
                <h1><u>{this.props.name}</u></h1>

                <input
                    placeholder={'edit here'}
                    onChange={(e) => this.setState({editItem: e.target.value})}
                    value={this.state.editItem}
                />
                <button onClick={
                    () => {this.props.handleEditItem(this.props.index, this.state.editItem)
                    this.setState({editItem: ''})}}>
                    Edit </button>

                <button onClick={
                    () => this.props.handleDeleteItem(this.props.index)}>
                    Delete </button>
            </div>
        )
    } 

}
export default Item 