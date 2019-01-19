import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Item from './Components/Item'


class App extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: [],
      name: '',
      description: '',
    }
  }

  // methods here:
  handleNameInput(value) {
    this.setState({ name: value })
  }

  handleDescriptionInput(value) {
    this.setState({ description: value })
  }

  handleAddToList() {
    const itemObj = {
      name: this.state.name,
      description: this.state.description
    }
    // newObj.name = this.state.newItem;
    // newObj.description = this.state.newDescription;
    axios.post('http://localhost:4000/api/item', itemObj)
      .then(response => {
        this.setState({
          itemsList: response.data
        })
      })

    // this.state.itemsList.push(newObj)

    this.setState({
      name: '',
      description: ''
    })
  }

  handleGetItems() {
    axios.get('http://localhost:4000/api/item')
      .then(response => {
        this.setState({
          itemsList: response.data
        })
      })
  }

  // handleGet3() {
  // console.log('hit')
  // this.setState({
  //   itemsList: this.props.serverItems
  // })
  // }

  handleDeleteItem(index) {
    axios.delete(`http://localhost:4000/api/item/${index}`)
      .then((response) => {
        this.setState({
          itemsList: response.data
        })
      })
  }

  handleEditItem(index) {
    axios.put(`http://localhost:4000/api/item/${index}`)
      .then((response) => {
        this.setState({
          itemsList: response.data,
          //edit: false
        })
      })
  }

  render() {
    const mappedItems = this.state.itemsList.map((eachObj) => {
      return <Item key={eachObj.id} name={eachObj.name}
        description={eachObj.description}
        handleEditItem={this.state.handleEditItem}
        handleDeleteItem={this.state.handleDeleteItem}

      />
    })

    return (
      <div className="App" >
        <h1
          style={{ height: '5vh', width: '50vw', background: 'lightgrey', border: "1px black solid", margin: '15px auto', paddingBottom: '10px' }}>
          Grocery List
        </h1>
        <button onClick={() => this.handleGetItems()}
        >Get top 3</button>
        <div>
          <input onChange={(e) => this.handleNameInput(e.target.value)}
            value={this.state.name}
            placeholder={'item'}
          />
          <input onChange={(e) => this.handleDescriptionInput(e.target.value)}
            value={this.state.description}
            placeholder={`description`} />
          <button
            onClick={() => this.handleAddToList()}> Add item to list </button>
        </div>
        <div
          style={{ height: '80vh', width: '20vw', background: 'lightblue', border: '1px black solid', margin: '15px auto', paddingTop: '15px' }}>
          {mappedItems}
        </div>
      </div>
    );
  }
}

export default App;
