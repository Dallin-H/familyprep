import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Components/Recipe'
import Item from './Components/Item'
import Bag from './Components/Bag'

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: [],
      name: '',
      description: '',
    }
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleEditItem = this.handleEditItem.bind(this)
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
    console.log(index)
    axios.delete(`http://localhost:4000/api/item/${index}`)
      .then((response) => {
        this.setState({
          itemsList: response.data
        })
      })
  }

  handleEditItem(index, name) {
    console.log(index)
    axios.put(`http://localhost:4000/api/item/${index}`, {name})
      .then((response) => {
        this.setState({
          itemsList: response.data,
        })
      })
  }
 
  render() {
    const mappedItems = this.state.itemsList.map((eachObj) => {
      console.log(eachObj)
      return <Item key={eachObj.index} name={eachObj.name}
        handleEditItem={this.handleEditItem}
        handleDeleteItem={this.handleDeleteItem}
        index={eachObj.index}

      />
    })

    return (
      <div className="App" >
        <Bag /><Bag /><Bag /><Bag /><Bag />
        <Recipe />
        <h1 className='header'>
          Grocery List
        </h1>
        <button
          style={{ width: '15vh', height: '7.5vh' }}
          onClick={() => this.handleGetItems()}
        >Get top 3</button>
        <div>
          <input
            onChange={(e) => this.handleNameInput(e.target.value)}
            value={this.state.name}
            placeholder={'item'}
          />
          <button
            onClick={() => this.handleAddToList()}>
            Add item to list
            </button>
        </div>
        <div
          style={{ height: '80vh', width: '20vw', background: '#4682B4', border: '1px black solid', margin: '15px auto', paddingTop: '15px' }}>
          {mappedItems}
        </div>
        <Bag /><Bag /><Bag /><Bag /><Bag />
      </div>
    );
  }
}

export default App;
